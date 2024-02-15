'use client'
import React, { useEffect, useState } from 'react'
import { Group, Stack, CloseIcon, Button, UnstyledButton, Drawer, Badge } from '@mantine/core';
import { ArrowRight, ShoppingBasketIcon } from 'lucide-react';
import Image from 'next/image';
import { useDisclosure } from '@mantine/hooks';
import { useSelector } from 'react-redux';

export default function MiniCart() {
	const { cart } = useSelector((state) => state.sessionSlice)
	const [opened, { open, close }] = useDisclosure(false);
	const [cartCount, setCartCount] = useState(0)
	const [products, setProducts] = useState([])
	useEffect(() => {
		setCartCount(cart?.contents?.nodes.length)
		setProducts(cart?.contents?.nodes)
	}, [cart])
	return (
		<>
			<UnstyledButton onClick={open} className='mini-cart-icon-wrapper'>
				<Badge size="sm" color='red' circle className='cart-item-count'>{cartCount}</Badge>
				<div className="icon">
					<ShoppingBasketIcon size={26} strokeWidth={1.5} color='#333' />
					<p>Cart</p>
				</div>
			</UnstyledButton>
			<Drawer
				opened={opened}
				onClose={close}
				position='right'
				size={'xs'}
				title="Your Cart">
				<div className="mini-cart-wrapper">

					{products?.map((item) => {
						return (
							<React.Fragment key={item?.key}>
								<div className="mini-cart-item">
									<div className="product">
										<Group gap="xs" grow preventGrowOverflow={false} wrap="nowrap">
											<figure className="image-wrapper">
												<a href="#" className="product-image">
													<Image src={item?.product?.node?.image?.sourceUrl} width={80} height={80} sizes="100vw" alt="Cart Item" />
												</a>
											</figure>
											<Stack gap={5}>
												<div className="product-details">
													<h4 className="product-title"><a href="#">{item?.product?.node?.name}</a></h4>
													<span className="product-info">
														<span className="productQty">{item?.quantity}</span>
														x <span dangerouslySetInnerHTML={{ __html: item?.product?.node?.price }} />
														= <span dangerouslySetInnerHTML={{ __html: item?.total }} />
													</span>
												</div>
											</Stack>
											<CloseIcon size={18} color='#777' />
										</Group>
									</div>
								</div>
							</React.Fragment>
						)
					})}
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
			</Drawer>
		</>
	)
}
