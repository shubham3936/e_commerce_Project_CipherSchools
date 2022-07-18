import React from 'react';
import ReactDOM from 'react-dom';
import "./Navbar.css";
import logo from "../../images/ecom.png";
import banner from '../../images/banner1.jpg';
import { useNavigate } from 'react-router-dom';
import ProductCategories from '../ProductCategories/ProductCategories';
import Button from "../../global/Button/Button";
//import { Navigate, useNavigate } from 'react-router-dom';


function Navbar({productCategoryName, setProductCategoryName,showSigninButton}) {

  const navigate = useNavigate();
  function gotoSignPage()
  {
    navigate("/sign-in");
  }
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
          {showSigninButton===false ?(" ")
           : (<Button text="Sign In" onClick={gotoSignPage}/>)
           }
        </div>
        <div className='myorders'>
          <p>MyOrders</p>
        </div>
        <div className='contactus'>
          <p>Contact Us</p>
        </div>
        
        
        
        
        
    </div>
    
    <div className='banner'>
        <img src={banner} alt="" />
    </div>
      <ProductCategories productCategoryName={productCategoryName} setProductCategoryName={setProductCategoryName}/>
    </>
  )
}

export default Navbar;