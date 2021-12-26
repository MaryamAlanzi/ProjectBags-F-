import React, { useState } from "react";
import axios from "axios";


export default function Add({token}) {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [img, setImg] = useState("")
    const [color, setcolor] = useState("")
    const [price, setprice] = useState("")
    

     console.log("token");

    const changeNameVal = (m) => {
        setName(m.target.value);
        console.log(name);
      };
      const changedescriptioVal = (e) => {
        setDescription(e.target.value);
      };
      const changeimgVal = (e) => {
        setImg(e.target.value);
      };
      const changeColorVal = (e) => {
        setcolor(e.target.value);
      };
      const changepriceVal = (e) => {
        setprice(e.target.value);
      };


      const addBags = async ()=>{
        const result = await axios.post( "http://localhost:5000/Bags", 

           {newname:name, newcolor:description,newimg:img, newdescription:color,newprice:price },
         { headers: { authorization: `Bearer ${token}` }},

       );
    
        console.log("result",result.data)
        
    }

  return (
        <div>
            

            <input onChange={(x) => { changeNameVal(x); }}    placeholder="name"/>
            <br/>
            <br/>
            <input onChange={(e) => { changeColorVal(e); }}     placeholder="color"/>
            <br/>
            <br/>
            <input onChange={(e) => { changedescriptioVal(e); }}     placeholder="description"/>
            <br/>
            <br/>
            <input onChange={(e) => { changeimgVal(e); }}     placeholder="img"/>
            <br/>
            <br/>
            <input onChange={(e) => { changepriceVal(e); }}    placeholder="price"/> <br/>
            <br/>

            <button onClick={(e) => {  addBags();  }}type="submit"> إضافة شنطه </button>

        </div>
    )
}