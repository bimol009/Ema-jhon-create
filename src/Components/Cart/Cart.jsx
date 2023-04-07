import "./Cart.css";
import React from "react";
import { faShoppingCart, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = ({ cart,deleteAllShop,children }) => {
  // const { cart } = props;
  console.log(cart);

  let price = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    // if(product.quantity === 0){
    //     product.quantity = 1;
    // }

    console.log(product);
    price = price + product.price * product.quantity;
    shipping = (shipping + product.shipping) * product.quantity;
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
      <button onClick={deleteAllShop} className="btn-clear-cart">
        <span>Clear Cart</span>
        <div><FontAwesomeIcon icon={faTrashAlt} /></div>
      </button>
      {children}
    </div>
  );
};

export default Cart;
