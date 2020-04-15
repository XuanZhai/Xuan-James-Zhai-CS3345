import React from 'react';
import Cart from '../models/cart'
import Header from './header';
import  CartService  from '../services/cartService'


class MyCart extends React.Component {
    state = {
        cart: new CartService().getCart(),
    }

    render(){
        return (
            <div className = "container">
                <header>           
                    <Header />         
                </header>
                <div>
                    <table className="table table-striped mt-3">
                        <thead>
                            <tr>
                                <th>Qty</th>
                                <th>Product</th>
                                <th className = "text-right">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.cart.items.map((i) =>
                                <tr key = {i.product.name}>
                                    <th style = {{fontWeight: "lighter"}}>{i.quantity}</th>
                                    <th>
                                        <span style = {{fontWeight: "lighter"}}>{i.product.name}</span>
                                        <span style = {{fontWeight: "lighter", color : "#909497"}}> - ${i.product.pice}/each</span>
                                    </th>
                                    <th className = "text-right" style = {{fontWeight: "lighter"}}>${i.totalPrice}</th>
                                </tr>
                            )}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th></th>
                                <th></th>
                                <th className = "text-right">${this.state.cart.total}</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        )
    }
}


export default MyCart