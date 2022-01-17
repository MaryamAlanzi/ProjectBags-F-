import React from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ token, setToken, Admin, setAdmin }) {
  console.log("token");
  console.log("adminnn", Admin);

  return (
    <div class="topnav">
      {token ? (
        <ul>
          
            <Link 
              to="/login"
              onClick={() => {
                setToken("")
              }}
            >
              تسجيل خروج{" "}
            </Link>
          
        
       
          
          {Admin != "Maryam.com" ?
            <Link to="/TravalBags"> شنط السفر </Link>
:""}
          

         

             
             {Admin == "Maryam.com" ? (
               <Link to="/TravalBagsAdmin"> شنط السفر </Link>

             ) : (
               ""
             )}
           
           
            {Admin == "Maryam.com" ? <Link to="/adds">أضافه شنط السفر </Link> : ""}
          
           
            {Admin == "Maryam.com" ? (
              <Link to="/Bags">شنط </Link>
            ) : (
              ""
            )}
          
          
            {Admin == "Maryam.com" ? <Link to="/Add">أضافه شنط </Link> : ""}
          
        
          
          {Admin != "Maryam.com" ? 

            <Link to="/UserBag"> شنط </Link>
         :"" }
          
          
            
            <Link to="/Home"> الرئيسية </Link>
          
          
          {Admin != "Maryam.com" ? 
            <Link to="/Cart"> سله التسوق </Link>:"" }
            
         
        </ul>
      ) : (
        <ul>
          
            {" "}
            <Link
              to="/login"
              onClick={() => {
                setToken();
              }}
            >
              {" "}
              تسجيل دخول{" "}
            </Link>
          
        </ul>
      )}
    </div>
  );
}
