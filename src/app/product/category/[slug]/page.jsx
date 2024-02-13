import BreadCrumbComp from '@/components/breadcrumbs/BreadCrumbComp'
import CategoryContainer from '@/components/product/CategoryContainer'
import { fetchProductCategory, fetchProducts } from '@/query/products'
import { Container } from '@mantine/core'
import React from 'react'

export default async function Page({ params }) {
	const { slug } = params
	const category = await fetchProductCategory(slug)
	const productsInfo = await fetchProducts(10, '', `category: "${slug}"`)

	if(!slug || category === null){
		return(
			<h1>
				No product found
			</h1>
		)
	}
	return (
		<div className='product-category-archive'>
			<BreadCrumbComp links={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: category?.name, href: `/product/category/${slug}` }]} />
			<div className="page-content">
				<Container size={'lg'}>
					<CategoryContainer productsInfo={productsInfo} />
				</Container>
			</div>
		</div>
	)
}
