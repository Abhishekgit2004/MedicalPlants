import React, { useContext, useState } from "react";
import { useRef } from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import context from "../../context/Context";
import { Toaster } from "react-hot-toast";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LogOut from "./Login/LogOut";


const Navbar = () => {
  const mobile = useRef();
  const ham = useRef();
  const { name,setname } = useContext(context);
  console.log(name);
const navigate=useNavigate()


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

        <div
          className="logindetails"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <h1>{name ? name : "??"}</h1>
         <LogOut/>
        </div>
      </nav>
    </>
  );
};

export default Navbar; //thik hai krega? bol   kya krna hi ui bana haiok
