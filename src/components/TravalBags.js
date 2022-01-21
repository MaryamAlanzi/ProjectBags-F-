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

    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/TBags`, {});
    setBags(res.data);
    console.log(res.data, "oooo");
  }, []);

  const goT = (id) => {
    console.log("hiiii");
    history.push(`/TravalBag/${id}`);
  };

  return (
    <div>
       <div class="Bags">
       

      <div  id="div1">
      {Bags.map((element) => {
        console.log(element);
        return (
          <div className="bags">
          
                  <div  className="card-body">
                  <h4  className="card-title">



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
            <b className="card-text">اسم الشنطه : {element.name}</b>
            </h4>
            <p className="card-text">لون الشنطه :{element.color}</p>
            <p className="card-text">وصف :{element.description} </p>
            <p className="card-text">ر.س {element.price} </p>
          </div>
          </div>
          
          
        );
      })}
    
      </div>
    </div>
  
    </div>
    
  
  );
}

