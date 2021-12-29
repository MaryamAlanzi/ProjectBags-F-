import React from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ token, setToken,Admin,setAdmin }) {
  console.log("token");
console.log("adminnn", Admin)

  return (
    <div className="to">
      {(token) ? (
        <ul>
          <Link to="/login" onClick={() => {setToken("") 
           setAdmin("");  }}   >تسجيل خروج </Link>

          {Admin == "Maryam.com" ?  <Link to="/Bags">المتجر الالكتروني للشنط </Link>:""}
          <Link to="/Home"  >  الرئيسية </Link>
          {Admin == "Maryam.com" ?   < Link to="/Add">أضافه منتج </Link>:""}  
          <Link to="/Home">أخبارنا </Link>
          <Link to="/UserBag">  المتجر </Link>
        </ul>
      ):(
        <ul>
          <Link to="/login"  onClick={() => {   setToken(); }}  > تسجيل دخول </Link>

        </ul>
      )} 
    </div>
  );
}


