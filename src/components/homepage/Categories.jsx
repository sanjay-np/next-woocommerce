import { Container, SimpleGrid } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

export default function Categories() {
    return (
        <div className='home-categories'>
            <Container size={'lg'}>
                <div className="container">
                    <div className="title-wrapper">
                        <h2>Explore Popular Categories</h2>
                    </div>
                    <SimpleGrid cols={6}>
                        <div className='category-item'>
                            <Link href="#">
                                <figure>
                                    <span>
                                        <img src="/assets/images/cats/1.png" />
                                    </span>
                                </figure>
                                <h3>Computer &amp; Laptop</h3>
                            </Link>
                        </div>
                        <div className='category-item'>
                            <Link href={'#'}>
                                <figure>
                                    <span>
                                        <img src="/assets/images/cats/2.png" />
                                    </span>
                                </figure>
                                <h3>Cameras</h3>
                            </Link>
                        </div>
                        <div className='category-item'>
                            <Link href="#">
                                <figure>
                                    <span>
                                        <img src="/assets/images/cats/3.png" />
                                    </span>
                                </figure>
                                <h3>Smart Phones</h3>
                            </Link>
                        </div>
                        <div className='category-item'>
                            <Link href="#">
                                <figure>
                                    <span>
                                        <img src="/assets/images/cats/4.png" />
                                    </span>
                                </figure>
                                <h3>Televisions</h3>
                            </Link>
                        </div>
                        <div className='category-item'>
                            <Link href="#">
                                <figure>
                                    <span>
                                        <img src="/assets/images/cats/5.png" />
                                    </span>
                                </figure>
                                <h3>Audio</h3>
                            </Link>
                        </div>
                        <div className='category-item'>
                            <Link href="#">
                                <figure>
                                    <span>
                                        <img src="/assets/images/cats/6.png" />
                                    </span>
                                </figure>
                                <h3>Smart Watches</h3>
                            </Link>
                        </div>
                    </SimpleGrid>
                </div>
            </Container>
        </div>
    )
}
