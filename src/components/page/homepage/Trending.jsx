'use client'
import React from 'react'
import { Container, Flex, SimpleGrid, Tabs, rem } from '@mantine/core';
import ProductCard from '@/components/product/ProductCard';

export default function Trending(props) {
    const {products} = props
    return (
        <div className='trending-wrapper'>
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
                                    {products?.map((item, index) => (
                                        <ProductCard  item = {item?.node} key={item?.node.id}/>
                                    ))}
                                </SimpleGrid>
                            </div>
                        </Tabs.Panel>
                        <Tabs.Panel value="bestSelling">
                            <div className="products">
                                <SimpleGrid cols={4}>
                                    {products?.map((item, index) => (
                                        <ProductCard  item = {item?.node} key={item?.node.id}/>
                                    ))}
                                </SimpleGrid>
                            </div>
                        </Tabs.Panel>
                        <Tabs.Panel value="onSale">
                            <div className="products">
                                <SimpleGrid cols={4}>
                                    {products?.map((item, index) => (
                                        <ProductCard  item = {item?.node} key={item?.node.id}/>
                                    ))}
                                </SimpleGrid>
                            </div>
                        </Tabs.Panel>
                    </div>
                </Tabs>
            </Container>
        </div>
    )
}
