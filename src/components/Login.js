import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
// تربط بين الباك والفورنت
import "./Login.css";

export default function Login({ setToken }) {
  const [email, setemail] = useState("");
  const [sara, setPassword] = useState("");
  const history = useHistory();

  const changeEmail = (e) => {
    setemail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const checkLogin = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post("http://localhost:5000/Login", {
        e: email,
        p: sara,
      });
      console.log(response.data.token);
      setToken(response.data.token);
      history.push("/Bags");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className="form">
        <h2>تسجيل الدخول </h2>

        <div className="control">
          <label>بريد إلكتروني</label>
          <input
            onChange={(e) => {
              changeEmail(e);
            }}
            placeholder="Enter eamil"
          />
        </div>

        <div className="control">
          <label>كلمة المرور</label>
          <input
            onChange={(e) => {
              changePassword(e);
            }}
            placeholder="Enter passowrd"
          />
        </div>

        <button type="submit" onClick={checkLogin}>دخول</button>
      </form>
    </div>
  );
}
