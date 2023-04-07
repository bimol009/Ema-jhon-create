import "./Shop.css";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const loadProduct = getShoppingCart();
    // console.log(loadProduct)
    const saveCart = [];

    for (const id in loadProduct) {
      console.log(id)
      const addedProducts = products.find((product) => product.id === id);
      console.log(addedProducts)
      const quantity = loadProduct[id];
      if (addedProducts) {
        addedProducts.quantity = quantity;
        saveCart.push(addedProducts);
      }

      // productsFind.quantity = Quantity;
      // console.log(productsFind)
    }

    setCart(saveCart);
  }, [products]);

  const deleteAllShop = ()=>{
    setCart([]);
  }

  const handleCart = (product) => {
    let newSetCart = [];

    const newExists = cart.find((pd) => pd.id === product.quantity);
    if (!newExists) {
      product.quantity = 1;
      newSetCart = [...cart, product];
    } else {
      newExists.quantity = newExists.quantity + 1;
      const remaining = cart.filter((pd) => pd.id !== product.quantity);
      newSetCart = [...remaining, newExists];
    }

    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };

  return (
    <div>
      <div className="shop-container">
        <div className="products-item">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleCart={handleCart}
            ></Product>
          ))}
        </div>
        <div className="list-item">
          <Cart cart={cart} deleteAllShop={deleteAllShop}>
            <Link to="/Orders">
            <button className="btn-clear-cart">Review Order</button>
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
