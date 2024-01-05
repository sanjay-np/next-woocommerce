// import ShopContent from '@/components/shop/ShopContent';
import BreadCrumbComp from '@/components/breadcrumbs/BreadCrumbComp';
import { Container } from '@mantine/core'
import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

export default function Page() {

    return (
        <div className='shop-page'>
            <BreadCrumbComp links={[{label:'Home', href:'/'},{label:'Shop', href:'/shop'}]}  />
            <div className="page-content">
                <Container size={'lg'}>
                    {/* <ShopContent /> */}
                </Container>
            </div>
        </div>
    )
}
