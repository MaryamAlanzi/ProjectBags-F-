import React from 'react'

import { Link  } from "react-router-dom";
import "./Navbar.css"


export default function Navbar({ token, setToken }) {

    return (
  
      <div  className="to">
      {token ? (
        <ul>
      
          
    <Link to="/login" onClick={() => {setToken("") }}>     
   تسجيل خروج</Link>


              <Link   to="/Bags">المتجر الالكتروني للشنط </Link>
              <Link to="/Home" onClick={() =>{setToken()}} >الرئيسية </Link>
          
        </ul>
      ) : (
        <ul>
          
            <Link to="/login" className="link"   onClick={() =>{setToken()}}> تسجيل دخول </Link>
<li  >أخبارنا </li>
 <li>العثور على المتجر</li>
<li>قائمة تمنياتي</li>
      
        
        </ul>
        

        
        
      )}


    </div>
 

    )
}

