import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart,setCart] = useState([]);


  useEffect(()=>{
    fetch('products.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))
  },[])


  const handleCart = (product)=>{
    const newCart = [...cart,product]
    setCart(newCart);
}

  return (
    <div>
      <div className="shop-container">
        <div className="products-item">

          {
            
            products.map(product=><Product 
                
                key={product.id}
                product = {product}
                handleCart = {handleCart}
            
            ></Product>)

            }
        </div>
        <div className="list-item">
          <h1>List Item:{cart.length}</h1>
        </div>
      </div>
    </div>
  );
};

export default Shop;
