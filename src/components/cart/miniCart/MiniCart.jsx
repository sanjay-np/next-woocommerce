import React from 'react'
import { HoverCard, Group, Stack, CloseIcon, Button } from '@mantine/core';
import { ArrowRight, ShoppingBasketIcon } from 'lucide-react';
import Image from 'next/image';

export default function MiniCart() {
	const products = [
		{
			id: "1",
			title: "Beige knitted elastic runner shoes",
			price: '$84.00',
			qty: '1',
			image: "/assets/images/cart/product-1.jpg"
		},
		{
			id: "2",
			title: "Beige knitted elastic runner shoes-1",
			price: '$84.00',
			qty: '1',
			image: "/assets/images/cart/product-2.jpg"
		},
	]
	return (
		<HoverCard
			width={380}
			shadow="lg"
			withArrow
			arrowSize={20}
			offset={{ crossAxis: -130 }}
		>
			<HoverCard.Target>
				<div className="icon">
					<ShoppingBasketIcon size={26} strokeWidth={1.5} color='#333' />
					<p>Cart</p>
				</div>
			</HoverCard.Target>
			<HoverCard.Dropdown>
				<div className="mini-cart-wrapper">
					{
						products.map((product) => {
							return (
								<div className="mini-cart-item" key={product.id}>
									<div className="product">
										<Group gap="xs" grow preventGrowOverflow={false} wrap="nowrap">
											<figure className="image-wrapper">
												<a href="#" className="product-image">
													<Image src={product.image} width={0} height={0} sizes="100vw" alt="Cart Item" style={{ width: '100%', height: '100%' }} />
												</a>
											</figure>
											<Stack gap={5}>
												<div className="product-details">
													<h4 className="product-title">
														<a href="#">{product.title}</a>
													</h4>
													<span className="product-info">
														<span className="productQty">{product.qty}</span>
														x {product.price}
													</span>
												</div>
											</Stack>
											<CloseIcon size={18} color='#777' />
										</Group>
									</div>
								</div>
							)
						})
					}
					<div className="cart-total">
						<Group justify="space-between">
							<span>Total</span>
							<span className="cart-total-price">$160.00</span>
						</Group>
					</div>
					<div className="cart-action">
						<Group justify='space-between' grow wrap='wrap'>
							<Button radius={0} className='cart-btn btn'>View Cart</Button>
							<Button radius={0} variant="outline" className='checkout-btn btn' rightSection={<ArrowRight size={16} />}>Checkout</Button>
						</Group>
					</div>
				</div>
			</HoverCard.Dropdown>
		</HoverCard>
	)
}
