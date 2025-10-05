import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import context from "../../../context/Context";
import { useContext } from "react";

const Signup = () => {

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate(); 
  
const {setName} = useContext(context);
  const handelSubmit = (e) => {
    
    e.preventDefault();

  axios
      .post("http://localhost:8000/api/v1/users/register", { name, email, password },  { withCredentials: true })
      .then((result) => {
       const token=  result.data?.data?.accessToken
       if(token){
     localStorage.setItem("accessToken",token)
       }
        setName(name)
     
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      
      });
  };

  return (
    <>
      <div className="Loginmain">
        <div className="login">
          <form onSubmit={handelSubmit} className="loginFrom">
            <h1>Signup</h1>
            <input
              placeholder="Name"
              value={name}
              type="text"
              name="name"
              required
              onChange={(e) => setname(e.target.value)}
            />
            <input
              placeholder="email"
              value={email}
              required
              name="email"
              type="email"
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              type="password"
              required
              style={{color:""}}
              value={password}
              name="password"
              placeholder="password"
              onChange={(e) => setpassword(e.target.value)}
            />
            
            <button type="submit">Submit</button>
          </form>
             <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px",marginTop:"20px",marginBottom:"20px"}}>

          <p>Already have an account?</p>
          <Link to="/login">
            <button className="btn">Login</button>
          </Link> </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
