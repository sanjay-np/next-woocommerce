'use client'
import ProductCard from '@/components/product/ProductCard'
import { Flex, Grid, Group, NativeSelect, SimpleGrid } from '@mantine/core'
import React from 'react'

export default function CategoryContainer(props) {
	const { productsInfo } = props
	const products = productsInfo?.nodes
	return (
		<>
			<Grid>
				<Grid.Col span={3}>
					<div className='shop-sidebar'>

					</div>
				</Grid.Col>
				<Grid.Col span={9}>
					<div className="toolbox">
						<Flex justify={'space-between'} align={'center'}>
							<div className="toolbox-left">
								<div className="toolbox-info">
									Showing <span>{products?.length} of {products?.pageInfo?.total}</span> Products
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
				</Grid.Col>
			</Grid>
		</>
	)
}
