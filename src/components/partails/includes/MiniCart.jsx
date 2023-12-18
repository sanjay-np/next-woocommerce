import React from 'react'
import { HoverCard, Group, Stack, CloseIcon, Button } from '@mantine/core';
import { ArrowRight, ShoppingBasketIcon } from 'lucide-react';

export default function MiniCart() {
    return (

        <Group justify="center">
            <HoverCard
                width={320}
                shadow="lg"
                withArrow
                arrowSize={20}
                offset={{ crossAxis: -130 }}
            >
                <HoverCard.Target>
                    <div className="icon">
                        <ShoppingBasketIcon size={26} strokeWidth={1.5} color='#333' />
                        <p>Cart</p>
                    </div>
                </HoverCard.Target>
                <HoverCard.Dropdown>
                    <div className="mini-cart-wrapper">
                        <div className="mini-cart-item">
                            <div className="product">
                                <Group gap="xs" grow preventGrowOverflow={false} wrap="nowrap">
                                    <figure className="product-image-container">
                                        <a href="#" className="product-image">
                                            <img src='/assets/images/cart/product-1.jpg' />
                                        </a>
                                    </figure>
                                    <Stack gap={5}>
                                        <div className="product-cart-details">
                                            <h4 className="product-title">
                                                <a href="#">Beige knitted elastic runner shoes</a>
                                            </h4>
                                            <span className="cart-product-info">
                                                <span className="cart-product-qty">1</span>
                                                x $84.00
                                            </span>
                                        </div>
                                    </Stack>
                                    <CloseIcon size={18} color='#777' />
                                </Group>
                            </div>
                        </div>
                        <div className="mini-cart-item">
                            <div className="product">
                                <Group gap="xs" grow preventGrowOverflow={false} wrap="nowrap">
                                    <figure className="product-image-container">
                                        <a href="#" className="product-image">
                                            <img src='/assets/images/cart/product-2.jpg' />
                                        </a>
                                    </figure>
                                    <Stack gap={5}>
                                        <div className="product-cart-details">
                                            <h4 className="product-title">
                                                <a href="#">Beige knitted elastic runner shoes</a>
                                            </h4>
                                            <span className="cart-product-info">
                                                <span className="cart-product-qty">1</span>
                                                x $84.00
                                            </span>
                                        </div>
                                    </Stack>
                                    <CloseIcon size={18} color='#777' />
                                </Group>
                            </div>
                        </div>
                        <div className="cart-total">
                            <Group justify="space-between">
                                <span>Total</span>
                                <span className="cart-total-price">$160.00</span>
                            </Group>
                        </div>
                        <div className="cart-action">
                            <Group justify='space-between' grow wrap='wrap'>
                                <Button radius={0}>View Cart</Button>
                                <Button radius={0} variant="outline" rightSection={<ArrowRight size={16} />}>Checkout</Button>
                            </Group>
                        </div>
                    </div>
                </HoverCard.Dropdown>
            </HoverCard>
        </Group>
    )
}
