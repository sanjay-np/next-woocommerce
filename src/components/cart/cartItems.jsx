import { Group, Table } from '@mantine/core';
import { XIcon } from 'lucide-react';
import React from 'react'

export default function CartItems() {
	const elements = [
		{
			id: 1,
			title: 'Beige knitted elastic runner shoes',
			price: '$84.00',
			qty: '1',
			total: '$84.00',
			image_url: '/assets/images/cart/product-1.jpg'
		},
		{
			id: 2,
			title: 'Blue utility pinafore denim dress',
			price: '$76.00',
			qty: '1',
			total: '$76.00',
			image_url: '/assets/images/cart/product-2.jpg'
		},

	];
	const rows = elements.map((element) => (
		<Table.Tr key={element.id}>
			<Table.Td className='product-col'>
				<Group className="cart-product" >
					<figure className="product-media">
						<a href="#">
							<img src={element.image_url} alt="Product image" />
						</a>
					</figure>
					<h3 className="product-title">
						<a href="#">{element.title}</a>
					</h3>
				</Group>
			</Table.Td>
			<Table.Td className='price-col'>{element.price}</Table.Td>
			<Table.Td>{element.qty}</Table.Td>
			<Table.Td className='total-col'>{element.total}</Table.Td>
			<Table.Td className='remove-col'><XIcon color='#333' size={20} strokeWidth={1.3} /></Table.Td>
		</Table.Tr>
	));
	return (
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
	)
}
