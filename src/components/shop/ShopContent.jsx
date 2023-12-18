'use client'
import { Grid, SimpleGrid } from '@mantine/core'
import ProductItem from '../products/ProductItem'

export default function ShopContent() {
    return (
        <>
            <Grid>
                <Grid.Col span={3}></Grid.Col>
                <Grid.Col span={9}>
                    <SimpleGrid cols={3}>
                        <ProductItem id={1} />
                        <ProductItem id={2} />
                        <ProductItem id={3} />
                        <ProductItem id={4} />
                        <ProductItem id={5} />
                        <ProductItem id={6} />
                        <ProductItem id={7} />
                        <ProductItem id={8} />
                        <ProductItem id={9} />
                        <ProductItem id={10} />
                        <ProductItem id={11} />
                        <ProductItem id={12} />
                        <ProductItem id={13} />
                        <ProductItem id={14} />
                        <ProductItem id={1} />
                        <ProductItem id={2} />
                        <ProductItem id={3} />
                        <ProductItem id={4} />
                    </SimpleGrid>
                </Grid.Col>
            </Grid>
        </>
    )
}
