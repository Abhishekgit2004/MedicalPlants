import React, { useContext, useState } from "react";
import { useRef } from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import context from "../../context/Context";

const Navbar = () => {
  const mobile = useRef();
  const ham = useRef();
  const {name} = useContext(context); 
  console.log(name);
  
  
  return (
    <>
      <nav>
        <img src={logo} alt="" height={"40px"} width={"40px"} />
        <ul className="desktopview">
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/shopping">
            <li>Shopping</li>
          </Link>
          <Link to="/information">
            <li>Information</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/blog">
            <li>Blog</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
        <div
          className="hamburg"
          ref={ham}
          onClick={() => {
            mobile.current.classList.toggle("activeMobile");
            ham.current.classList.toggle("activeham");
          }}
        >
          <div className="ham"></div>
          <div className="ham"></div>
          <div className="ham"></div>
        </div>
        <ul className="mobileview" ref={mobile}>
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/shopping">
            <li>Shopping</li>
          </Link>
          <Link to="/information">
            <li>Information</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/blog">
            <li>Blog</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>

       <div className="logindetails">
          <h1 >{name?name:"??"}</h1>
       </div>
      </nav>
      
    </>
  );
};

export default Navbar;//thik hai
