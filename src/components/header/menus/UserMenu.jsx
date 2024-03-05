import React from 'react'
import { Menu, UnstyledButton } from '@mantine/core'

export default function UserMenu(props) {
    return (
        <Menu trigger="hover" openDelay={100} closeDelay={400} withArrow closeOnClickOutside={false} arrowSize={12} width={200}>
            <Menu.Target>
                <UnstyledButton>{props?.name?.charAt(0).toUpperCase() + props?.name?.slice(1)}</UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Label>My Profile</Menu.Label>
                <Menu.Item>My Account</Menu.Item>
                <Menu.Item>My Orders</Menu.Item>
                <Menu.Item>Log out</Menu.Item>
            </Menu.Dropdown>
        </Menu >
    )
}
