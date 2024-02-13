import React from 'react'
import { Button, Rating } from '@mantine/core';
import { Heart, ScanSearch, ShoppingCart } from 'lucide-react';
import { Link } from 'nextjs13-progress';
import { productPrice } from '@/utils/priceUtil';
import Image from 'next/image';

export default function ProductCard(props) {
	const { item } = props
	return (
		<div className="product-card">
			<figure className="product-media">
				<Link href={`/product/${item?.slug}`}>
					<Image
						src={item?.image.mediaItemUrl} alt="Product image" className="product-image" width={0} height={0} sizes="100vw" />
				</Link>
				<div className="product-action-vertical">
					<a href="#" className="btn-product-icon btn-wishlist btn-expandable">
						<Heart color='#777' size={18} />
					</a>
				</div>
			</figure>
			<div className="product-body">
				<h3 className="product-title">
					<Link href={{ pathname: `/product/${item?.slug}` }}>
						{item?.name}
					</Link>
				</h3>
				<div className="product-price">
					<span className="new-price">${productPrice(item?.price)}</span>
					{
						item?.type === 'SIMPLE' && (
							<>
								{item?.price < item?.regularPrice && (
									<span className="old-price">${productPrice(item?.regularPrice)}</span>
								)}
							</>

						)
					}

				</div>
				<div className="ratings-container">
					<div className="ratings">
						<Rating fractions={2} defaultValue={item?.reviewCount} readOnly />
					</div>
					<span className="ratings-text">( {item?.reviewCount} Reviews )</span>
				</div>
			</div>
			<div className="product-footer">
				<div className="product-action">
					{
						item?.type === 'SIMPLE' && (
							<Button
								className='btn-product'
								variant="transparent"
								fullWidth
							>Add to Cart</Button>
						)
					}
					{
						item?.type === 'VARIABLE' && (
							<Link href={`/product/${item?.slug}`} className='btn-product show-more'>
								Show More Details
							</Link>
						)
					}
				</div>
			</div>
		</div>
	)
}
