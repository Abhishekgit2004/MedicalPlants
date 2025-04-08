import React, { useState } from "react";
import { styled } from "styled-components";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  // Initialize the Formspree form
  const [state, handleSubmit] = useForm("YOUR_FORMSPREE_FORM_ID");

  const speak = () => {
    let msg = new SpeechSynthesisUtterance(
      "We will respond to you as soon as possible."
    );
    window.speechSynthesis.speak(msg);
  };

  return (
    <>
      <ContactContainer>
        <MainContainer>
          <div className="leftcontact">
            <h1>Get in touch</h1>
            <p>
              <ReactTyped strings={["You can find anything here"]} loop typeSpeed={30} />
            </p>
          </div>
          <div className="rightcontact">
            <div className="box">              
              <form  action="/home"
  >
                <h1>Contact Me</h1>

                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />

                <label htmlFor="email" className="email mt-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />

                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  required
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />

                <div className="">
                  <button type="submit" onClick={speak}>
                    <strong>Submit</strong>
                  </button>
                </div>
              </form>
              {state.succeeded && <p>Thanks for reaching out!</p>}
            </div>
          </div>
        </MainContainer>

        <footer>
          <div className="link">
            <Link to="https://www.instagram.com/abhishekpal2843?igsh=MTN2eThhMTlvc2lk/">
              <img src="https://img.freepik.com/premium-photo/instagram-logo-neon-light-instagram-glow-dark_609989-1401.jpg?w=740" alt="" width="30px" height="30px" />
            </Link>
            <Link to="https://www.facebook.com/profile.php?id=100062160074086&mibextid=ZbWKwL">
              <img src="https://i.pinimg.com/originals/2e/3d/34/2e3d345716543c0988555dc2070844b6.jpg" alt="Facebook" width="30px" height="30px" />
            </Link>
            <Link to="https://x.com/i/flow/login?redirect_after_login=%2Fparasmaldugad">
              <img src="https://img.freepik.com/premium-vector/twitter-neon-logo-twitter-icon-social-media-icons-realistic-twitter-app-set-logo-vector-zaporizhzhia-ukraine-july-24-2021_399089-2010.jpg?w=740" alt="Twitter" width="30px" height="30px" />
            </Link>
            <Link to="https://api.whatsapp.com/send/?phone=8097087386&text=Advance+Yoga+By+Parasmal+Dugad&app_absent=0">
              <img src="https://static.vecteezy.com/system/resources/previews/023/986/631/non_2x/whatsapp-logo-whatsapp-logo-transparent-whatsapp-icon-transparent-free-free-png.png" alt="WhatsApp" width="30px" height="30px" />
            </Link>
          </div>
          <div className="bg-gray-950 h-20 text-white">Copyright © 2014-2024 Abhishek pal & Ramnarayan 😊😊 – All Rights Reserved</div>
        </footer>
      </ContactContainer>
    </>
  );
};

export default Contact;


/* Styled Components (Tailwind Look) */
const ContactContainer = styled.div`

height: 85vh;
width: 100%;
background: #030b04;

footer{
  background: black;
  color: wheat;
  text-align: center;
  height: 20%;
  gap: 10px;
  display: flex;
  align-items: center;
justify-content: center;
  flex-direction: column;
  
}

.link{
  display: flex;
  gap: 20px;
}

 
`;


 

 
    

 
  


    

   
const  MainContainer=styled.div`

  display: flex;
  height: 80%;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  /* margin-top: 100px; */
  padding-top: 100px;
  .leftcontact{
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 60px;
    align-items: center;
    
  }
  

  .rightcontact{
   height: 100%;
   width: 50%;
  }
  .box{
    
    border-radius: 50px;
background: #112308;
box-shadow:  20px 20px 0px #000000,
             -20px -20px 0px #397822;
             width: 300px;
             height: 400px;
  }
  .rightcontact form{
    display: flex;
    flex-direction: column;
   
    text-align: center;
    /* margin-top: 10px; */
    justify-content: center;
    align-items: center;
    
  } 
  .rightcontact form input{
    height: 40px;
    /* margin-top: 10px; */
    width: 90%;
    
  }
   .rightcontact form label{
    margin-top: 15px;
   }
  .rightcontact form textArea{
    height: 80px;
    width: 90%;
  }
  .rightcontact button{
    background: #0bd039;
    margin-top: 15px;
    height: 40px;
    width: 100px;
    border-radius: 10px;
    border: none;
  }

  @media (max-width: 700px) {
    flex-direction: column ;
    .rightcontact{
      height: 70%;
      width: 100%;
      align-items: center;
      
    }
    .box{
     
      margin: 0 auto;
    }
    .leftcontact{
      height: 30%;
      width: 100%;
    }

  }
   

  
`;


