import React from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ token, setToken }) {
  console.log("token");
  return (
    <div className="to">
      {/* {token ? ( */}
        <ul>
          <Link to="/login" onClick={() => {setToken("");  }} >تسجيل خروج </Link>

          <Link to="/Bags">المتجر الالكتروني للشنط </Link>
          <Link to="/Home" onClick={() => {  setToken(); }} >  الرئيسية </Link>
          <Link to="/Add">أضافه منتج </Link>
          <Link to="/Home">أخبارنا </Link>
          <Link to="/Home">العثور على المتجر </Link>
          

        </ul>
      {/* ) : (
        <ul>
          <Link to="/login" className="link" onClick={() => {   setToken(); }}  > تسجيل دخول </Link>

        </ul>
      )} */}
    </div>
  );
}
