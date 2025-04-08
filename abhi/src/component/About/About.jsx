import React from 'react'
import "./About.css"
import Aboutcard from '../Aboutcard/Aboutcard'
import styled from "styled-components"
import about5 from "../../assets/About/about5.png"
import about1 from "../../assets/About/about1.png"
import about2 from "../../assets/About/about2.png"
import about3 from "../../assets/About/about3.png"
import about4 from "../../assets/About/about4.png"
import about6 from "../../assets/About/about6.png"
import Contact from '../Contact/Contact'
const About = () => {
  return (
    <div id='about'>
      
    
    <div className="leftabout">
      
     <h1>There More to Our story</h1>
     </div>

   <div className="rightabout">
        <Aboutcard image={about1} btnname={"see story"} h3name={"mountain Area"}/>
        
        <Aboutcard image={about2} btnname={"palnting see"} h3name={"FOREST AREAS"}/>
        <Aboutcard image={about3} btnname={"see Hills"} h3name={"HILSS AREAS PLANING"}/>
        <Aboutcard image={about4} btnname={"rain in forest"} h3name={"During Rainy season"}/>
        <Aboutcard image={about6} btnname={"SunRise"} h3name={"Summer seasons"}/>
        <Aboutcard image={about5}btnname={"Abhishek"} h3name={"ab"}/>
        </div>




          <h1 style={{color:"rgb(113, 165, 113)",textAlign:"center"}}>Our Mission</h1>
        <div className="new" style={{color:"black"}}>

          <section> <h1>maintain</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, error ratione dolore nam rem qui, accusantium illum dolorem sequi assumenda eligendi officiis ab.</p>
          </section>
          <section> <h1>History</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, error ratione dolore nam rem qui, accusantium illum dolorem sequi assumenda eligendi officiis ab.</p>
          </section>
          <section> <h1>values</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, error ratione dolore nam rem qui, accusantium illum dolorem sequi assumenda eligendi officiis ab.</p>
          </section>
         
        </div>
      
       
      
        <Contact/>
    </div>
  )
}

export default About

// const AboutConatiner= styled.div`
//   display: flex;
//   gap: 20px;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   /* h1{
//     color: black;
//   } */

//   /* @media (max-width: 750px) {
//     flex-direction: column;
//   } */

// `
// const LeftAbout=styled.div`
  
// `
// const RightAbout=styled.div`
// display: flex;
// flex-direction: row;
//   gap: 30px;
//   align-items: center;
//   justify-content: center;
//   flex-wrap: wrap;
// `