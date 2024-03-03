'use client'
import { Grid } from '@mantine/core'
import React from 'react'
import CartItems from './CartItems'
import CartSummary from './CartSummary'
import { useSelector } from 'react-redux'
import Empty from '@/components/empty/Empty'

export default function CartTable() {
    const { cart } = useSelector((state) => state.sessionSlice)
    const count = cart?.contents?.nodes.length
    if(count === 0) {
        return <Empty size={100} />
    }
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