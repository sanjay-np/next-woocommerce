import { removeCartItem } from '@/query/cart';
import { updateCart } from '@/store/reducers/sessionSlice';
import { Box, Group, LoadingOverlay, NumberInput, Table, UnstyledButton } from '@mantine/core';
import { XIcon } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function CartItems() {
	const [loading, setLoading] = useState(false)
	const { cart } = useSelector((state) => state.sessionSlice)
	const [products, setProducts] = useState([])
	const dispatch = useDispatch()

	useEffect(() => {
		setProducts(cart?.contents?.nodes)
	}, [cart])

	const rows = products?.map((item) => (
		<Table.Tr key={item?.key}>
			<Table.Td className='product-col'>
				<Group className="cart-product" >
					<figure className="product-media">
						<a href="#">
							<Image src={item?.product?.node?.image?.sourceUrl} width={80} height={80} sizes="100vw" alt="Cart Item" />
						</a>
					</figure>
					<h3 className="product-title">
						<a href="#">{item?.product?.node?.name}</a>
					</h3>
				</Group>
			</Table.Td>
			<Table.Td className='price-col'><span dangerouslySetInnerHTML={{ __html: item?.product?.node?.price }} /></Table.Td>
			<Table.Td className='qty-col'>
				<NumberInput
					placeholder="Input placeholder"
					allowDecimal={false}
					allowNegative={false}
					value={item?.quantity}
					min={1}
					max={10}
					step={1}
					style={{width: '80px'}}
				/>
				
			</Table.Td>
			<Table.Td className='total-col'><span dangerouslySetInnerHTML={{ __html: item?.total }} /></Table.Td>
			<Table.Td className='remove-col'><UnstyledButton onClick={() => handleRemoveCart(item?.key)}><XIcon color='#333' size={20} strokeWidth={1.3} /></UnstyledButton></Table.Td>
		</Table.Tr>
	));

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
		</Box>
	)
}