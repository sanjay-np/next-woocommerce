import React from 'react'
import { Container, Flex, Grid, Input } from '@mantine/core';
import { HeartIcon, SearchIcon, ShuffleIcon } from 'lucide-react'
import { Link } from 'nextjs13-progress';
import Image from 'next/image'
import MiniCart from '@/components/cart/miniCart/MiniCart';

export default function TopHeader() {
	return (
		<div className='top-header-wrapper'>
			<Container size={'lg'}>
				<Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }} justify="space-between" align="center" >
					<Grid.Col span={2}>
						<div className='left-content'>
							<div className="logo-wrapper">
								<Link href={'/'}>
									<Image src='/assets/images/logo.png' width={104} height={25} alt='logo' />
								</Link>
							</div>
						</div>
					</Grid.Col>
					<Grid.Col span={7}>
						<div className="middle-content">
							<Input
								placeholder="Search Products..."
								size='md'
								rightSectionPointerEvents="all"
								rightSection={<SearchIcon size={20} strokeWidth={1.5} color='#777' />}
							/>
						</div>
					</Grid.Col>
					<Grid.Col span={3}>
						<div className="right-content">
							<Flex gap={{ base: 'xl', sm: 'xl' }} justify={{ sm: 'flex-end' }}>
								<div className="icon-wrapper">
									<ShuffleIcon size={26} strokeWidth={1.5} color='#333' />
									<p>Compare</p>
								</div>
								<div className="icon-wrapper">
									<HeartIcon size={26} strokeWidth={1.5} color='#333' />
									<p>Wishlist</p>
								</div>
								<div className="icon-wrapper">
									<MiniCart />
								</div>
							</Flex>
						</div>
					</Grid.Col>
				</Grid>
			</Container>
		</div>
	)
}
