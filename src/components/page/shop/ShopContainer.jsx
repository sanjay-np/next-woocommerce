'use client'
import ProductCard from '@/components/product/ProductCard'
import { Grid, SimpleGrid } from '@mantine/core'
import React from 'react'

export default function ShopContainer(props) {
    const {products, categories} = props
    return (
        <>
            <Grid>
                <Grid.Col span={3}>
                    <div className='shop-sidebar'>
                        <ul>
                            {categories?.map((item, index) => (
                                <li key={item?.node.id}><a href="#">{item?.node.name}</a></li>
                            ))}
                        </ul>
                    </div>
                </Grid.Col>
                <Grid.Col span={9}>
                    <SimpleGrid cols={3}>
                    {products?.map((item, index) => (
                        <ProductCard  item = {item?.node} key={item?.node.id}/>
                    ))}
                    </SimpleGrid>
                </Grid.Col>
            </Grid>
        </>
    )
}
