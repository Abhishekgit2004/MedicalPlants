import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import "./LoginSig.css"
import { toast, ToastContainer } from 'react-toastify';
import context from '../../../context/Context';

// import Login from './Signup'

const Login = () => {
    const notify = () => toast.success("Login succesfully");
    const fail = () => toast.error("Login fail");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
const navigate=useNavigate()

const {setName} = useContext(context); //be use karna hai to yha se le skta hai ye line ka use kake ye set karne ke liye hai fun hai?



const handelSubmit=async (e) =>{
    e.preventDefault();
   
   await axios.post("http://localhost:3000/login",{email,password})
    .then(result=>{console.log(result)
      console.log(result)
      if(result){//done ye name  pura global pass kiya
        console.log(result.name);
        setName(result.data);
        // yha pe koi data return nhi kar rha hai kya backend se kar rha hai
      navigate("/home")
      notify()
      }else{
        fail()
      }
    })
    .catch(err=>console.log(err))

}
  return (
    <div className="Loginmain">
      <ToastContainer/>
 <div className='login'>
    <form action="" className='loginFrom' onSubmit={handelSubmit} >
        <h1>Login</h1>
        <input placeholder='email' required type="email" onChange={(e)=>setemail(e.target.value)} />
       <input type="password" required placeholder='passward' onChange={(e)=>setpassword(e.target.value)}/>
       <button type='submit'to="">submit </button>
    </form>
   
    <p>already have accout</p>
  <Link to="/"> <button  className='btn'>signup</button> </Link> 
    </div>
</div>
  )
}

export default Login