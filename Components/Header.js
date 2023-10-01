import React, { useState } from 'react'
import FoodFireLogo from "../img/logo.png";
import { Link, useNavigate } from 'react-router-dom';
const Title=()=>{
  return (
    <a href='/'>
      <img
      className='logo'
      src={FoodFireLogo}
      alt='Food Fire Logo'
      title='Food Fire Logo'
      />
    </a>
  )
}
//Header Components for header section : Logo , Nav items
const Header = () => {
  const [isLoggedin,setIsLoggedin]=useState(true);
  const navigate=useNavigate();
  return (
    <div
    className='header'
    >
      <Title/>
      <div className='nav-items'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <i className='fa-solid fa-cart-shopping'></i>
          </li>
          <li>
            {
              isLoggedin?(
                <button className='logout-btn'  onClick={setIsLoggedin(false)}> 
                  Logout
                </button>
              ):(
                <button className='login-btn' onClick={()=>navigate("/login")}>Login</button>
              )
            }
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header