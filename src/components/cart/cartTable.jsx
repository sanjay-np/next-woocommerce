'use client'
import { Grid } from '@mantine/core'
import React from 'react'
import CartItems from './cartItems'
import CartSummary from './cartSummary'
import Coupon from './coupon'

export default function CartTable() {
    return (
        <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 20 }}>
            <Grid.Col span={8}>
                <CartItems />
                <Coupon />
            </Grid.Col>
            <Grid.Col span={4}>
                <CartSummary />
            </Grid.Col>
        </Grid>
    )
}
