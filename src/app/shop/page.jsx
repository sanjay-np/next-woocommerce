import BreadCrumbComp from '@/components/breadcrumbs/BreadCrumbComp';
import ShopContainer from '@/components/page/shop/ShopContainer';
import { fetchProductCategories, fetchProducts } from '@/query/products';
import { Container } from '@mantine/core'
import React from 'react'

export default async function Page() {
	const productsInfo = await fetchProducts(10, '', 'orderby: {field: DATE, order: DESC }')
	const categories = await fetchProductCategories(100)
	return (
		<div className='shop-page'>
			<BreadCrumbComp links={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }]} />
			<div className="page-content">
				<Container size={'lg'}>
					<ShopContainer productsInfo={productsInfo} categories={categories?.edges} />
				</Container>
			</div>
		</div>
	)
}
