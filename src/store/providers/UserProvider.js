'use client'
import React from 'react'
import { useSelector } from 'react-redux'

export default function UserProvider({ children }) {
    const theme = useSelector((state) => state.themeSelectorSlice.theme)
    return (
        <div className={`theme-${theme}`}>
            {children}
        </div>
    )
}
