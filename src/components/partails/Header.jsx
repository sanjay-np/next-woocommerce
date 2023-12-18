'use client'
import { useDisclosure } from '@mantine/hooks';
import { HeartIcon, SearchIcon, ShoppingBasketIcon, ShuffleIcon, User2Icon } from 'lucide-react'
import Image from 'next/image'
import { Container, Flex, Grid, Input, UnstyledButton } from '@mantine/core';
import Link from 'next/link';
import LoginModal from './includes/LoginModal';
import CategoryMenu from './includes/CategoryMenu';
import MiniCart from './includes/MiniCart';


export default function Header() {
    const [catMenuState, catMenuHandlers] = useDisclosure();
    const [loginModalState, loginModalHandlers] = useDisclosure(false);

    return (
        <header className='header'>
            <div className="header-top">
                <Container size={'lg'}>
                    <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }} justify="space-between" align="center" >
                        <Grid.Col span={3}>
                            <div className="header-left">
                                <div className="logo-wrapper">
                                    <Link href={'/'}>
                                        <Image src='/assets/images/logo.png' width={104} height={25} alt='logo' />
                                    </Link>
                                </div>
                            </div>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <div className="header-center">
                                <Input
                                    placeholder="Search Products..."
                                    size='md'
                                    rightSectionPointerEvents="all"
                                    rightSection={<SearchIcon size={20} strokeWidth={1.5} color='#777' />}
                                />
                            </div>
                        </Grid.Col>
                        <Grid.Col span={3}>
                            <div className="header-right">
                                <Flex gap={{ base: 'sm', sm: 'lg' }} justify={{ sm: 'flex-end' }}>
                                    <div className="account">
                                        <div className="icon">
                                            <ShuffleIcon size={26} strokeWidth={1.5} color='#333' />
                                            <p>Compare</p>
                                        </div>
                                    </div>
                                    <div className="wishlist">
                                        <div className="icon">
                                            <HeartIcon size={26} strokeWidth={1.5} color='#333' />
                                            <p>Wishlist</p>
                                        </div>
                                    </div>
                                    <div className="mini-cart">
                                        <MiniCart />
                                    </div>
                                </Flex>
                            </div>
                        </Grid.Col>
                    </Grid>
                </Container>
            </div>
            <div className="header-bottom">
                <Container size={'lg'}>
                    <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }} justify="space-between" align="center" >
                        <Grid.Col span={3}>
                            <div className="header-left">
                                <CategoryMenu state={catMenuState} method={catMenuHandlers} />
                            </div>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <div className="header-center">
                                <Flex gap={{ base: 'sm', sm: 'lg' }} justify={'space-between'}>
                                    <Link href="#"><p>Home</p></Link>
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
            </div>
            <LoginModal state={loginModalState} method={loginModalHandlers} />
        </header >
    )
}
