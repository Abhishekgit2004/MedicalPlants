import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from './component/Home/Home'
import Navbar from './component/Navbar/Navbar'
import About from './component/About/About'
import Blog from './component/Blog/Blog';
import Shopping from './component/Shopping/Shopping';
import Contact from './component/Contact/Contact';
import Infromation from './component/Info/Infromation';
import Folwershop from './component/Shopping/Folwershop';
import ShopNav from './component/Shopping/ShopNav';
import Signup from './component/Navbar/Login/Signup';
import Login from './component/Navbar/Login/Login';
import ProtectedRoutes from './context/protectedRoutes';
import { Toaster } from 'react-hot-toast';


function App() {

  const location = useLocation();
 
  

  return (

    <>
    <Navbar />
      <Toaster position="top-center" reverseOrder={false} /> {/* only here */}

   
      <Routes>
        <Route path='/' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
      
        <Route path="/home" element={   <ProtectedRoutes>  <Home /> </ProtectedRoutes>} />
        <Route path="/about" element={<About />} />
        <Route path="/information" element={<ProtectedRoutes><Infromation /></ProtectedRoutes>} />
        <Route path="/contact" element={<ProtectedRoutes><Contact /></ProtectedRoutes>} />
        <Route path="/shopping" element={<ProtectedRoutes><Shopping/></ProtectedRoutes>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/flower" element={<ProtectedRoutes><Folwershop /></ProtectedRoutes>} />
        
      </Routes>

    </>
  )
}

export default App
