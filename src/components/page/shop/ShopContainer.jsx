'use client'
import React, { useEffect, useRef, useState } from 'react'
import ProductCard from '@/components/product/ProductCard'
import { Box, Flex, Grid, Group, Loader, LoadingOverlay, NativeSelect, Pagination, SimpleGrid, Text } from '@mantine/core'
import ShopSidebar from './sidebar/ShopSidebar'
import { useSelector } from 'react-redux'
import { useGetProductsQuery } from '@/store/reducers/productsSlice'
import { useInView } from 'react-intersection-observer'

export default function ShopContainer(props) {

	const { productsInfo, categories, colors, sizes } = props
	const filter = useSelector((state) => state.shopFilterSlice)
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true)
	const [canRunQuery, setCanRunQuery] = useState(false)
	const [filterQuery, setFilterQuery] = useState('')
	const [after, setAfter] = useState(productsInfo?.pageInfo?.endCursor)
	const [hasNextPage, setHasNextPage] = useState(productsInfo?.pageInfo?.hasNextPage)
	const { ref, inView } = useInView()

	const { refetch } = useGetProductsQuery({ first: 12, after: after, where: filterQuery });

	const fetchFilteredProducts = async () => {
		try {
			setAfter('')
			filterQueryBuilder()
			setLoading(true)
			const res = await refetch();
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
		if (canRunQuery) {
			fetchFilteredProducts()
		}
	}, [filterQuery])

	const loadMoreProducts = async () => {
		const res = await refetch();
		const responseProducts = res?.data?.data.products.nodes
		setProducts([...products, ...responseProducts])
		setAfter(res?.data?.data?.products.pageInfo?.endCursor)
		setHasNextPage(res?.data?.data?.products.pageInfo?.hasNextPage)
	}


	useEffect(() => {
		if (inView) {
			loadMoreProducts()
		}
	}, [inView])

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
						<LoadingOverlay visible={loading} zIndex={1000} overlayProps={{ radius: "sm", blur: 1 }} loaderProps={{ color: '#C96', type: 'bars' }} />
						<React.Fragment>
							<div className="toolbox">
								<Flex justify={'space-between'} align={'center'}>
									<div className="toolbox-left">
										<div className="toolbox-info">
											{/* Showing <span>{productsInfo?.nodes.length} of {productsInfo?.pageInfo?.total}</span> Products */}
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

							</SimpleGrid>
							{
								products?.length === 0 && (
									<Text size="xl" fw={400} ta="center" c={'#c96'} style={{ marginTop: '20px' }}>
										No products match the selected filter. Please try different criteria.
									</Text>
								)
							}
							{
								hasNextPage && (
									<div ref={ref}>
										<Flex justify={'center'} style={{ marginTop: '20px' }}>
											<Loader size={30} color='#C96' type="bars" />
										</Flex>
									</div>
								)
							}

						</React.Fragment>
					</Box>
				</Grid.Col>
			</Grid>
		</React.Fragment>
	)
}