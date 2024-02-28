import { RefreshCcwIcon } from 'lucide-react'
import { Link } from 'nextjs13-progress'
import React from 'react'
import { useSelector } from 'react-redux'

export default function CartSummary() {
    const { cart } = useSelector((state) => state.sessionSlice)

    return (
        <React.Fragment>
            <div className="summary summary-cart">
                <h3 className="summary-title">Cart Total</h3>
                <table className="table table-summary">
                    <tbody>
                        <tr className="summary-subtotal">
                            <td>Subtotal:</td>
                            <td><span dangerouslySetInnerHTML={{ __html: cart?.subtotal }} /></td>
                        </tr>
                        <tr className="summary-shipping">
                            <td>Shipping:</td>
                            <td>&nbsp;</td>
                        </tr>

                        <tr className="summary-shipping-row">
                            <td>
                                <div className="custom-control custom-radio">
                                    <input type="radio" id="free-shipping" name="shipping" className="custom-control-input" />
                                    <label className="custom-control-label">Free Shipping</label>
                                </div>
                            </td>
                            <td>$0.00</td>
                        </tr>

                        <tr className="summary-shipping-row">
                            <td>
                                <div className="custom-control custom-radio">
                                    <input type="radio" id="standart-shipping" name="shipping" className="custom-control-input" />
                                    <label className="custom-control-label">Standart:</label>
                                </div>
                            </td>
                            <td>$10.00</td>
                        </tr>

                        <tr className="summary-shipping-row">
                            <td>
                                <div className="custom-control custom-radio">
                                    <input type="radio" id="express-shipping" name="shipping" className="custom-control-input" />
                                    <label className="custom-control-label">Express:</label>
                                </div>
                            </td>
                            <td>$20.00</td>
                        </tr>

                        <tr className="summary-shipping-estimate">
                            <td>Estimate for Your Country<br /> <a href="dashboard.html">Change address</a></td>
                            <td>&nbsp;</td>
                        </tr>

                        <tr className="summary-total">
                            <td>Total:</td>
                            <td><span dangerouslySetInnerHTML={{ __html: cart?.total }} /></td>
                        </tr>
                    </tbody>
                </table>
                <Link href="/checkout" className=" btn-order">
                    PROCEED TO CHECKOUT
                </Link>
            </div>
            <Link href={'/shop'} className='continue-shopping-btn'>
                CONTINUE SHOPPING <RefreshCcwIcon size={16} color='#333' />
            </Link>
        </React.Fragment>
    )
}