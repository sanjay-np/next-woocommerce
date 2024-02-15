'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setWoocommerceSession } from '../reducers/sessionSlice'
import { getWoocommerceSession } from '@/query/session'

export default function UserProvider({ children }) {
    const dispatch = useDispatch()
    const initialized = useRef(false)
    const theme = useSelector((state) => state.themeSelectorSlice.theme)

    const getWoocommerceUserSession = async () => {    
        const session = sessionStorage.getItem('woo-session')
        if(!session){
            const res = await getWoocommerceSession()
            if(res){
                dispatch(setWoocommerceSession(res))
            }
        }
    }

    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true
            getWoocommerceUserSession()
        }
    }, [])

    return (
        <div className={`theme-${theme}`}>
            {children}
        </div>
    )
}
