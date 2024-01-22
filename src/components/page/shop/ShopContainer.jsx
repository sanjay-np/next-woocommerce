'use client'
import React from 'react'
import ProductCard from '@/components/product/ProductCard'
import { Box, Flex, Grid, Group, LoadingOverlay, NativeSelect, Pagination, SimpleGrid } from '@mantine/core'
import ShopSidebar from './sidebar/ShopSidebar'
import { useGetProductsQuery } from '@/store/reducers/productsSlice'

export default function ShopContainer(props) {
	const { categories, colors, sizes } = props
	const { data, error, isLoading } = useGetProductsQuery()
	return (
		<React.Fragment>
			<Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
				<Grid.Col span={3}>
					<ShopSidebar categories={categories} colors={colors} sizes={sizes} />
				</Grid.Col>
				<Grid.Col span={9}>
					<Box pos={'relative'} style={{ minHeight: '100vh' }}>
						<LoadingOverlay visible={isLoading} zIndex={1000} overlayProps={{ radius: "sm", blur: 1 }} loaderProps={{ color: '#C96', type: 'bars' }} />
						{
							data !== undefined && (
								<React.Fragment>
									<div className="toolbox">
										<Flex justify={'space-between'} align={'center'}>
											<div className="toolbox-left">
												<div className="toolbox-info">
													Showing <span>{data?.data?.products?.nodes.length} of {data?.data?.products?.pageInfo?.total}</span> Products
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
										{data?.data?.products?.nodes?.map((item, index) => (
											<ProductCard item={item} key={item?.id} />
										))}
									</SimpleGrid>
									<div className="pagination-wrapper">
										<Pagination total={6} defaultValue={1} color='#C96' />
									</div>
								</React.Fragment>
							)
						}
					</Box>
				</Grid.Col>
			</Grid>
		</React.Fragment>
	)
}
