import React from "react";
import "./Home.css";
import hero from "../../assets/hero.png";
import flower from "../../assets/flower.png";
import no from "../../assets/no.png";
import Banner from "../Banner/Banner";
import { Alert } from "@mui/material";
// import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact.jsx";

import { ToastContainer, toast } from 'react-toastify';
import Shop from "./Shop";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div id="home">
        <div className="lefthome">
          <h1>
            {" "}
            Think <h>Green</h> And <h>Plant</h> Something
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            aspernatur sint placeat.
          </p>
          <div className="homecard">
            <div className="flower onr">
              <h1>Flower</h1>
              <div className="contain">
                <img src={flower} alt="" />

                <p>you want to explore more</p>
              </div>
              <div className="inbtn">
              <Link to="/blog/flower"  style={{background:"green",padding:"2px 6px", color:"white",borderRadius:"5px"}}>buy now</Link>
              </div>
            </div>
            <div className="plant onr">
              <h1>Plant</h1>
              <div className="contain">
                <img src={no} alt="" />

                <p>you want to explore more</p>
              </div>
              <div className="inbtn">
              <Link to="/shopping"  style={{background:"green",padding:"2px 6px", color:"white",borderRadius:"5px"}}>buy now</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="righthome">
          <img src={hero} alt=""  />
        </div>
      </div>
      <Banner />
      {/* <Shop/> */}
    <Contact/>
      




    </>
  );
};

export default Home;
