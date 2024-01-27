'use client'
import React, { useEffect, useRef, useState } from 'react'
import ProductCard from '@/components/product/ProductCard'
import { Box, Flex, Grid, Group, LoadingOverlay, NativeSelect, Pagination, SimpleGrid } from '@mantine/core'
import ShopSidebar from './sidebar/ShopSidebar'
import { useSelector } from 'react-redux'
import { useGetProductsQuery } from '@/store/reducers/productsSlice'

export default function ShopContainer(props) {

	const { productsInfo, categories, colors, sizes } = props
	const filter = useSelector((state) => state.shopFilterSlice)
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true)
	const [canRunQuery, setCanRunQuery] = useState(false)
	const [filterQuery, setFilterQuery] = useState('')

	const { data, error, isLoading, refetch } = useGetProductsQuery({ first: 10, after: '', where: filterQuery });

	const fetchFilteredProducts = async () => {
		try {
			filterQueryBuilder()
			setLoading(true)
			const res = await refetch();
			console.log(res)
			setProducts(res?.data?.data.products.nodes)
			setLoading(false)
		} catch (error) {
			console.error('Error fetching products:', error);
		}
	};

	const filterQueryBuilder = () => {
		let query = ''
		if (filter?.priceRange?.length > 0) {
			query += `minPrice:${filter?.priceRange[0]}, maxPrice:${filter?.priceRange[1]},`
		}
		if (filter?.category?.length > 0 || filter?.size?.length > 0) {
			let taxonomies = [];

			if (filter?.category?.length > 0) {
				filter?.category?.map((item, index) => {
					taxonomies.push(`{ taxonomy: PRODUCT_CAT, terms: "${item}" }`)
				})
			}
			if (filter?.size?.length > 0) {
				filter?.size?.map((item, index) => {
					taxonomies.push(`{ taxonomy: PA_SIZE, terms: "${item}" }`)
				})
			}

			query += `taxonomyFilter: {relation: AND, filters: [${taxonomies}]},`
		}
		setFilterQuery(query)
	}


	useEffect(() => {
		if (!canRunQuery) {
			if (props) {
				setProducts(productsInfo?.nodes)
				setLoading(false)
			}
		} else {
			filterQueryBuilder()
		}
	}, [filter]);

	useEffect(() => {
		fetchFilteredProducts()
	}, [filterQuery])

	return (
		<React.Fragment>
			<Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
				<Grid.Col span={3}>
					<ShopSidebar
						categories={categories}
						colors={colors}
						sizes={sizes}
						onFilterChangeMethod={setCanRunQuery}
					/>
				</Grid.Col>
				<Grid.Col span={9}>
					<Box pos={'relative'} style={{ minHeight: '100vh' }}>
						<LoadingOverlay visible={loading} zIndex={1000} overlayProps={{ radius: "sm", blur: 10 }} loaderProps={{ color: '#C96', type: 'bars' }} />
						<React.Fragment>
							<div className="toolbox">
								<Flex justify={'space-between'} align={'center'}>
									<div className="toolbox-left">
										<div className="toolbox-info">
											Showing <span>{productsInfo?.nodes.length} of {productsInfo?.pageInfo?.total}</span> Products
										</div>
									</div>
									<div className="toolbox-right">
										<div className="toolbox-sort">
											<Group>
												<label>Sort by:</label>
												<NativeSelect
													data={['Most Popular', 'Most Rated', 'Date']}
												/>
											</Group>
										</div>
									</div>
								</Flex>
							</div>
							<SimpleGrid cols={3}>
								{products?.map((item, index) => (
									<ProductCard item={item} key={item?.id} />
								))}
								{/* TODO: Show no products message */}
							</SimpleGrid>
							<div className="pagination-wrapper">
								<Pagination total={2} defaultValue={1} color='#C96' />
								{/* TODO: Fix the pagination */}
							</div>
						</React.Fragment>
					</Box>
				</Grid.Col>
			</Grid>
		</React.Fragment>
	)
}