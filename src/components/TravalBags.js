import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./TravalBags.css";

export default function TravalBags({ token }) {
  const [Bags, setBags] = useState([]);
  const { id } = useParams();
  const history = useHistory();

  useEffect(async () => {
    console.log("oooo");

    const res = await axios.get("http://localhost:5000/TBags", {});
    setBags(res.data);
    console.log(res.data, "oooo");
  }, []);

  const goT = (id) => {
    console.log("hiiii");
    history.push(`/TravalBag/${id}`);
  };

  return (
    <div class=".flex-container ">
       <div class="Bags">


      {Bags.map((element) => {
        console.log(element);
        return (
          <div class="grid-item">
            <img
              src={element.img}
              alt="..."
              style={{ width: "100%" }}
              onClick={() => {
                goT(element._id);
              }}
            />
            <br />
            <br />
            <b>اسم الشنطه : {element.name}</b>
            <p>لون الشنطه :{element.color}</p>
            <p>وصف :{element.description} </p>
            <p>ر.س {element.price} </p>
          </div>
        );
      })}
    </div>
    </div>
  );
}

