import BreadCrumbComp from '@/components/breadcrumbs/BreadCrumbComp'
import CategoryContainer from '@/components/product/CategoryContainer'
import { fetchProductsByCategory } from '@/query/products'
import { Container } from '@mantine/core'
import React from 'react'

export default async function Page({ params }) {
	const { slug } = params
	const response = await fetchProductsByCategory(slug)
	return (
		<div className='product-category-archive'>
			<BreadCrumbComp links={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: response?.productCategory.name, href: `/product/category/${slug}` }]} />
			<div className="page-content">
				<Container size={'lg'}>
					<CategoryContainer products={response?.products.edges} />
				</Container>
			</div>
		</div>
	)
}
