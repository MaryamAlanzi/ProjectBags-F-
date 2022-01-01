import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import axios from "axios";

export default function Bag({ token }) {
  const { id } = useParams();
  const [bag, setbag] = useState([]);
  const history = useHistory();

  useEffect(async () => {
    const res = await axios.get(`http://localhost:5000/Bag/${id}`, {
      headers: { authorization: `Bearer ${token}` },
    });
    console.log("id", id);
    setbag(res.data);
    console.log("aaaa", res.data);
  }, []);

  return (
    <div>
      <img className="imgBag" src={bag.img} alt="..." />
      <h1 className="card-text">{bag.name}</h1>
      <h1 className="card-text"> وصف :{bag.description}</h1>
      <h1 className="card-text">لون الشنطه {bag.color} </h1>
      <button className="btn"  onClick={() => {history.push(`/Updet/${id}`); }}> تعديل </button>

      <h1>
      
        {" "}
       <p className="card-text">ر.س.  {bag.price} شامل ضريبة القيمة المضافة </p> 
      </h1>
    </div>
  );
}
