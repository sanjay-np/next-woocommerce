import { Container, SimpleGrid } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

export default function Categories(props) {
	const { items } = props
	return (
		<div className='categories-wrapper'>
			<Container size={'lg'}>
				<div className="container">
					<div className="title-wrapper">
						<h2>Explore Popular Categories</h2>
					</div>
					<SimpleGrid cols={6}>
						{items?.map((item, index) => (
							<div className='category-item' key={item.id}>
								<Link href={`/product/category/${item?.slug}`}>
									<figure>
										<span>
											<img src={item?.image.mediaItemUrl} />
										</span>
									</figure>
									<h3>{item.name}</h3>
								</Link>
							</div>
						))}
					</SimpleGrid>
				</div>
			</Container>
		</div>
	)
}
