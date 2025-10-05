import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import "./LoginSig.css"
import context from '../../../context/Context';
import Toaster from "react-hot-toast"
import { toast } from 'react-hot-toast';

// import Login from './Signup'

const Login = () => {
    const notify = () => toast.success("Login succesfully");
    const fail = () => toast.error("Login fail");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
const navigate=useNavigate()

const {setName} = useContext(context); //be use karna hai to yha se le skta hai ye line ka use kake ye set karne ke liye hai fun hai?

const handelSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "http://localhost:8000/api/v1/users/login",
      { email, password },
      { withCredentials: true } // for sending cookies if using refresh tokens
    );

    console.log(response);

    if (response.data?.statusCode === 201) {
      const user = response.data?.data?.user;
      const token = response.data?.data?.accessToken;
      toast.success("Successfully login")

      if (token) {
        localStorage.setItem("accessToken", token); // store access token
      }

      if (user?.name) {
        setName(user.name); // update state if needed
      }

      navigate("/home"); // redirect after successful login
    }
  } catch (error) {
    console.error("Login failed:", error);
  }
};

  return (
    <div className="Loginmain">
 
 <div className='login'>
    <form action="" className='loginFrom' onSubmit={handelSubmit} >
        <h1>Login</h1>
        <input placeholder='email' required type="email" onChange={(e)=>setemail(e.target.value)} />
       <input type="password" required placeholder='passward' onChange={(e)=>setpassword(e.target.value)}/>
       <button type='submit'to="">submit </button>
    </form>
   <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px",marginTop:"20px",marginBottom:"20px"}}>
    <p>Do not have an Account? </p>
  <Link to="/"> <button  className='btn'>signup</button> </Link> </div>
    </div>
</div>
  )
}

export default Login