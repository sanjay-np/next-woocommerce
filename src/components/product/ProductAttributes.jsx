import { Box, ColorSwatch, Group, Select } from '@mantine/core'
import React from 'react'

export default function ProductAttributes(props) {
  const { attributes } = props
  return (
    <div className='product-filter-wrapper'>
      {
        attributes?.map((item, index) => {
          if (item?.node.name === 'pa_color') {
            return (
              <div className={`details-filter-row ${item?.node.name}`} key={index}>
                <label>{item?.node.label}:</label>
                <Group gap={5} className='color-options-group'>
                  {item?.node?.options?.map((opt, optIndex) => {
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
              <div className={`details-filter-row ${item?.node.name}`} key={index}>
                <label>{item?.node.label}:</label>
                <Group>
                  <div className="product-nav select-custom">
                    <Box maw={180}>
                      <Select
                        label=""
                        placeholder={`Select a ${item?.node.label}`}
                        data={item?.node?.options}
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
