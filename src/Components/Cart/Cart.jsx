import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  console.log(cart);

  let price = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    // if(product.quantity === 0){
    //     product.quantity = 1;
    // }
    price = price + product.price*product.quantity;
    shipping = (shipping + product.shipping)*product.quantity;
    quantity = quantity + product.quantity;
  }

  const tax = (price * 7) / 100;
  const grand = price + shipping + tax;

  // console.log(price)

  return (
    <div className="cart-section">
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
