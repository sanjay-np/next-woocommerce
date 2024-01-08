import { Breadcrumbs,Container } from '@mantine/core'
import { ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function BreadCrumbComp(props) {
  const {links} = props 
  return (
    <div className="breadcrumb-wrapper">
        <Container size={'lg'}>
            <Breadcrumbs separator={<ChevronRightIcon size={16} color='#908e9b' />} mt="xs">
                {
                  links.map((item, index) => (
                    <Link href={item.href} key={index}>{item.label}</Link>
                  ))
                }
            </Breadcrumbs>
        </Container>
    </div>
  )
}
