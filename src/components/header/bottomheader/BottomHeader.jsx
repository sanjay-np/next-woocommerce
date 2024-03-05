import React, { useEffect, useState } from 'react'
import { Container, Flex, Grid, Group, Switch, UnstyledButton } from '@mantine/core';
import { User2Icon } from 'lucide-react'
import { Link } from 'nextjs13-progress';
import CategoryMenu from '../menus/CategoryMenu';
import { useDisclosure } from '@mantine/hooks';
import LoginModal from '@/components/modals/LoginModal';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '@/store/reducers/themeSelectorSlice';
import UserMenu from '../menus/UserMenu';

export default function BottomHeader(props) {
	const [catMenuState, catMenuHandlers] = useDisclosure();
	const [loginModalState, loginModalHandlers] = useDisclosure(false);
	const { catMenuItems } = props
	const theme = useSelector((state) => state.themeSelectorSlice.theme)
	const dispatch = useDispatch()
	const { customer } = useSelector((state) => state.sessionSlice)
	const [customerInfo, setCustomerInfo] = useState('')
	useEffect(() => {
		if (customer) {
			setCustomerInfo(customer)
		}
	}, [customer])
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
							<Flex gap={{ base: 'sm', sm: 'lg' }} justify={'flex-start'}>
								<Link href="/"><p>Home</p></Link>
								<Link href="/shop"><p>Shop</p></Link>
								<Link href="#"><p>Blogs</p></Link>
								<Link href="#"><p>Contact Us</p></Link>
							</Flex>
						</div>
					</Grid.Col>
					<Grid.Col span={3}>
						<div className="header-right">
							<Group justify='flex-end'>
								<Flex gap={{ base: 'sm', sm: 'sm' }} justify={'flex-end'} align={'center'}>
									<User2Icon size={18} />
									{customerInfo?.id !== 'guest' ? <UserMenu name={customerInfo?.displayName} /> : <UnstyledButton onClick={() => { loginModalHandlers.open() }}>Login/Register</UnstyledButton>}
								</Flex>
								<Switch
									checked={theme === 'light' ? false : true}
									onLabel="light"
									offLabel="dark"
									onChange={() => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))}
								/>
							</Group>
						</div>
					</Grid.Col>
				</Grid>
			</Container>
			<LoginModal state={loginModalState} method={loginModalHandlers} />
		</div>
	)
}
