import React, { useState } from 'react'
import banner from "../../assets/banner.png"
import "./Banner.css"
import money from "../../assets/money.png"
import Infromation from '../Info/Infromation'
import { Link } from 'react-router-dom'

const Banner = () => {
  const [showInfo,setshowInfo]=useState(true)
  return (
    <>
    <div className="banner">
        <div className="bannertool">
        <div className="leftbanner">
            <h1>Grow plant with fully information</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quo ea minus!</p>

            {showInfo && (
              <Link to="/information" className="info-button">
                <strong>Information</strong> 
              </Link >
            )}        </div>
        <div className="rightbanner">
            <img src={banner} alt="" />
            
        </div>  
       
       
       
       
       
       
        </div>
    </div>
    
    </>
  )
}

export default Banner