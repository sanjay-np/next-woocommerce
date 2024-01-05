import { Burger, Group, Menu, Text, UnstyledButton } from '@mantine/core'
import React from 'react'

export default function CategoryMenu(props) {
    return (
        <Menu shadow="md" width={200} withArrow closeOnClickOutside={false} arrowSize={12}>
            <Menu.Target>
                <Group>
                    <Burger opened={props.state} onClick={() => { props.method.toggle() }} aria-label="Toggle navigation" />
                    <UnstyledButton onClick={() => { props.method.toggle() }}>Browse Categories</UnstyledButton>
                </Group>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Label>Popular Categories</Menu.Label>
                <Menu.Item >Computers & Laptops</Menu.Item>
                <Menu.Item >Cameras</Menu.Item>
                <Menu.Item >Smart Phones</Menu.Item>
                <Menu.Item >Televisions</Menu.Item>
                <Menu.Item >Audio</Menu.Item>
                <Menu.Item >Smart Watches</Menu.Item>
                <Menu.Item rightSection={<Text size="xs" c="dimmed">⌘K</Text>}>Search</Menu.Item>
                <Menu.Divider />
                <Menu.Label>Danger zone</Menu.Label>
                <Menu.Item>Transfer my data</Menu.Item>
                <Menu.Item color="red">Delete my account</Menu.Item>
            </Menu.Dropdown>
        </Menu>
    )
}
