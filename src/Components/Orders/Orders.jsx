import "./Orders.css";
import Cart from "../Cart/Cart";
import React, { useState } from "react";
import ReviewItem from "../ReviewItem/ReviewItem";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
  const savedCart = useLoaderData();
  //   console.log(cart);

  const [cart, setCart] = useState(savedCart);

  const removeFromData = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  const deleteAllShop = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      <div className="products">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            removeFromData={removeFromData}
          ></ReviewItem>
        ))}
      </div>

      <div className="list-item">
        <Cart cart={cart} deleteAllShop={deleteAllShop}>
          <Link to="/checkout">
            <button className="btn-clear-cart">Proceed Checkout</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
