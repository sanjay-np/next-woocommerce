'use client'
import React from 'react'
import { Provider, useSelector } from 'react-redux'
import { store } from '../store'

export default function StoreProvider({ children }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}