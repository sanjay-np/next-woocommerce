import React from 'react'
import { Container, Flex, Grid, UnstyledButton } from '@mantine/core';
import { User2Icon } from 'lucide-react'
import { Link } from 'nextjs13-progress';
import CategoryMenu from '../menus/CategoryMenu';
import { useDisclosure } from '@mantine/hooks';
import LoginModal from '@/components/modals/LoginModal';

export default function BottomHeader(props) {
	const [catMenuState, catMenuHandlers] = useDisclosure();
	const [loginModalState, loginModalHandlers] = useDisclosure(false);
	const { catMenuItems } = props
	return (
		<div className="bottom-header-wrapper">
			<Container size={'lg'}>
				<Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }} justify="space-between" align="center" >
					<Grid.Col span={3}>
						<div className="header-left">
							<CategoryMenu state={catMenuState} method={catMenuHandlers} items={catMenuItems} />
						</div>
					</Grid.Col>
					<Grid.Col span={6}>
						<div className="header-center">
							<Flex gap={{ base: 'sm', sm: 'lg' }} justify={'space-between'}>
								<Link href="/"><p>Home</p></Link>
								<Link href="/shop"><p>Shop</p></Link>
								<Link href="#"><p>Products</p></Link>
								<Link href="#"><p>Best Deals</p></Link>
								<Link href="#"><p>Blogs</p></Link>
								<Link href="#"><p>Contact Us</p></Link>
							</Flex>
						</div>
					</Grid.Col>
					<Grid.Col span={3}>
						<div className="header-right">
							<Flex gap={{ base: 'sm', sm: 'sm' }} justify={'flex-end'} align={'center'}>
								<User2Icon size={18} />
								<UnstyledButton onClick={() => { loginModalHandlers.open() }}>Login/Register</UnstyledButton>
							</Flex>
						</div>
					</Grid.Col>
				</Grid>
			</Container>
			<LoginModal state={loginModalState} method={loginModalHandlers} />
		</div>
	)
}
