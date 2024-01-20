import { Container, SimpleGrid } from '@mantine/core'
import Image from 'next/image'
import { Link } from 'nextjs13-progress'
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
											<Image width={0} height={0} sizes="100vw" src={item?.image.mediaItemUrl} alt='Category Image' style={{ width: '100%', height: '100%' }} />
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
