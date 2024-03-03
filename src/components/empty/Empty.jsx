import { Group } from '@mantine/core'
import { InboxIcon } from 'lucide-react'
import React from 'react'

export default function Empty(props) {
    return (
        <div className='empty-wrapper'>
            <InboxIcon size={props?.size ? props?.size : 48} color='#908e9b' strokeWidth={1} />
            <p className='text'>No data</p>
        </div>
    )
}
