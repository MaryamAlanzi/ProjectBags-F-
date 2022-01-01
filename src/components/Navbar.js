import React from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ token, setToken, Admin, setAdmin }) {
  console.log("token");
  console.log("adminnn", Admin);

  return (
    <div className="to">
      {token ? (
        <ul>
          <li>
            <Link
              to="/login"
              onClick={() => {
                setToken("");
                setAdmin("");
              }}
            >
              تسجيل خروج{" "}
            </Link>
          </li>
          <li>
            {Admin == "Maryam.com" ? (
              <Link to="/Bags">المتجر الالكتروني للشنط </Link>
            ) : (
              ""
            )}{" "}
          </li>
          <li>
            {" "}
            <Link to="/Home"> الرئيسية </Link>
          </li>

          <li>
            {Admin == "Maryam.com" ? <Link to="/Add">أضافه منتج </Link> : ""}{" "}
          </li>
          <li>
            <Link to="/Home">أخبارنا </Link>
          </li>
          <li>
            <Link to="/UserBag"> المتجر </Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
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
          </li>
        </ul>
      )}
    </div>
  );
}
