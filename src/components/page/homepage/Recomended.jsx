import ProductCard from '@/components/product/ProductCard'
import { Container, SimpleGrid } from '@mantine/core'
import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function Recomended(props) {
	const { products } = props
	return (
		<div className='recommended-wrapper'>
			<Container size={'lg'}>
				<div className="title-wrapper">
					<div className="title-left">
						<h2>Recommendation For You</h2>
					</div>
					<div className="title-right">
						<a href="#" className="title-link">
							<span>View All Recommendadion </span><ArrowRight color='#333' size={18} />
						</a>
					</div>
				</div>
				<div className="products">
					<SimpleGrid cols={4}>
						{products?.map((item, index) => (
							<ProductCard item={item?.node} key={item?.node.id} />
						))}
					</SimpleGrid>
				</div>
			</Container>
		</div>
	)
}
