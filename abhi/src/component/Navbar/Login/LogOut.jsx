import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { CgProfile } from "react-icons/cg";
// import "./Logout.css"


const LogOut = () => {

    const navigate=useNavigate()
      const handleLogout=async()=>{
    
     try {
     const response= await axios.post(
      "http://localhost:8000/api/v1/users/logout",
      {},                
      { withCredentials: true } )
    console.log(response)
      if(response?.data?.statusCode==200){
        console.log(response?.data?.message)
        navigate("/login")
        // setname("??")
        localStorage.removeItem("accessToken")
        toast.success(response.data.message)
    
      }
    } catch (error) {
      console.log(error)
      toast.error(error?.message)
    }
    
    
    
      }
  return (
       <button
      onClick={handleLogout}
      style={{
        border: "none",
        background: "transparent",
        color: "#B45253",
        display: "flex",
        alignItems: "center",
        fontSize: "40px",
        fontWeight: 700,
        cursor: "pointer",
        position: "relative",
      }}
    >
      <CgProfile />
      <span
        style={{
          marginLeft: "10px",
          opacity: 0,
          transition: "opacity 0.3s",
          fontSize: "18px",
          fontWeight: 500,
          whiteSpace: "nowrap",
          color:"white",
        }}
        className="logout-text"
      >
        Logout
      </span>
      <style>
        {`
          button:hover .logout-text {
            opacity: 1;
          }
        `}
      </style>
    </button>

  )
}

export default LogOut