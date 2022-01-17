import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TravalBags.css";

export default function TravalBags({ token }) {
  const [Bags, setBags] = useState([]);

  useEffect(async () => {
    const res = await axios.get("http://localhost:5000/TBags", {});
    setBags(res.data);
  }, []);

  const deleteTravalBags = async (id, index) => {
    const deleteTravalBags = await axios.delete( `http://localhost:5000/deleteTravalBags/${id}`,
      {}
    );
    if (deleteTravalBags.data === "deleted") {
      const Bagscopy = [...Bags];
      Bagscopy.splice(index, 1);
      setBags(Bagscopy);
      console.log(deleteTravalBags.data);
    }
  };

  return (
    <div class="grid-container">
    



      <div id="input">
      <div class=" Bags:hover  ">
        {Bags.map((element, i) => {
          console.log(element);
          return (
            <div class="grid-item">
              <img src={element.img} alt="..." style={{ width: "100%" }} />
              <br />
              <br />
                
                <div class=" .flex-container  ">
              <b>اسم الشنطه : {element.name}</b>

              <p>لون الشنطه :{element.color}</p>
              <p>وصف :{element.description} </p>
              <p>ر.س {element.price} شامل ضريبة القيمة المضاف</p>

              <button
                onClick={() => {
                  deleteTravalBags(element._id, i);
                }}
              >
                {" "}
                حذف
              </button>
            </div>
            </div>
          );
        })}
        
  
      </div>
      
    </div>
   
    </div>
      
  );
}
