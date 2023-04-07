import "./ReviewItem.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

  import { faShoppingCart,faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product,removeFromData }) => {
  const { id, img, name, price, quantity } = product;
  return (
    <div className="riverItem">
      <img src={img} alt="" />
      <div className="order-details">
        <p className="order-title">{name}</p>

        <p>
          Price: <span className="orange-text">${price}</span>
        </p>

        <p>
          Shipping Charge: <span className="orange-text">${quantity}</span>
        </p>
      </div>
      <button onClick={()=>removeFromData(id)} className="button"><FontAwesomeIcon className="delete-icon" icon={faTrashAlt} /></button>
    </div>
  );
};

export default ReviewItem;
