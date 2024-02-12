import React, { useState } from 'react'
import { Accordion, Checkbox, ColorSwatch, Group, RangeSlider, UnstyledButton } from '@mantine/core'
import { useDispatch, useSelector } from 'react-redux'
import { updateCategoryFilter, updateColorFilter, updatePriceRangeFilter, updateSizeFilter } from '@/store/reducers/shopFilterSlice'

export default function ShopSidebar(props) {
    const filter = useSelector((state) => state.shopFilterSlice)
    const dispatch = useDispatch()
    const { categories, colors, sizes } = props
    const [priceRange, setPriceRange] = useState([0, 100])

    const handleFilterChange = (type, value) => {
        props.onFilterChangeMethod(true)
        if (type === 'price') {
            dispatch(updatePriceRangeFilter(value))
        }
        if (type === 'category') {
            const isChecked = value.target.checked
            const val = value.target.value
            if (isChecked) {
                dispatch(updateCategoryFilter([...filter.category, val]))
            } else {
                dispatch(updateCategoryFilter(filter.category.filter((item) => item !== val)))
            }
        }
        if (type === 'size') {
            const isChecked = value.target.checked
            const val = value.target.value
            if (isChecked) {
                dispatch(updateSizeFilter([...filter.size, val]))
            } else {
                dispatch(updateSizeFilter(filter.size.filter((item) => item !== val)))
            }
        }
        // if (type === 'color') {
        //     if (!filter.color.includes(value)) {
        //         dispatch(updateColorFilter([...filter.color, value]))
        //     } else {
        //         dispatch(updateColorFilter(filter.color.filter((item) => item !== value)))
        //     }
        // }
    }
    const handleRemoveFilter = () => {
        dispatch(updatePriceRangeFilter(null))
        setPriceRange([0, 100])
        dispatch(updateCategoryFilter([]))
        dispatch(updateSizeFilter([]))
    }
    return (
        <div className='shop-sidebar'>
            <div className="widget widget-clean">
                <label>Filters:</label>
                <UnstyledButton onClick={handleRemoveFilter} className='sidebar-filter-clear'>Clear</UnstyledButton>
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
                            marks={[{ value: 0, label: '$0' }, { value: 1000, label: '$100' },]}
                            mt="xl"
                            mb="xl"
                            ml="xs"
                            mr="xs"
                            showLabelOnHover={false}
                            size="xs"
                            thumbSize={15}
                            onChange={setPriceRange}
                            min={0}
                            max={100}
                            step={1}
                            defaultValue={priceRange}
                            minRange={1}
                            onChangeEnd={(value) => { handleFilterChange('price', value) }}
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
                                            value={item?.slug}
                                            label={`${item?.name}`}
                                            color='#C96'
                                            onChange={(event) => handleFilterChange('category', event)}
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
                                        <ColorSwatch
                                            color={item?.slug}
                                        />
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
                                        label={`${item?.name}`}
                                        color='#C96'
                                        value={item?.slug}
                                        onChange={(event) => handleFilterChange('size', event)}
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
