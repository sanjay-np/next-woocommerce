'use client'
import React from 'react'
import TopHeader from './topheader/TopHeader'
import BottomHeader from './bottomheader/BottomHeader'

export default function Header() {
  return (
    <div>
      <div className="main-header">
        <div className="header-top">
            <TopHeader/>
        </div>
        <div className="header-bottom">
            <BottomHeader/>
        </div>
      </div>
    </div>
  )
}
