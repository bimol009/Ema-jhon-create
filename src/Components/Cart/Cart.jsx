import React from 'react';
import './Cart.css'

const Cart = (props) => {

    



    const {cart}=props
    
let price= 0;
let shipping = 0;
for(const product of cart){
    price=price+product.price
    shipping = shipping+product.shipping;
}

const tax = (price*7)/100
const grand = price+shipping+tax;

console.log(price)

    

    return (
        <div className='cart-section'>
            <h4>Oder Summary</h4>
            <h1>List Item:{cart.length}</h1>
            <p>Total Price : ${price} </p>
            <p>Total Shipping Charge: ${shipping} </p>
            <p>Tax : ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${grand.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;