'use client'
import React, { useEffect, useState } from 'react'
import { Group, Stack, CloseIcon, Button, UnstyledButton, Drawer, Badge, Box, LoadingOverlay } from '@mantine/core';
import { ArrowRight, ShoppingBasketIcon } from 'lucide-react';
import Image from 'next/image';
import { useDisclosure } from '@mantine/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { updateCart } from '@/store/reducers/sessionSlice';
import { removeCartItem } from '@/query/cart';
import Empty from '@/components/empty/Empty';

export default function MiniCart() {
	const router = useRouter()
	const [loading, setLoading] = useState(false)
	const { cart } = useSelector((state) => state.sessionSlice)
	const [opened, handlers] = useDisclosure(false);
	const [cartCount, setCartCount] = useState(0)
	const [products, setProducts] = useState([])
	const dispatch = useDispatch()

	useEffect(() => {
		setCartCount(cart?.contents?.nodes.length)
		setProducts(cart?.contents?.nodes)
	}, [cart])

	const handleCartClick = () => {
		handlers.close()
		router.push('/cart')
	}

	const handleRemoveCart = async (cartKey) => {
		try {
			setLoading(true)
			const res = await removeCartItem(cartKey, localStorage.getItem('woo-session'))
			if (res?.removeItemsFromCart) {
				dispatch(updateCart(res?.removeItemsFromCart?.cart))
			}
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false)
		}
	}

	return (
		<>
			<UnstyledButton onClick={() => handlers.open()} className='mini-cart-icon-wrapper'>
				<Badge size="sm" color='red' circle className='cart-item-count'>{cartCount}</Badge>
				<div className="icon">
					<ShoppingBasketIcon size={26} strokeWidth={1.5} color='#333' />
					<p>Cart</p>
				</div>
			</UnstyledButton>
			<Drawer
				opened={opened}
				onClose={() => { handlers.close() }}
				position='right'
				size={'xs'}
				title="Your Cart">
				<div className="mini-cart-wrapper">

					<Box pos={'relative'}>
						<LoadingOverlay visible={loading} zIndex={1000} overlayProps={{ radius: "sm", blur: 1 }} loaderProps={{ color: '#C96', type: 'bars' }} />
						{cartCount === 0 && (
							<Empty />
						)}
						{products?.map((item) => {
							const price = item?.variation ? item?.variation?.node.price : item?.product?.node?.price
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
														{item?.variation && (
															<p>
																{item?.variation.attributes.map((attr, index) => (
																	<span key={index} className='product-attribute'>{attr?.label}: {attr?.value}</span>
																))}
															</p>
														)}
														<span className="product-info">
															<span className="productQty">{item?.quantity}</span>
															x <span dangerouslySetInnerHTML={{ __html: price }} />
															= <span dangerouslySetInnerHTML={{ __html: item?.total }} />
														</span>
													</div>
												</Stack>
												<UnstyledButton onClick={() => { handleRemoveCart(item?.key) }}><CloseIcon size={18} color='#777' /></UnstyledButton>
											</Group>
										</div>
									</div>
								</React.Fragment>
							)
						})}
					</Box>
					{cartCount !== 0 && (
						<>
							<div className="cart-total">
								<Group justify="space-between">
									<span>Total</span>
									<span className="cart-total-price"><span dangerouslySetInnerHTML={{ __html: cart?.total }} /></span>
								</Group>
							</div>
							<div className="cart-action">
								<Group justify='space-between' grow wrap='wrap'>
									<Button radius={0} className='cart-btn btn' onClick={handleCartClick}>View Cart</Button>
									<Button radius={0} variant="outline" className='checkout-btn btn' rightSection={<ArrowRight size={16} />}>Checkout</Button>
								</Group>
							</div>
						</>
					)}

				</div>
			</Drawer>
		</>
	)
}
