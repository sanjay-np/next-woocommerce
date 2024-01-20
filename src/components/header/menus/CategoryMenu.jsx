import { Burger, Group, Menu, Text, UnstyledButton } from '@mantine/core'
import { Link } from 'nextjs13-progress'
import React from 'react'

export default function CategoryMenu(props) {
	const { items } = props
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
				{items?.nodes?.map((item, index) => (
					<Menu.Item key={index}>
						<Link href={`/product/category/${item?.slug}`}>
							{item?.name}
						</Link>
					</Menu.Item>
				))}
			</Menu.Dropdown>
		</Menu>
	)
}
