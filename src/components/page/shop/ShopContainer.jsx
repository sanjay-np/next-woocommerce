'use client'
import ProductCard from '@/components/product/ProductCard'
import { Accordion, Checkbox, ColorSwatch, Flex, Grid, Group, NativeSelect, Pagination, RangeSlider, SimpleGrid } from '@mantine/core'
import { useState } from 'react'

export default function ShopContainer(props) {
	const { productsInfo, categories } = props
	const [priceRange, setPriceRange] = useState([0, 1000])
	return (
		<>
			<Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
				<Grid.Col span={3}>
					<div className='shop-sidebar'>
						<div className="widget widget-clean">
							<label>Filters:</label>
							<a href="#" className="sidebar-filter-clear">Clear</a>
						</div>
						<Accordion variant="default" multiple defaultValue={['price', 'category', 'color', 'size']}>
							<Accordion.Item value="price" className='widget price-filter'>
								<Accordion.Control className='widget-title'>Price</Accordion.Control>
								<Accordion.Panel>
									<div className="filter-price-text">
										Price Range:
										<span className="filter-price-range">${priceRange[0]} - ${priceRange[1]}</span>
									</div>
									<RangeSlider
										color='#C96'
										label={null}
										marks={[
											{ value: 0, label: '$0' },
											{ value: 1000, label: '$1000' },
										]}
										mt="xl"
										mb="xl"
										ml="xs"
										mr="xs"
										showLabelOnHover={false}
										size="xs"
										thumbSize={15}
										onChange={setPriceRange}
										min={0}
										max={1000}
										step={1}
										defaultValue={priceRange}
										minRange={1}
									/>
								</Accordion.Panel>
							</Accordion.Item>
							<Accordion.Item value="category" className='widget category-filter'>
								<Accordion.Control className='widget-title'>Category</Accordion.Control>
								<Accordion.Panel>
									<ul>
										{categories?.map((item, index) => (
											<div key={item?.node.id} className='category-filter-item'>
												<Checkbox
													label={`${item?.node.name}`}
													color='#C96'
												/>
											</div>
										))}
									</ul>
								</Accordion.Panel>
							</Accordion.Item>
							<Accordion.Item value="color" className='widget color-filter'>
								<Accordion.Control className='widget-title'>Color</Accordion.Control>
								<Accordion.Panel>
									<Group gap={5}>
										<ColorSwatch color='green' />
										<ColorSwatch color='blue' />
										<ColorSwatch color='red' />
										<ColorSwatch color='yellow' />
									</Group>
								</Accordion.Panel>
							</Accordion.Item>
							<Accordion.Item value="size" className='widget size-filter'>
								<Accordion.Control className='widget-title'>Size</Accordion.Control>
								<Accordion.Panel>
									<div className="size-filter-item">
										<Checkbox
											label={`XS`}
											color='#C96'
										/>
									</div>
									<div className="size-filter-item">
										<Checkbox
											label={`S`}
											color='#C96'
										/>
									</div>
									<div className="size-filter-item">
										<Checkbox
											label={`M`}
											color='#C96'
										/>
									</div>
									<div className="size-filter-item">
										<Checkbox
											label={`L`}
											color='#C96'
										/>
									</div>
									<div className="size-filter-item">
										<Checkbox
											label={`XL`}
											color='#C96'
										/>
									</div>
									<div className="size-filter-item">
										<Checkbox
											label={`XXL`}
											color='#C96'
										/>
									</div>
								</Accordion.Panel>
							</Accordion.Item>
						</Accordion>
					</div>
				</Grid.Col>
				<Grid.Col span={9}>
					<div className="toolbox">
						<Flex justify={'space-between'} align={'center'}>
							<div className="toolbox-left">
								<div className="toolbox-info">
									Showing <span>{productsInfo?.edges.length} of {productsInfo?.pageInfo?.total}</span> Products
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
						{productsInfo?.edges?.map((item, index) => (
							<ProductCard item={item?.node} key={item?.node.id} />
						))}
					</SimpleGrid>
					<div className="pagination-wrapper">
						<Pagination total={6} defaultValue={1} color='#C96' />
					</div>
				</Grid.Col>
			</Grid>
		</>
	)
}
