import BreadCrumbComp from '@/components/breadcrumbs/BreadCrumbComp';
import ShopContainer from '@/components/page/shop/ShopContainer';
import { fetchProductCategories, fetchProductColors, fetchProductSizes, fetchProducts } from '@/query/products';
import { Container } from '@mantine/core'
import React from 'react'

export default async function Page() {
	const categories = await fetchProductCategories(100)
	const colors = await fetchProductColors()
	const sizes = await fetchProductSizes()
	return (

		<div className='shop-page'>
			<BreadCrumbComp links={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }]} />
			<div className="page-content">
				<Container size={'lg'}>
					<ShopContainer
						categories={categories?.nodes}
						colors={colors}
						sizes={sizes}
					/>
				</Container>
			</div>
		</div>
	)
}
