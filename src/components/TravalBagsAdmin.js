import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TravalBags.css";

export default function TravalBags({ token }) {
  const [Bags, setBags] = useState([]);

  useEffect(async () => {
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/TBags`, {});
    setBags(res.data);
  }, []);

  const deleteTravalBags = async (id, index) => {
    const deleteTravalBags = await axios.delete( `${process.env.REACT_APP_BACKEND_URL}/deleteTravalBags/${id}`,
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
    <div >
    



      <div className="bags">
      <div  id="card">
        {Bags.map((element, i) => {
          console.log(element);
          return (

            <div className="bags">
              <div  className="card-body">
                  <h4  className="card-title">



              <img src={element.img}className="card-img-top"     alt="..." style={{ width: "100%" }} />
              <br />
              <br />
                
                
              <b className="card-text">اسم الشنطه : {element.name}</b></h4>
              
                 

              <p >لون الشنطه :{element.color}</p>
              <p >وصف :{element.description} </p>
              <p >ر.س {element.price} شامل ضريبة القيمة المضاف</p>

              <button className="btn"
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
