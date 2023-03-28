import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props)

    const{id,img,seller,quantity,price,name,ratings}=props.product;

   const handleCart = props.handleCart;

    return (
        <div>
           <div className="product">
           <img src={img} alt="" />
           <div className="card-container">
           <h4 className="product-name">{name}</h4>
           <p className="product-price">Price:${price}</p>
           <p>Manufacturar: {seller}</p>
           <p>Ratting: {ratings} star</p>
           </div>

           <button onClick={()=>handleCart(props.product)} className="btn-cart">
            
            Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
           
           </button>
           </div>
        </div>
    );
};

export default Product;