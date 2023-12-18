'use client'
import React from 'react'
import { Container, Flex, SimpleGrid, Tabs, rem } from '@mantine/core';
import ProductItem from '../products/ProductItem';


export default function Trending() {
    return (
        <div className='trending-products'>
            <Container size={'lg'}>
                <Tabs defaultValue="topRated">
                    <Flex justify={'space-between'}>
                        <div className="title-left">
                            <h2>Trending Products</h2>
                        </div>
                        <div className="title-right">
                            <Tabs.List>
                                <Tabs.Tab value="topRated">Top Rated</Tabs.Tab>
                                <Tabs.Tab value="bestSelling">Best Selling</Tabs.Tab>
                                <Tabs.Tab value="onSale">On Sale</Tabs.Tab>
                            </Tabs.List>
                        </div>
                    </Flex>
                    <div className="tab-content-wrapper">
                        <Tabs.Panel value="topRated">
                            <div className="products">
                                <SimpleGrid cols={4}>
                                    <ProductItem id={'1'} />
                                    <ProductItem id={'2'} />
                                    <ProductItem id={'3'} />
                                    <ProductItem id={'4'} />
                                </SimpleGrid>
                            </div>
                        </Tabs.Panel>
                        <Tabs.Panel value="bestSelling">
                            <div className="products">
                                <SimpleGrid cols={4}>
                                    <ProductItem id={'5'} />
                                    <ProductItem id={'6'} />
                                    <ProductItem id={'7'} />
                                    <ProductItem id={'8'} />
                                </SimpleGrid>
                            </div>
                        </Tabs.Panel>
                        <Tabs.Panel value="onSale">
                            <div className="products">
                                <SimpleGrid cols={4}>
                                    <ProductItem id={'9'} />
                                    <ProductItem id={'10'} />
                                    <ProductItem id={'11'} />
                                    <ProductItem id={'12'} />
                                </SimpleGrid>
                            </div>
                        </Tabs.Panel>
                    </div>
                </Tabs>
            </Container>
        </div>
    )
}
