'use client'
import { Container, Grid } from '@mantine/core'
import { InfoIcon, LifeBuoyIcon, RocketIcon, RotateCcwIcon } from 'lucide-react'
import React from 'react'

export default function IconBox() {
	return (
		<div className='icon-box'>
			<Container size={'lg'}>
				<div className="icon-box-wrapper">
					<Grid>
						<Grid.Col span={3}>
							<div className="item">
								<div className="icon">
									<RocketIcon size={48} color='#333' strokeWidth={1} />
								</div>
								<div className="content">
									<h3>Free Shipping</h3>
									<p>Orders $50 or more</p>
								</div>
							</div>
						</Grid.Col>
						<Grid.Col span={3}>
							<div className="item">
								<div className="icon">
									<RotateCcwIcon size={48} color='#333' strokeWidth={1} />
								</div>
								<div className="content">
									<h3>Free Returns</h3>
									<p>Within 30 days</p>
								</div>
							</div>
						</Grid.Col>
						<Grid.Col span={3}>
							<div className="item">
								<div className="icon">
									<InfoIcon size={48} color='#333' strokeWidth={1} />
								</div>
								<div className="content">
									<h3>Get 20% Off 1 Item</h3>
									<p>when you sign up</p>
								</div>
							</div>
						</Grid.Col>
						<Grid.Col span={3}>
							<div className="item">
								<div className="icon">
									<LifeBuoyIcon size={48} color='#333' strokeWidth={1} />
								</div>
								<div className="content">
									<h3>We Support</h3>
									<p>24/7 amazing services</p>
								</div>
							</div>
						</Grid.Col>
					</Grid>
				</div>

			</Container>
		</div>
	)
}
