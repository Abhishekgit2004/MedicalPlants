import React, { useEffect, useState } from 'react'
import "./ShopNav.css"
import { FiShoppingCart } from "react-icons/fi";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Offer from './Offer';
import Shopping from './Shopping';



const ShopNav = ({icon,shopnum}) => {
 useEffect(()=>{
  console.log(shopnum)
 },[shopnum])
  return (
    <>
    <Offer/>
  <div className="Navmain">
        <div className="leftshopNav">
        <button onClick={icon}><FiShoppingCart className='shopicon' /></button>
        <h1 className='h1'>
          <p>{shopnum?shopnum:'0'}</p>
        </h1>
        </div>
        <div className="rightshopNav">
        <ul>
          
    <Link to="/shopping"><li  >Plants </li></Link>
                <Link to="/blog/flower"><li >flower</li></Link>
            </ul>
        </div>
  </div>
 
  </>
  )
}

export default ShopNav