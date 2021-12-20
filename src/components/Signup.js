  // الرياكت نستخدمها بالفرونت واستخدمنا اليوزستيت عشان استخدم الاستيت  
import React, { useState } from "react";
import axios from "axios";
// استخدمت الاكسيوس للربط بين الباك والفرونت 
import { useHistory } from "react-router-dom";
// استخدمت اليوز هوستري عشان النقل بين الصفحات
import "./Signup.css"

export default function Signup() {
// عرفناكونست نيم وست نيم لتعديل قيمه النيم  واليوزستيت عشان االاستيت 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [huda, setPassword] = useState("");
  const history = useHistory();
// عرفت كونست هوستري


// فنكشن ياخذ قيمه النيم
  const changeName = (e) => {
    setName(e.target.value);
  };
// فنكشن ياخذ قيمه الايميل
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
// فنكشن ياخذ قيمه الباسورد                                                     
  const changePassword = (e) => {
    setPassword(e.target.value);
  };


// كونست يسجل الدخول للساين يسجل النيم والايميل والباسورد
  const addsignup = async () => {
      console.log({
        name: name,
        email: email,
        x: huda,
      });
      //{name: 'hanan', email: 'hanan@hotmail.com', password: '1111'}
  // عرفت متغير جديد يجيب البيانات من الباك عن طريق الاكسيس
    const response = await axios.post("http://localhost:5000/Signup", {
      name: name,
      email: email,
      x: huda,
    });

    // شرط اف  نفس الرقم 
    if (response.status === 201){
        history.push("/login")
        // استخدمت الهوستري .بش عشان توديني لصفحه اللوقن 
    }
  };
  return (
     



      <div1 className="container">
        
            
            <div className="control">
                <label >اسم المستخدم </label>

                {/* انبت  لليوزر نيم */}

                <input  onChange={(e) => {  changeName(e); }}   placeholder="Enter username" />
            </div>


            <div className="control">
                <label >بريد إلكتروني</label>
{/* انبت للايميل  */}
                <input onChange={(e) => { changeEmail(e); }}   placeholder="Enter eamil" />
            </div>


            <div className="control">
                <label >كلمة المرور</label>
                {/* انبت للباسورد */}
                <input onChange={(e) => {    changePassword(e);  }}   placeholder="Enter passowrd" />
            </div>

          {/* بتن للسجل بساين اب  */}
            <button onClick={() => {  addsignup();  }} >سجل</button>
        
    </div1>



      
    
    
  );
}

