import React from 'react';
import ReactDOM from 'react-dom';
import "./Navbar.css";
import logo from "../../images/ecom.png";
import ProductCategories from '../ProductCategories/ProductCategories';


function Navbar({productCategoryName, setProductCategoryName}) {
  return (
    <>
    <div className="navbar_container">
        <div className='logo'>
          <img src={logo}/>
        </div>
        <div className='searchbox'>
          <input type="text" placeholder="Search"/>
        </div>
        <div className='signin'>
          <button>LogIn</button>
        </div>
        <div className='myorders'>
          <p>MyOrders</p>
        </div>
        <div className='contactus'>
          <p>Contact Us</p>
        </div>
        
        
        
        
        
    </div>
    <ProductCategories productCategoryName={productCategoryName} setProductCategoryName={setProductCategoryName}/>
    </>
  )
}

export default Navbar;