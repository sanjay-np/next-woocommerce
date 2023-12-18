import SingleProductContent from '@/components/products/SingleProductContent'
import { Breadcrumbs, Container } from '@mantine/core'
import { ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Page() {
    return (
        <div className='single-product-page'>
            <div className="breadcrumbs-wrapper">
                <Container size={'lg'}>
                    <Breadcrumbs separator={<ChevronRightIcon size={16} color='#666' />} mt="xs">
                        <Link href={'/'}>Home</Link>
                        <Link href={'/shop'}>Product</Link>
                        <Link href={'/shop'}>Single Product</Link>
                    </Breadcrumbs>
                </Container>
            </div>
            <div className="page-content">
                <Container size={'lg'}>
                    <SingleProductContent />
                </Container>
            </div>
        </div>
    )
}
