'use client'
import { Grid } from '@mantine/core'
import React from 'react'
import CartItems from './CartItems'
import CartSummary from './CartSummary'

export default function CartTable() {
    return (
        <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 30 }}>
            <Grid.Col span={8}>
                <CartItems />
            </Grid.Col>
            <Grid.Col span={4}>
                <CartSummary />
            </Grid.Col>
        </Grid>
    )
}