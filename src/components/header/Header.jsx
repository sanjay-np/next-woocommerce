'use client'
import React from 'react'
import TopHeader from './topheader/TopHeader'
import BottomHeader from './bottomheader/BottomHeader'

export default function Header(props) {
	const { categories } = props
	return (
		<React.Fragment>
			<div className="main-header">
				<div className="header-top">
					<TopHeader />
				</div>
				<div className="header-bottom">
					<BottomHeader catMenuItems={categories} />
				</div>
			</div>
		</React.Fragment>
	)
}
