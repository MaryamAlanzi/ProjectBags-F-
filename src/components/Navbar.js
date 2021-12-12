import React from 'react'
// import { NavLink,Link } from 'react-router-dom'
import { Link  } from "react-router-dom";
import "./Navbar.css"


export default function Nav({ token, setToken }) {

    return (
  
      <div  class="topnav">
      {token ? (
        <ul>
      
          <li>
    <Link to="/login" onClick={() => {setToken("")      
     localStorage.setItem("token",JSON.stringify(""))
 }}>تسجيل خروج</Link>
 
              <Link   to="/bag">متجرنا </Link>
              
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link className="link" to="/login"  onClick={() =>{setToken()}}> تسجيل دخول </Link>

          </li>
        
        </ul>
        
        
      )}


    </div>
 

    )
}

