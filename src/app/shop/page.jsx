import ShopContent from '@/components/shop/ShopContent';
import { Breadcrumbs, Container } from '@mantine/core'
import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

export default function Page() {

    return (
        <div className='shop-page'>
            <div className="breadcrumbs-wrapper">
                <Container size={'lg'}>
                    <Breadcrumbs separator={<ChevronRightIcon size={16} color='#666' />} mt="xs">
                        <Link href={'/'}>Home</Link>
                        <Link href={'/shop'}>Shop</Link>
                        <Link href={'/shop'}>Electronics</Link>
                    </Breadcrumbs>
                </Container>
            </div>
            <div className="page-content">
                <Container size={'lg'}>
                    <ShopContent />
                </Container>
            </div>
        </div>
    )
}
