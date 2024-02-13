import { Box, ColorSwatch, Group, Select } from '@mantine/core'
import React from 'react'

export default function ProductAttributes(props) {
	const { attributes } = props
	return (
		<div className='product-filter-wrapper'>
			{
				attributes?.map((item, index) => {
					if (item?.name === 'pa_color') {
						return (
							<div className={`details-filter-row ${item?.name}`} key={index}>
								<label>{item?.label}:</label>
								<Group gap={5} className='color-options-group'>
									{item?.options?.map((opt, optIndex) => {
										return (
											<div key={optIndex} className={`color-option ${optIndex === 0 ? 'active' : ''}`} >
												<ColorSwatch color={opt} />
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
												label=""
												placeholder={`Select a ${item?.label}`}
												data={item?.options}
												clearable
											/>
										</Box>
									</div>
								</Group>
							</div>
						)
					}
				})
			}
		</div>
	)
}
