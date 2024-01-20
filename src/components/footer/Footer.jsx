'use client'
import { Container, Flex, Grid } from '@mantine/core'
import Image from 'next/image'
import React from 'react'

export default function Footer() {
	return (
		<footer className="footer">
			<div className="cta">
				<Container size={'lg'}>

				</Container>
			</div>
			<div className="footer-middle">
				<Container size={'lg'}>
					<Grid>
						<Grid.Col span={3}>
							<div className="widget widget-about">
								<Image src="/assets/images/logo-footer.png" className="footer-logo" alt="Footer Logo" width="105" height="25" />
								<p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. </p>
							</div>
						</Grid.Col>
						<Grid.Col span={3}>
							<div className="widget">
								<h4 className="widget-title">Useful Links</h4>
								<ul className="widget-list">
									<li><a href="about.html">About Molla</a></li>
									<li><a href="#">Our Services</a></li>
									<li><a href="#">How to shop on Molla</a></li>
									<li><a href="faq.html">FAQ</a></li>
									<li><a href="contact.html">Contact us</a></li>
								</ul>
							</div>
						</Grid.Col>
						<Grid.Col span={3}>
							<div className="widget">
								<h4 className="widget-title">Customer Service</h4>
								<ul className="widget-list">
									<li><a href="#">Payment Methods</a></li>
									<li><a href="#">Money-back guarantee!</a></li>
									<li><a href="#">Returns</a></li>
									<li><a href="#">Shipping</a></li>
									<li><a href="#">Terms and conditions</a></li>
									<li><a href="#">Privacy Policy</a></li>
								</ul>
							</div>
						</Grid.Col>
						<Grid.Col span={3}>
							<div className="widget">
								<h4 className="widget-title">My Account</h4>
								<ul className="widget-list">
									<li><a href="#">Sign In</a></li>
									<li><a href="cart.html">View Cart</a></li>
									<li><a href="#">My Wishlist</a></li>
									<li><a href="#">Track My Order</a></li>
									<li><a href="#">Help</a></li>
								</ul>
							</div>
						</Grid.Col>
					</Grid>
				</Container>
			</div>

			<div className="footer-bottom">
				<Container size={'lg'} className='container'>
					<Flex justify={'space-between'} align={'center'}>
						<p className="footer-copyright">Copyright © 2019 Molla Store. All Rights Reserved.</p>
						<figure className="footer-payments">
							<Image src="/assets/images/payments.png" alt="Payment methods" width="272" height="20" />
						</figure>
					</Flex>
				</Container>
			</div>
		</footer>

	)
}
