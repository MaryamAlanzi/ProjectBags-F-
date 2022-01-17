import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiTwotoneDelete } from "react-icons/ai";
import { GiReturnArrow } from "react-icons/gi";
import "./Cart.css";
// import { useParams } from "react-router-dom";

export default function Cart({ token }) {
  const [Bags, setBags] = useState([]);
  const [TravalBags, setTravalBags] = useState([]);
  const [toggel, settoggel] = useState(true);

  useEffect(async () => {
    try {
      if (token) {
        const reult = await axios.get("http://localhost:5000/getcart", {
          headers: { authorization: "Bearer " + token },
        });
        setBags(reult.data);
        console.log(reult.data, ":ff");
      }
    } catch (error) {
      console.log(error.response.data);
    }
  }, []);

  useEffect(async () => {
    try {
      if (token) {
        const reult = await axios.get("http://localhost:5000/getcartt", {
          headers: { authorization: "Bearer " + token },
        });
        setTravalBags(reult.data);
        console.log(reult.data, ":ee");
      }
    } catch (error) {
      console.log(error.response.data);
    }
  }, []);

  const removcart = async (id, i) => {
    const res = await axios.delete(`http://localhost:5000/removcart/${id}`, {
      headers: { authorization: "Bearer " + token },
    });
    const copy = [...Bags];
    copy.splice(i, 1);
    setBags(copy);
  };

  const deleteCart = async (id,i) => {
    const res = await axios.delete(`http://localhost:5000/deleteToTraval/${id}`, {
      headers: { authorization: "Bearer " + token },
    });
    const copy = [...TravalBags]
    copy.splice(i,1)
    setTravalBags(copy);
  };

  const changeTpgle = () => {
    settoggel(!toggel);
  };

  return (
    <>
      <button
        className="toogel"
        onClick={() => {
          changeTpgle();
        }}
      >
        <GiReturnArrow />
      </button>
      <div className="cards">
        {toggel === true
          ? Bags.map((element, i) => {
              console.log(element, "hhhhhiiii");
              return (
                <div>
                  <img src={element.img} alt="..." />
                  {console.log(element.img)}
                  <b>اسم الشنطه : {element.name}</b>
                  <p>س.ر{element.price} </p>

                  <button
                    onClick={() => {
                      removcart(element._id, i);
                    }}
                  >
                    {" "}
                    <AiTwotoneDelete />
                  </button>

       
                </div>
              );
            })
          : (TravalBags.map((element, i) => {
              console.log(element, "hhhhhiiii");
              return (
                <div>
                  <img src={element.img} alt="..." />
                  {console.log(element.img)}
                  <b>اسم الشنطه : {element.name}</b>
                  <p>س.ر{element.price} </p>

                  <button
                    onClick={() => {
                      deleteCart(element._id, i);
                    }}
                  >
                    {" "}
                    <AiTwotoneDelete />
                  </button>

                </div>
              );
            }))}
      </div>
    </>
  );
}

