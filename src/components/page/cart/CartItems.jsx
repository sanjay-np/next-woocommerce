import { applyCoupon, removeCartItem, updateCartItemsQty } from '@/query/cart';
import { updateCart } from '@/store/reducers/sessionSlice';
import { ActionIcon, Box, Button, Flex, Group, LoadingOverlay, NumberInput, Table, TextInput, UnstyledButton } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { ArrowRightIcon, RefreshCwIcon, XIcon } from 'lucide-react';
import Image from 'next/image';
import { Link } from 'nextjs13-progress';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


export default function CartItems() {
	const { cart } = useSelector((state) => state.sessionSlice)
	const dispatch = useDispatch()
	const [loading, setLoading] = useState(false)
	const [products, setProducts] = useState([])
	const [cartItemCount, setCartItemCount] = useState({})
	const [coupon, setCoupon] = useState('')

	useEffect(() => {
		setProducts(cart?.contents?.nodes)
		if (cart?.contents?.nodes.length !== 0) {
			cart?.contents?.nodes?.map((item) => {
				setCartItemCount((prev) => {
					return {
						...prev,
						[item?.key]: item?.quantity
					}
				})
			})
		}
	}, [cart])

	const rows = products?.map((item) => {
		const price = item?.variation ? item?.variation?.node.price : item?.product?.node?.price
		return (
			<Table.Tr key={item?.key}>
				<Table.Td className='product-col'>
					<Group className="cart-product" >
						<figure className="product-media">
							<Link href="#"><Image src={item?.product?.node?.image?.sourceUrl} width={80} height={80} sizes="100vw" alt="Cart Item" /></Link>
						</figure>
						<div className='product-title-wrapper'>
							<h3 className="product-title">
								<Link href="#">{item?.product?.node?.name}</Link>
							</h3>
							{item?.variation && (
								<p>
									{item?.variation.attributes.map((attr, index) => (
										<span key={index} className='product-attribute'>{attr?.label}: {attr?.value}</span>
									))}
								</p>
							)}
						</div>
					</Group>
				</Table.Td>
				<Table.Td className='price-col'><span dangerouslySetInnerHTML={{ __html: price }} /></Table.Td>
				<Table.Td className='qty-col'>
					<NumberInput
						allowDecimal={false}
						allowNegative={false}
						value={cartItemCount[item?.key]}
						min={1}
						max={10}
						step={1}
						style={{ width: '80px' }}
						onChange={(value) => setCartItemCount((prev) => ({ ...prev, [item?.key]: value }))}
					/>
				</Table.Td>
				<Table.Td className='total-col'><span dangerouslySetInnerHTML={{ __html: item?.total }} /></Table.Td>
				<Table.Td className='remove-col'><UnstyledButton onClick={() => handleRemoveCart(item?.key)}><XIcon color='#333' size={20} strokeWidth={1.3} /></UnstyledButton></Table.Td>
			</Table.Tr>
		)
	});
	const handleUpdateCartItems = async () => {
		try {
			setLoading(true)
			const qtyOutput = [];
			for (const key in cartItemCount) {
				if (cartItemCount.hasOwnProperty(key)) {
					qtyOutput.push(`{key: "${key}",quantity: ${cartItemCount[key]}}`);
				}
			}
			const res = await updateCartItemsQty(qtyOutput, localStorage.getItem('woo-session'))
			if (res?.updateItemQuantities) {
				dispatch(updateCart(res?.updateItemQuantities?.cart))
			}
		} catch (err) { console.error(err); }
		finally { setLoading(false) }
	}
	const handleRemoveCart = async (cartKey) => {
		try {
			setLoading(true)
			const res = await removeCartItem(cartKey, localStorage.getItem('woo-session'))
			if (res?.removeItemsFromCart) {
				dispatch(updateCart(res?.removeItemsFromCart?.cart))
			}
		} catch (err) { console.error(err); }
		finally { setLoading(false) }
	}
	const handleCouponFunc = async () => {
		if (coupon !== '') {
			try {
				setLoading(true)
				const res = await applyCoupon(coupon, localStorage.getItem('woo-session'))
				console.log(res);
				if (res?.errors) {
					notifications.show({
						title: 'Error',
						message: res?.errors[0]?.message,
						withCloseButton: true,
						color: 'red',
						icon: <XIcon />,
						autoClose: 3000,
					})
				} else {
					if (res?.data?.applyCoupon !== null) {
						dispatch(updateCart(res?.applyCoupon?.cart))
					}
				}

			} catch (err) { console.error(err); }
			finally { setLoading(false) }
		}
	}
	return (
		<Box pos="relative">
			<LoadingOverlay visible={loading} zIndex={1000} overlayProps={{ radius: "sm", blur: 1 }} loaderProps={{ color: '#C96', type: 'bars' }} />
			<Table className='cart-table'>
				<Table.Thead>
					<Table.Tr>
						<Table.Th>Product</Table.Th>
						<Table.Th>Price</Table.Th>
						<Table.Th>Quantity</Table.Th>
						<Table.Th>Total</Table.Th>
						<Table.Th></Table.Th>
					</Table.Tr>
				</Table.Thead>
				<Table.Tbody>{rows}</Table.Tbody>
			</Table>
			<div>
				<Flex justify={'space-between'}>
					<Group gap={4}>
						<TextInput
							placeholder="Coupon Code"
							value={coupon}
							onChange={(e) => setCoupon(e.target.value)}
						/>
						<ActionIcon variant="default" size="38" onClick={handleCouponFunc}>
							<ArrowRightIcon />
						</ActionIcon>
					</Group>
					<Button
						rightSection={<RefreshCwIcon size={14} />}
						variant="default"
						onClick={() => handleUpdateCartItems()}
					>
						Update cart
					</Button>
				</Flex>
			</div>
		</Box>
	)
}