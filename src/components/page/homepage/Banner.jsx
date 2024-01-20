'use client'
import { Container, Grid } from '@mantine/core'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Banner() {
	return (
		<div className='banners'>
			<Container size={'lg'}>
				<Grid gutter={{ base: 10 }} justify="space-between" align="center" >
					<Grid.Col span={3}>
						<div className="banner-item">
							<div className="banner-overlay">
								<a href="#" className="banner-image">
									<Image src="/assets/images/banners/banner-1.jpg" width={0} height={0} sizes="100vw" alt="Hero Image" style={{ width: '100%', height: '100%' }} />
								</a>
								<div className="banner-content">
									<h4 className="banner-subtitle">
										<a href="#">Weekend Sale</a>
									</h4>
									<h3 className="banner-title">
										<a href="#">
											Lighting <br />&amp; Accessories <br /><span>25% off</span>
										</a>
									</h3>
									<a href="#" className="banner-link">
										Shop Now <ArrowRight size={18} />
									</a>
								</div>
							</div>
						</div>
					</Grid.Col>
					<Grid.Col span={6}>
						<div className="banner-item">
							<div className="banner-overlay">
								<a href="#" className="banner-image">
									<Image src="/assets/images/banners/banner-2.jpg" width={0} height={0} sizes="100vw" alt="Hero Image" style={{ width: '100%', height: '100%' }} />
								</a>
								<div className="banner-content">
									<h4 className="banner-subtitle">
										<a href="#">Amazing Value</a>
									</h4>
									<h3 className="banner-title">
										<a href="#">
											Clothes Trending <br />Spring Collection 2019  <br /><span>from $12,99</span>
										</a>
									</h3>
									<a href="#" className="banner-link">
										Shop Now <ArrowRight size={18} />
									</a>
								</div>
							</div>
						</div>
					</Grid.Col>
					<Grid.Col span={3}>
						<div className="banner-item">
							<div className="banner-overlay">
								<a href="#" className="banner-image">
									<Image src="/assets/images/banners/banner-3.jpg" width={0} height={0} sizes="100vw" alt="Hero Image" style={{ width: '100%', height: '100%' }} />
								</a>
								<div className="banner-content">
									<h4 className="banner-subtitle">
										<a href="#">Smart Offer</a>
									</h4>
									<h3 className="banner-title">
										<a href="#">
											Anniversary <br /> Special <br /><span>15% off</span>
										</a>
									</h3>
									<a href="#" className="banner-link">
										Shop Now <ArrowRight size={18} />
									</a>
								</div>
							</div>
						</div>
					</Grid.Col>
				</Grid>
			</Container>
		</div>
	)
}
