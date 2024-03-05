import { removeCoupon, updateShippingMethod } from '@/query/cart'
import { updateCart } from '@/store/reducers/sessionSlice'
import { Box, LoadingOverlay, Radio, UnstyledButton } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { RefreshCcwIcon, XIcon } from 'lucide-react'
import { Link } from 'nextjs13-progress'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function CartSummary() {
    const { cart, customer } = useSelector((state) => state.sessionSlice)
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const [cartInfo, setCartInfo] = useState()
    useEffect(() => {
        setCartInfo(cart)
        setLoading(false)
    }, [cart])

    const handleRemoveCoupon = async (code) => {
        try {
            setLoading(true)
            if (code !== '') {
                const res = await removeCoupon(code, localStorage.getItem('woo-session'))
                if (res?.errors) {
                    notifications.show({
                        title: 'Error',
                        message: res?.errors[0]?.message,
                        withCloseButton: true,
                        color: 'red',
                        icon: <XIcon />,
                        autoClose: 3000,
                    })
                } else {
                    if (res?.data?.removeCoupons !== null) {
                        dispatch(updateCart(res?.data?.removeCoupons?.cart))
                    }
                }
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false)
        }
    }
    const handleShippingChange = async (method_id) => {
        try {
            setLoading(true)
            if (method_id !== '') {
                const res = await updateShippingMethod(method_id, localStorage.getItem('woo-session'))
                if (res?.errors) {
                    notifications.show({
                        title: 'Error',
                        message: res?.errors[0]?.message,
                        withCloseButton: true,
                        color: 'red',
                        icon: <XIcon />,
                        autoClose: 3000,
                    })
                } else {
                    if (res?.data?.updateShippingMethod !== null) {
                        dispatch(updateCart(res?.data?.updateShippingMethod?.cart))
                    }
                }
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false)
        }
    }


    return (
        <React.Fragment>
            <div className="summary summary-cart">
                <Box pos="relative">
                    <LoadingOverlay visible={loading} zIndex={1000} overlayProps={{ radius: "sm", blur: 1 }} loaderProps={{ color: '#C96', type: 'bars' }} />
                    <h3 className="summary-title">Cart Total</h3>
                    <table className="table table-summary">
                        <tbody>
                            <tr className="summary-subtotal">
                                <td>Subtotal:</td>
                                <td className='right'><span dangerouslySetInnerHTML={{ __html: cartInfo?.subtotal }} /></td>
                            </tr>
                            {cartInfo?.appliedCoupons && cartInfo?.appliedCoupons.length && (
                                cartInfo?.appliedCoupons.map((item, index) => {
                                    return (
                                        <tr className="coupon-subtotal" key={index}>
                                            <td>Coupon: {item?.code}</td>
                                            <td className='right'>
                                                <span dangerouslySetInnerHTML={{ __html: `-${item.discountAmount}` }} />
                                                <UnstyledButton
                                                    className='remove-coupon-btn'
                                                    onClick={() => { handleRemoveCoupon(item?.code) }}
                                                >
                                                    Remove
                                                </UnstyledButton>
                                            </td>
                                        </tr>
                                    )
                                })
                            )}
                            {cartInfo?.needsShippingAddress && (
                                <React.Fragment>
                                    <tr className="summary-shipping">
                                        <td>Shipping:</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    {cartInfo?.availableShippingMethods.length && (
                                        cartInfo?.availableShippingMethods[0].rates.map((item, index) => {
                                            return (
                                                <tr className="summary-shipping-row" key={index}>
                                                    <td>
                                                        <div className="custom-control custom-radio">
                                                            <Radio
                                                                label={item?.label}
                                                                color='#C96'
                                                                name='shipping_method'
                                                                onChange={() => { handleShippingChange(item?.id) }}
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>{`$ ${item?.cost}`}</td>
                                                </tr>
                                            )
                                        })
                                    )}
                                    <tr className="summary-shipping-estimate">
                                        <td>Estimate for Your Country<br /> <a href="dashboard.html">Change address</a></td>
                                        <td>&nbsp;</td>
                                    </tr>
                                </React.Fragment>
                            )}


                            <tr className="summary-total" >
                                <td>Total:</td>
                                <td className='right'><span dangerouslySetInnerHTML={{ __html: cartInfo?.total }} /></td>
                            </tr>
                        </tbody>
                    </table>
                    <Link href={customer?.checkoutUrl} className=" btn-order">
                        PROCEED TO CHECKOUT
                    </Link>
                </Box>
            </div>
            <Link href={'/shop'} className='continue-shopping-btn'>
                CONTINUE SHOPPING <RefreshCcwIcon size={16} color='#333' />
            </Link>
        </React.Fragment>
    )
}