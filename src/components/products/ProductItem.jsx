import React from 'react'
import { Rating } from '@mantine/core';
import { Heart, ScanSearch, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function ProductItem(props) {
	return (
		<div className="product">
			<figure className="product-media">
				<a href="#">
					<img src={`assets/images/products/product-${props?.id}.jpg`} alt="Product image" className="product-image" />
				</a>
				<div className="product-action-vertical">
					<a href="#" className="btn-product-icon btn-wishlist btn-expandable">
						<Heart color='#777' size={18} />
					</a>
				</div>
			</figure>
			<div className="product-body">
				<div className="product-cat">
					<a href="#">Men's</a>
					<a href="#">Sneakers</a>
				</div>
				<h3 className="product-title">
					<a href="#">ASICS Tiger Gel-Lyte MT</a>
				</h3>
				<div className="product-price">
					<span className="new-price">Now $77.99</span>
					<span className="old-price">$130.00</span>
				</div>
			</div>
			<div className="product-footer">
				<div className="ratings-container">
					<div className="ratings">
						<Rating defaultValue={2} />
					</div>
					<span className="ratings-text">( 0 Reviews )</span>
				</div>

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
