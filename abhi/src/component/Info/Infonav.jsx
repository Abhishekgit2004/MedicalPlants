import React from 'react'
import plant from "../../assets/Benifit.png"
import { useState } from 'react'
import "./Infonav.css"
import { data } from './Data'
// import styled from 'styled-components'


  const Infonav = () => {
    const [filteredData, setFilteredData] = useState(data);
  
    const Search=(e)=>{
      const search_value= e.target.value
      if(search_value===""){
        setFilteredData(null)
      }
    
      const filter=data?.filter((food)=>food.title.toLowerCase().includes(search_value.toLowerCase()))
      setFilteredData(filter)
      console.log(filteredData)
     
    }
   
  return (
   <>
   <div className="topnavinfo">
      <div className="image">
      <img src={plant} alt="" height={"30px"} width={"190px"} />
    </div>
    <div className="search">
    <input type="text" placeholder='Search Plants'onChange={Search}/></div>
   </div>



   <div className='information' >
      
      <div className="info1">{
      filteredData.map((f,i)=>(
       
        <div className="info" key={i}>
          <div className="infoleft">
            
          <h1>{f.title}</h1>
            <p>{f.description}</p>
            <h4>{f.Adventeage}</h4>
          </div>
        <div className="inforight">
          <img src={f.image} alt="" />
          </div>
          </div>
          
      ))
    }
    </div>
    </div>
   </>
  )
}

export default Infonav;