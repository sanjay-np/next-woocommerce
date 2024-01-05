import BreadCrumbComp from '@/components/breadcrumbs/BreadCrumbComp'
import React from 'react'

export default function Page({params}) {
    const {slug} = params

    return (
        <div className='product-category-archive'>
            <BreadCrumbComp links={[{label:'Home', href:'/'},{label:'Shop', href:'/shop'}]} />
        </div>
    )
}
