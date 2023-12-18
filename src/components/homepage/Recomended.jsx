import { Container, SimpleGrid } from '@mantine/core'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import ProductItem from '../products/ProductItem'

export default function Recomended() {
    return (
        <div className='recomended-products'>
            <Container size={'lg'}>
                <div className="title-wrapper">
                    <div className="title-left">
                        <h2>Recommendation For You</h2>
                    </div>
                    <div className="title-right">
                        <a href="#" className="title-link">
                            <span>View All Recommendadion </span><ArrowRight color='#333' size={18} />
                        </a>
                    </div>
                </div>
                <div className="products">
                    <SimpleGrid cols={4}>
                        <ProductItem id={'10'} />
                        <ProductItem id={'11'} />
                        <ProductItem id={'12'} />
                        <ProductItem id={'13'} />
                        <ProductItem id={'14'} />
                        <ProductItem id={'1'} />
                        <ProductItem id={'2'} />
                        <ProductItem id={'3'} />                        
                    </SimpleGrid>
                </div>
            </Container>
        </div>
    )
}
