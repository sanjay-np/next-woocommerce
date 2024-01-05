'use client'
import { Box, Button, Flex, Grid, Group, Rating, Select, Tabs, TextInput } from '@mantine/core'
import React from 'react'
import { FacebookIcon, HeartIcon, Instagram, MinusIcon, PlusIcon, ShoppingBagIcon, ShuffleIcon, TablePropertiesIcon, TwitterIcon } from 'lucide-react'
import Link from 'next/link'
import ProductGallery from './ProductGallery'
import { productPrice } from '@/utils/priceUtil'
export default function ProductContent(props) {
    const {product} = props
    return (
        <>
            <div className="product-top-section">
                <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
                    <Grid.Col span={5}>
                        <ProductGallery gallery = {product?.galleryImages.edges} featured ={product?.featuredImage.node}/>
                    </Grid.Col>
                    <Grid.Col span={7}>
                        <div className="product-details">
                            <h2 className="product-title">{product?.title}</h2>
                            <div className="review-wrapper">
                                <Group>
                                    <Rating defaultValue={product?.reviewCount} fractions={2} readOnly/>
                                    <a className="ratings-text" href="#">( {product?.reviewCount} Reviews )</a>
                                </Group>
                            </div>
                            <div className="product-price">
                                ${productPrice(product?.price)}
                            </div>
                            <div className="product-content">
                                <div dangerouslySetInnerHTML={{__html: product?.shortDescription}} />
                            </div>
                            <div className="product-details-action">
                                <div className="details-action-col">
                                    <div className="product-details-quantity">
                                        <Box maw={100} className='qty-wrapper'>
                                            <TextInput
                                                placeholder="Your email"
                                                leftSection={<PlusIcon color='#666' size={18} strokeWidth={1} onClick={() => { console.log('heh') }} />}
                                                rightSection={<MinusIcon color='#666' size={18} strokeWidth={1} />}
                                                value={'1'}
                                            />
                                        </Box>
                                    </div>
                                    <div className="details-action-wrapper">
                                        <Group justify='space-between'>
                                            <Button
                                                variant="outline"
                                                color="#c96"
                                                radius="xs"
                                                size="md"
                                                leftSection={<ShoppingBagIcon size={18} strokeWidth={1.5} />}
                                                className='btn-product btn-cart'
                                            >
                                                Add to cart
                                            </Button>
                                            <Button
                                                variant='transparent'
                                                color='#666'
                                                leftSection={<HeartIcon size={18} strokeWidth={1.5} />}
                                                className='btn-product btn-wishlist'
                                            >
                                                Add to Wishlist
                                            </Button>
                                            <Button
                                                variant='transparent'
                                                color='#666'
                                                leftSection={<ShuffleIcon size={18} strokeWidth={1.5} />}
                                                className='btn-product btn-compare'
                                            >
                                                Add to Compare
                                            </Button>
                                        </Group>
                                    </div>
                                </div>
                            </div>
                            <div className="product-details-footer">
                                <Flex justify={'space-between'} align={'center'}>
                                    <div className="product-cat">
                                        <span>Category:</span>
                                        <a href="#">Women</a>,
                                        <a href="#">Dresses</a>,
                                        <a href="#">Yellow</a>
                                    </div>

                                    <div className="social-icons">
                                        <Flex justify={'flex-start'} align={'center'}>
                                            <span className="social-label">Share:</span>
                                            <Link href="#" className="social-icon" title="Facebook" target="_blank">
                                                <FacebookIcon size={20} color='#777' strokeWidth={1.5} />
                                            </Link>
                                            <Link href="#" className="social-icon" title="Twitter" target="_blank">
                                                <TwitterIcon size={20} color='#777' strokeWidth={1.5} />
                                            </Link>
                                            <Link href="#" className="social-icon" title="Instagram" target="_blank">
                                                <Instagram size={20} color='#777' strokeWidth={1.5} />
                                            </Link>
                                        </Flex>
                                    </div>
                                </Flex>
                            </div>
                        </div>
                    </Grid.Col>
                </Grid>
            </div>
            <div className="product-bottom-section">
                <div className="product-details-tab">
                    <Tabs defaultValue="description">
                        <div className="tab-list">
                            <Tabs.List>
                                <Tabs.Tab value="description">Description</Tabs.Tab>
                                <Tabs.Tab value="information">Additional Information</Tabs.Tab>
                                <Tabs.Tab value="reviews">Reviews ({product?.reviewCount})</Tabs.Tab>
                            </Tabs.List>
                        </div>
                        <div className="tab-content">
                            <Tabs.Panel value="description">
                                <div className="panel-content">
                                    <div className="product-desc-content">
                                        <h3>Product Information</h3>
                                        <div dangerouslySetInnerHTML={{__html: product?.content}} />
                                    </div>
                                </div>
                            </Tabs.Panel>
                            <Tabs.Panel value="information">
                                <div className="panel-content">
                                    <div className="product-desc-content">
                                        <h3>Information</h3>
                                    </div>
                                </div>
                            </Tabs.Panel>
                            <Tabs.Panel value="reviews">
                                <div className="panel-content">
                                    <div className="product-desc-content">
                                        <h3>Reviews ({product?.reviewCount})</h3>
                                    </div>
                                </div>
                            </Tabs.Panel>
                        </div>
                    </Tabs>
                </div>
            </div>            
        </>
    )
}