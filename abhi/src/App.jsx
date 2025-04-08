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


function App() {

  const location = useLocation();
 
  

  return (

    <>
   
    <Navbar/>
    {/* {(location?.pathname == '/shopping' || location?.pathname == "/blog/flower") && (
      <ShopNav />
    )} */}
      <Routes>
        <Route path='/' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/information" element={<Infromation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shopping" element={<Shopping/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/flower" element={<Folwershop />} />
        
      </Routes>

    </>
  )
}

export default App
