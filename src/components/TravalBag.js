import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./Bag.css";
import axios from "axios";

export default function TravalBag({ Admin, token }) {
  const { id } = useParams();
  const [bag, setbag] = useState([]);
  const [Commint, setCommint] = useState("");


  console.log(Admin);

  useEffect(async () => {
    console.log("oooo");

    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/TravalBag/${id}`, {});
    setbag(res.data);
    console.log(res.data, "oooo");
  }, []);

  const addCart = async () => {
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/addToTraval/${id}`,
        {},
        {
          headers: { authorization: "Bearer " + token },
        }
      );
      console.log(result.data);
    } catch (error) {
      console.log(error.response.data);



    }
};


const AddBagCommint = async () => {
  console.log("commmmmint");
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/addTBagcommint/${id}`,
      {
        Commint: Commint,
      },
      { headers: { authorization: "Bearer " + token } }
    );
    console.log("mm" , result.data);
    setbag({...bag, Commint: result.data });
    console.log("don");
  } catch (err) {
    console.log(err);
  }
};

const changeCommint = (e) => {
  setCommint(e.target.value);
};

const deleteTBagCommint =async (Commint)=>{
  try {
      const result = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/delTBagcommint/${id}`,

      {Commint:Commint},
      {headers: { authorization: "Bearer " + token }})
      console.log(result.data);
      setbag({...bag , Commint:result.data})
      } catch (err) {
          console.log(err.res.data,"error");
      }
  }







  return (
    <div className="di">
      
      
      <img className="amge" src={bag.img} alt="..." />
      <h1 className="card-text">{bag.name}</h1>
      <h1 className="card-text"> وصف :{bag.description}</h1>
      <h1 className="card-text">لون الشنطه {bag.color} </h1>
      <h1>
        <p className="card-text">ر.س. {bag.price} </p>{" "}
      </h1>

      <input id="input"
            onChange={(e) => {
              changeCommint(e);
            }}
            type="text"
          />
          <button className="btn"
            onClick={() => {
              AddBagCommint();
            }}
          >
            اضف تعليق
          </button> 
          {bag.Commint && bag.Commint.map((elm, i) => {
                return (
 <div key={i}>
                    <p> {elm.userName}</p>
                    <p>{elm.Commint}</p>
                     <button className="btn" onClick={()=>{deleteTBagCommint(elm.comment)}}>delet </button> 

                   </div>
               );
              })} 





      {Admin != "Maryam.com" ? (
        <button  className="btn"
          onClick={() => {
            addCart();
          }}
          سله
          التسوق
          type="submit"
        >
          <FaShoppingCart />
        </button>
      ) : (
        ""
      )}
    </div>
    
  );
}
