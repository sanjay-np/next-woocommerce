'use client'
import React, { useEffect, useState } from 'react'
import ProductCard from '@/components/product/ProductCard'
import { Box, Flex, Grid, Group, Loader, LoadingOverlay, NativeSelect, SimpleGrid, Text } from '@mantine/core'
import ShopSidebar from './sidebar/ShopSidebar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsSlice } from '@/store/reducers/productsSlice'
import { useInViewport } from '@mantine/hooks'

export default function ShopContainer(props) {
	const { productsResponse, categories, colors, sizes } = props
	const filter = useSelector((state) => state.shopFilterSlice)
	const queriedProducts = useSelector((state) => state.productSlice)
	const dispatch = useDispatch();
	const {ref, inViewport} = useInViewport()

	const [products, setProducts] = useState(productsResponse?.nodes);
	const [loading, setLoading] = useState(false)
	const [after, setAfter] = useState(productsResponse?.pageInfo?.endCursor)
	const [hasNextPage, setHasNextPage] = useState(productsResponse?.pageInfo?.hasNextPage)
	const [canRunQuery, setCanRunQuery] = useState(false)
	const [filterQuery, setFilterQuery] = useState('')

	useEffect(() => {
		if (canRunQuery) {
			let query = ''
			if (filter?.priceRange?.length > 0) {
				query += `minPrice:${filter?.priceRange[0]}, maxPrice:${filter?.priceRange[1]},`
			}
			if (filter?.category?.length > 0 || filter?.size?.length > 0) {
				let taxonomies = [];
				if (filter?.category?.length > 0) {
					filter?.category?.map((item, index) => {
						taxonomies.push(`{ taxonomy: PRODUCT_CAT, terms:"${item}"}`)
					})
				}
				if (filter?.size?.length > 0) {
					filter?.size?.map((item, index) => {
						taxonomies.push(`{ taxonomy: PA_SIZE, terms:"${item}"}`)
					})
				}
				query += `taxonomyFilter: {relation: AND, filters: [${taxonomies}]},`
			}
			setFilterQuery(query)
			fetchFilteredProducts(query)
		}
	}, [filter]);

	const fetchFilteredProducts = async (query) => {
		try {
			let after = ''
			setLoading(true)
			dispatch(fetchProductsSlice({ first: 9, after: after, where: query }))
			setAfter(after)
		} catch (error) {
			console.error('Error fetching products:', error);
		}
	};
	useEffect(() => {
		if (canRunQuery && after === '') {
			setProducts(queriedProducts?.products.nodes)
			setLoading(false)
			setAfter(queriedProducts?.products?.pageInfo?.endCursor)
			setHasNextPage(queriedProducts?.products?.pageInfo?.hasNextPage)
		}
		if (after !== '' && inViewport) {
			const responseProducts = queriedProducts?.products.nodes
			setProducts([...products, ...responseProducts])
			setAfter(queriedProducts?.products?.pageInfo?.endCursor)
			setHasNextPage(queriedProducts?.products?.pageInfo?.hasNextPage)
		}
	}, [queriedProducts])


	useEffect(() => {
		if (inViewport) {
			loadMoreProducts(filterQuery)
		}
	}, [inViewport])

	const loadMoreProducts = async (filterQuery) => {
		if (inViewport) {
			dispatch(fetchProductsSlice({ first: 9, after: after, where: filterQuery?filterQuery:'' }))
		}
	}
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