'use client'
import { Box, Button, Flex, Grid, Group, Rating, Select, Tabs, TextInput } from '@mantine/core'
import React from 'react'
import ProductImageCarousel from './ProductImageCarousel'
import { FacebookIcon, HeartIcon, Instagram, MinusIcon, PlusIcon, ShoppingBagIcon, ShuffleIcon, TablePropertiesIcon, TwitterIcon } from 'lucide-react'
import Link from 'next/link'

export default function SingleProductContent() {
    return (
        <>
            <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
                <Grid.Col span={5}>
                    <ProductImageCarousel />
                </Grid.Col>
                <Grid.Col span={7}>
                    <div className="product-details">
                        <h2 className="product-title">Dark yellow lace cut out swing dress</h2>
                        <div className="review-wrapper">
                            <Group>
                                <Rating defaultValue={4.5} fractions={4} />
                                <a className="ratings-text" href="#">( 2 Reviews )</a>
                            </Group>
                        </div>
                        <div className="product-price">
                            $84.00
                        </div>
                        <div className="product-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae repellendus beatae rem veritatis magnam voluptatem nesciunt praesentium odio delectus eius accusantium ex natus libero, laboriosam officiis dolorem esse quod nihil.
                            </p>
                        </div>
                        <div className="product-filter-wrapper">
                            <div className="details-filter-row color-row">
                                <label>Color:</label>
                                <div className="product-nav product-nav-thumbs">
                                    <Group>
                                        <a href="#" className="active">
                                            <img src="/assets/images/single/1-small.jpg" alt="product desc" />
                                        </a>
                                        <a href="#">
                                            <img src="/assets/images/single/1-small.jpg" alt="product desc" />
                                        </a>
                                    </Group>
                                </div>
                            </div>
                            <div className="details-filter-row details-row-size">
                                <label>Size:</label>
                                <Group>
                                    <div className="product-nav select-custom">
                                        <Box maw={200}>
                                            <Select
                                                label=""
                                                placeholder="Select a size"
                                                data={['Small', 'Medium', 'Large', 'Extra Large']}
                                                clearable
                                            />
                                        </Box>
                                    </div>
                                    <a href="#" className="size-guide"><TablePropertiesIcon size={18} strokeWidth={1.5} /><span>size guide</span></a>
                                </Group>
                            </div>
                        </div>
                        <div className="product-details-action">
                            <div className="details-action-col">
                                <div className="product-details-quantity">
                                    <label>Qty</label>
                                    <Box maw={200} className='qty-wrapper'>
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
            <div className="product-details-tab">
                <Tabs defaultValue="description">
                    <div className="tab-list">
                        <Tabs.List>
                            <Tabs.Tab value="description">Description</Tabs.Tab>
                            <Tabs.Tab value="information">Additional Information</Tabs.Tab>
                            <Tabs.Tab value="reviews">Reviews (2)</Tabs.Tab>
                        </Tabs.List>
                    </div>
                    <div className="tab-content">
                        <Tabs.Panel value="description">
                            <div className="panel-content">
                                <div className="product-desc-content">
                                    <h3>Product Information</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. </p>
                                    <ul>
                                        <li>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit. </li>
                                        <li>Vivamus finibus vel mauris ut vehicula.</li>
                                        <li>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</li>
                                    </ul>

                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. </p>
                                </div>
                            </div>
                        </Tabs.Panel>
                        <Tabs.Panel value="information">
                            <div className="panel-content">
                                <div className="product-desc-content">
                                    <h3>Information</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. </p>

                                    <h3>Fabric &amp; care</h3>
                                    <ul>
                                        <li>Faux suede fabric</li>
                                        <li>Gold tone metal hoop handles.</li>
                                        <li>RI branding</li>
                                        <li>Snake print trim interior </li>
                                        <li>Adjustable cross body strap</li>
                                        <li> Height: 31cm; Width: 32cm; Depth: 12cm; Handle Drop: 61cm</li>
                                    </ul>

                                    <h3>Size</h3>
                                    <p>one size</p>
                                </div>
                            </div>
                        </Tabs.Panel>
                        <Tabs.Panel value="reviews">
                            <div className="panel-content">
                                <div className="product-desc-content">
                                    <h3>Reviews (2)</h3>
                                </div>
                            </div>
                        </Tabs.Panel>
                    </div>
                </Tabs>
            </div>
        </>
    )
}
