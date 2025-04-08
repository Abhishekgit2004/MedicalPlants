import React from 'react'
import styled from "styled-components"



const Aboutcard = ({btnname,h3name,image}) => {
  return (
   
         <AboutcardContainer>
            <RightAbout>
                <img src={image}alt="ABout caed image" height={"100%"} width={"100%"}/> 
            </RightAbout>
        
            <LeftAbout>
                <h3 > {h3name}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cs</p>
                <button>
                    {btnname}
                </button>
            </LeftAbout>
         </AboutcardContainer>

  
  )
}

export default Aboutcard;

const AboutcardContainer=styled.div`
 height: 400px;
 width: 300px;
 background: #f9eeee;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 gap: 2px;
 flex-shrink: 0;
    
`;
const RightAbout=styled.div`
height: 50%;
width: 100%;
justify-content: center;    

    
`;

const LeftAbout=styled.div`
height: 50%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;
text-align: center;
h3{
  color: #588912;
}
p{
    color: #588912;
}
button{
    background: #588912;
    color: white;
    height: 35px;
    width: 60%;
    border-radius: 5px;
    font-weight: 700;
}
    
`
