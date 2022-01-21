import React, { useState } from "react";
import axios from "axios";
import "./Adds.css"

export default function Adds({ token }) {
  const [Bags, setBags] = useState([]);
  const [Name, setName] = useState("");
  const [color, setcolor] = useState("");
  const [img, setimg] = useState("");
  const [price, setprice] = useState("");
  const [descripion, setdescripion] = useState("");

  

  const changeNameVal = (m) => {
    setName(m.target.value);
    console.log(Name);
  };
  const changedescriptioVal = (e) => {
    setdescripion(e.target.value);
  };
  const changeimgVal = (e) => {
    setimg(e.target.value);
  };
  const changeColorVal = (e) => {
    setcolor(e.target.value);
  };
  const changepriceVal = (e) => {
    setprice(e.target.value);
  };

  const addBags = async (e) => {
    e.preventDefault();
    
    const result = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/addTBags`,
      {
        newname: Name,
        newcolor: color,
        newimg: img,
        newdescription: descripion,
        newprice: price,
      },
      { headers: { authorization: `Bearer ${token}` } }
    );
    const copied = [...Bags];
    copied.push(result.data);
    setBags(copied);
    console.log("result", result.data);
  };

  

  return (
    <div class="container">
         <form className="form">

             <div className="control">
      <input
        onChange={(x) => {
          changeNameVal(x);
        }}
        placeholder="name"
      />
      <br />
          <br />

      <input
        onChange={(e) => {
          changeColorVal(e);
        }}
        placeholder="color"
      />
<br />
          <br />


      <input
        onChange={(e) => {
          changedescriptioVal(e);
        }}
        placeholder="description"
      />
<br />
          <br />

      <input
        onChange={(e) => {
          changeimgVal(e);
        }}
        placeholder="img"
      />
      <br />
          <br />

      <input
        onChange={(e) => {
          changepriceVal(e);
        }}
        placeholder="price"
      />
<br />
          <br />

      <button
        onClick={(e) => {
          addBags(e);
        }}
        type="submit"
      >
        اضافة شنطه سفر{" "}
      </button>
      <div class="grid-container">
    
     
          </div>
          </div>
          

          </form>
         
    </div>
    
  );
}
