import React, { useState } from 'react'
import { Accordion, Checkbox, ColorSwatch, Group, RangeSlider } from '@mantine/core'
import { useRouter } from 'next/navigation'

export default function ShopSidebar(props) {
    const router = useRouter()
    const [selectedFilters, setSelectedFilters] = useState({})
    const { categories, colors, sizes } = props
    const [priceRange, setPriceRange] = useState([0, 1000])
    const handleFilterChange = (value) => {
        if (value === 'price') {
            router.push(`/shop?price=${priceRange[0]}-${priceRange[1]}`)
        }
    }
    return (
        <div className='shop-sidebar'>
            <div className="widget widget-clean">
                <label>Filters:</label>
                <a href="#" className="sidebar-filter-clear">Clear</a>
            </div>
            <Accordion variant="default" multiple defaultValue={['price', 'category', 'color', 'size']}>

                {/* Price Filter */}
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

                {/* Category Filter */}
                {categories && (
                    <Accordion.Item value="category" className='widget category-filter'>
                        <Accordion.Control className='widget-title'>Category</Accordion.Control>
                        <Accordion.Panel>
                            <ul>
                                {categories?.map((item, index) => (
                                    <div key={item?.id} className='category-filter-item'>
                                        <Checkbox
                                            label={`${item?.name}`}
                                            color='#C96'
                                        />
                                    </div>
                                ))}
                            </ul>
                        </Accordion.Panel>
                    </Accordion.Item>
                )}
                {/* Color Filter */}
                {colors && (
                    <Accordion.Item value="color" className='widget color-filter'>
                        <Accordion.Control className='widget-title'>Color</Accordion.Control>
                        <Accordion.Panel>
                            <Group gap={5}>
                                {colors?.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <ColorSwatch color={item.slug} />
                                    </React.Fragment>
                                ))}
                            </Group>
                        </Accordion.Panel>
                    </Accordion.Item>
                )}

                {sizes && (
                    <Accordion.Item value="size" className='widget size-filter'>
                        <Accordion.Control className='widget-title'>Size</Accordion.Control>
                        <Accordion.Panel>
                            {sizes?.map((item, index) => (
                                <div className="size-filter-item" key={index}>
                                    <Checkbox
                                        label={`${item.name}`}
                                        color='#C96'
                                    />
                                </div>
                            ))}
                        </Accordion.Panel>
                    </Accordion.Item>
                )}
            </Accordion>
        </div>
    )
}
