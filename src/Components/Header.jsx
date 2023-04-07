import React from "react";
import logo from "../images/Logo.svg";
import { Link } from "react-router-dom";

import'./Header.css';

const Header = () => {
  return (
    <div>
      <>
        <nav className="header">
            <img src={logo} alt="" />

            <div className="menu">
                <Link to="/shop">Shop</Link>
                <Link to="/Orders">Order</Link>
                <Link to="/orderReview">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/Login">Login</Link>
                
            </div>
        </nav>
      </>
    </div>
  );
};

export default Header;
