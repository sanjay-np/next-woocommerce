import BreadCrumbComp from '@/components/breadcrumbs/BreadCrumbComp';
import ShopContainer from '@/components/page/shop/ShopContainer';
import { fetchProductCategories, fetchProducts } from '@/query/products';
import { Container } from '@mantine/core'
import React from 'react'

export default async function Page() {
	const products = await fetchProducts(16, 'where: {orderby: {field: DATE, order: DESC }}')
	const categories = await fetchProductCategories()
	return (
		<div className='shop-page'>
			<BreadCrumbComp links={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }]} />
			<div className="page-content">
				<Container size={'lg'}>
					<ShopContainer products={products} categories={categories} />
				</Container>
			</div>
		</div>
	)
}
