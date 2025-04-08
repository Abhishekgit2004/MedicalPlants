import React from 'react'
import styled from "styled-components"
const Offer = () => {
  return (
   <Main>
 <marquee behavior="loop"  direction="" >50% off till the date of 15th june ☺️☺️☺️</marquee>
   </Main>
  )
}

export default Offer


const Main=styled.div`
    width: 100%;
    height: 40px;
   /* margin-top: 10px; */
    background: green;
    display: flex;
    align-items: center;

    marquee{
        font-size: larger;
        font-weight: 700;
    }
`