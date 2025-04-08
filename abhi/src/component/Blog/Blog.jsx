import React, { useEffect, useState } from "react";
import "./Blog.css";
import banner from "../../assets/m.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import styled from "styled-components";
import Blogcard from "./Blogcard";
import rohit from "../../assets/Rohit.jpg";
// import Abhi from "../../assets/Abhi.jpg";
import data from "./Data";
// import { cat } from './Blogcard';


const Blog = () => {
  const [change,setchange]=useState(data)

const filteredNames = change === 'place' || change === 'season'   ? data.filter(e => e.catogory === change)    : data;
  console.log(filteredNames  )
  useEffect(()=>{console.log(change)},[change])

  // let cat;

  return (
    <>
      <MainContainer>
        <div className="demo">
          <div className="descripe">
            <h1 style={{ color: "black" }}>Ahishek & Ram Blog</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In.</p>
            <div className="btn-Contain">
              <button onClick={()=>setchange("All")}>All</button>
              <button onClick={()=>setchange("place")}>Places</button>
              <button onClick={()=>setchange("season")}>Seonson</button>
            </div>
          </div>
<div className="maincards">

         {
           filteredNames.map((f,i)=>(<Blogcard image={f.image} name={f.name} discrption={f.discrption} key={i} />))
          }
          </div>

        </div>
      </MainContainer>
    </>
  );
};

export default Blog;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  /* overflow: hidden; */

  .maincards {
    display: flex;
    flex-direction: row;
    gap: 40px;
    align-items: center;
    /* flex-wrap: wrap; */
    height: 100%;
    width: 100%;
    justify-content: center;
    margin: 0 auto;
    padding: 20px;
    gap: 60px;
    flex-wrap: wrap;
    scrollbar-width: none;
  }
  @media (max-width: 900px) {
    .cards {
      flex-direction: column;
    }
    @media (max-width: 500px) {
      margin-right: 37px;
    }
  }

  .descripe {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: black;
    text-align: center;
  }
  .btn-Contain {
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  .btn-Contain button {
    padding: 6px 12px;
    background: #1a832f;
    color: white;
    font-weight: 600;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;
