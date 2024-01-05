import React from 'react'
import { Rating } from '@mantine/core';
import { Heart, ScanSearch, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { productPrice } from '@/utils/priceUtil';

export default function ProductCard(props) {
    const {item} = props
	return (
		<div className="product-card">
			<figure className="product-media">
                <Link href={`/product/${item?.slug}`}>
					<img src={item?.featuredImage.node.mediaItemUrl} alt="Product image" className="product-image" />
				</Link>
				<div className="product-action-vertical">
					<a href="#" className="btn-product-icon btn-wishlist btn-expandable">
						<Heart color='#777' size={18} />
					</a>
				</div>
			</figure>
            <div className="product-body">
				<h3 className="product-title">
					<Link href={{ pathname: `/product/${item?.slug}`}}>
                    {item?.title}
                    </Link>
				</h3>
				<div className="product-price">
					<span className="new-price">${productPrice(item?.price)}</span>
					{
						item?.type==='SIMPLE' &&(
							<>
								{item?.price < item.regularPrice && (
									<span className="old-price">${productPrice(item?.regularPrice)}</span>
								)}
							</>
							
						)
					}
					
				</div>
                <div className="ratings-container">
					<div className="ratings">
						<Rating fractions={2} defaultValue={item.reviewCount} readOnly/>
					</div>
					<span className="ratings-text">( {item.reviewCount} Reviews )</span>
				</div>
			</div>
			<div className="product-footer">				
				<div className="product-action">
					<a href="#" className="btn-product btn-cart">
						<ShoppingCart color='#cccccc' size={18} />
						<span>add to cart</span>
					</a>
					<Link href={'/product/single-product'} className="btn-product btn-quickview">
						<ScanSearch color='#cccccc' size={18} />
						<span>more info</span>
					</Link>					
				</div>
            </div>
		</div>
	)
}
