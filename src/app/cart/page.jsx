import CartTable from '@/components/cart/cartTable'
import { Breadcrumbs, Container, Grid } from '@mantine/core'
import { ChevronRightIcon } from 'lucide-react'
import { Link } from 'nextjs13-progress'
import React from 'react'

export default function Page() {

	return (
		<div className='cart-page'>
			<div className="breadcrumbs-wrapper">
				<Container size={'lg'}>
					<Breadcrumbs separator={<ChevronRightIcon size={16} color='#666' />} mt="xs">
						<Link href={'/'}>Home</Link>
						<Link href={'/shop'}>Shop</Link>
						<Link href={'/cart'}>Cart</Link>
					</Breadcrumbs>
				</Container>
			</div>
			<div className="page-content">
				<div className="cart">
					<Container size={'lg'}>
						<CartTable />
					</Container>
				</div>
			</div>
		</div>
	)
}
