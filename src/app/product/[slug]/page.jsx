import BreadCrumbComp from '@/components/breadcrumbs/BreadCrumbComp'
import ProductContent from '@/components/product/ProductContent'
import { fetchProduct } from '@/query/products'
import { Container } from '@mantine/core'
import React from 'react'

export default async function Page({params}) {
    const {slug} = params
    const product = await fetchProduct(slug)
    return (
        <div className='single-product-page'>
            <BreadCrumbComp links={[{label:'Home', href:'/'},{label:'Shop', href:'/shop'}, {label:product?.title, href:`/product/${product?.slug}`}]}  />
            <div className="product-content-wrapper">
                <Container size={'lg'}>
                <ProductContent product={product} />
                </Container>
            </div>
        </div>
    )
}
