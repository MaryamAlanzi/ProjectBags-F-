import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
// تربط بين الباك والفورنت
import "./Login.css";

export default function Login({ setToken,setAdmin }) {
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
        pp: sara,
      });
      if (response.data.token){
        console.log(response.data.token);
        setToken(response.data.token);
        console.log(response.data.Admin,"jgjgjgj");
        setAdmin(response.data.Admin);
        console.log("hgghhghjhj",response.data.token);
        history.push("/UserBag");
      }
      if (response.data.Admin){
        console.log(response.data.Admin);
        setAdmin(response.data.Admin);
        history.push("/Bags");
      }






      
    }
    
    
    catch (error) {
      console.log(error);
    }
  };

  return (
    <div class="container">
      <form id="form" class="form">
        <h2>تسجيل الدخول </h2>

        <div  class="form-control">
          
          <label for="email">بريد إلكتروني</label>
          <input
            onChange={(e) => {
              changeEmail(e);
            }}
            placeholder="Enter eamil"
          />
        </div>

        <div  class="form-control">
          <label for="passowrd">كلمة المرور</label>
          <input
            onChange={(e) => {
              changePassword(e);
            }}
            placeholder="Enter passowrd"
          />
        </div>
        <form  class="form-control">
        <button type="submit" onClick={checkLogin}>دخول</button>
      </form>
      </form>
    </div>
  );
}
