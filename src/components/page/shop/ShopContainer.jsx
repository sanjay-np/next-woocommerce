'use client'
import React, { useEffect, useRef, useState } from 'react'
import ProductCard from '@/components/product/ProductCard'
import { Box, Flex, Grid, Group, Loader, LoadingOverlay, NativeSelect, Pagination, SimpleGrid, Text } from '@mantine/core'
import ShopSidebar from './sidebar/ShopSidebar'
import { useInView } from 'react-intersection-observer'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsSlice } from '@/store/reducers/productsSlice'

export default function ShopContainer(props) {
	const { productsResponse, categories, colors, sizes } = props
	const filter = useSelector((state) => state.shopFilterSlice)
	const queriedProducts = useSelector((state) => state.productSlice)
	const dispatch = useDispatch();
	const { ref, inView } = useInView()

	const [products, setProducts] = useState(productsResponse?.nodes);
	const [loading, setLoading] = useState(false)
	const [after, setAfter] = useState(productsResponse?.pageInfo?.endCursor)
	const [hasNextPage, setHasNextPage] = useState(productsResponse?.pageInfo?.hasNextPage)
	const [canRunQuery, setCanRunQuery] = useState(false)

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
			fetchFilteredProducts(query)
		}
	}, [filter]);

	const fetchFilteredProducts = async (query) => {
		try {
			let after = ''
			setLoading(true)
			dispatch(fetchProductsSlice({ first: 9, after: after, where: query }))
		} catch (error) {
			console.error('Error fetching products:', error);
		}
	};
	useEffect(() => {
		if (canRunQuery) {
			setProducts(queriedProducts?.products.nodes)
			setLoading(false)
			setAfter(queriedProducts?.products?.pageInfo?.endCursor)
			setHasNextPage(queriedProducts?.products?.pageInfo?.hasNextPage)
		}
	}, [queriedProducts])


	useEffect(() => {
		if (inView) {
			loadMoreProducts()
		}
	}, [inView])

	const loadMoreProducts = async () => {
		console.log('here');
		// const res = await refetch();
		// const responseProducts = res?.data?.data.products.nodes
		// setProducts([...products, ...responseProducts])
		// setAfter(res?.data?.data?.products.pageInfo?.endCursor)
		// setHasNextPage(res?.data?.data?.products.pageInfo?.hasNextPage)
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