import { setHasSelectedVariation, setIsAvailable, setSelectedAttributes, setSelectedVariation } from '@/store/reducers/productSlice'
import { Box, CheckIcon, ColorSwatch, Group, Select, rem } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function ProductAttributes(props) {
	const { attributes } = props
	const { product, selectedAttributes, isVariableProduct } = useSelector((state) => state.productSlice)
	const dispatch = useDispatch()
	const [attrChanged, setAttrChanged] = useState(false)

	const handleAttributeChange = (name, value) => {
		setAttrChanged(true)
		const attr = { ...selectedAttributes, [name]: value }
		dispatch(setSelectedAttributes(attr))
	}

	useEffect(() => {
		if (isVariableProduct && attrChanged) {
			const filteredVariations = filterData(selectedAttributes)
			if (filteredVariations.length === 1) {
				dispatch(setHasSelectedVariation(true))
				dispatch(setSelectedVariation(filteredVariations[0]))
				dispatch(setIsAvailable(true))
			}else{
				dispatch(setHasSelectedVariation(false))
				dispatch(setSelectedVariation(null))
				dispatch(setIsAvailable(false))
			}
		}
	}, [selectedAttributes])

	function filterData(filterObject) {
		const data = product?.variations
		return data.nodes.filter(node => {
			const attributes = node.attributes.nodes || [];
			return Object.entries(filterObject).every(([key, value]) => {
				const matchingAttribute = attributes.find(attr => attr.name.toLowerCase() === key.toLowerCase() && attr.value.toLowerCase() === value.toLowerCase());
				return !!matchingAttribute;
			});
		});
	}
	return (
		<div className='product-filter-wrapper'>
			{attributes?.map((item, index) => {
				if (item?.name === 'pa_color') {
					return (
						<div className={`details-filter-row ${item?.name}`} key={index}>
							<label>{item?.label}:</label>
							<Group gap={6} className='color-options-group'>
								{item?.terms?.nodes.map((term) => {
									return (
										<div key={term?.id} className={``} >
											<ColorSwatch
												color={term?.slug}
												size={'36'}
												style={{ color: '#fff', cursor: 'pointer' }}
												component='button'
												onClick={() => { handleAttributeChange(item?.name, term?.slug) }}
											>
												{selectedAttributes[item.name] == term.slug && <CheckIcon style={{ width: rem(12), height: rem(12) }} />}
											</ColorSwatch>
										</div>
									)
								})}
							</Group>
						</div>
					)
				} else {
					return (
						<div className={`details-filter-row ${item?.name}`} key={index}>
							<label>{item?.label}:</label>
							<Group>
								<div className="product-nav select-custom">
									<Box maw={180}>
										<Select
											placeholder={`Select a ${item?.label}`}
											data={item?.options}
											onChange={(_value) => { handleAttributeChange(item?.name, _value) }}
										/>
									</Box>
								</div>
							</Group>
						</div>
					)
				}
			})}
		</div>
	)
}
