import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function UserBag({}) {
  const [Bags, setBags] = useState([]);
  const [valueInput, setvalueInput] = useState("");

  const history = useHistory();

  useEffect(async () => {
    const res = await axios.get("http://localhost:5000/Bags", {});
    setBags(res.data);
  }, []);

  const goToBag = (id) => {
    history.push(`/Bag/${id}`);
  };
  function setvalue(e) {
    setvalueInput(e.target.value);
  }

  function serch() {
    let newArr = Bags.filter((item) => item.name == valueInput);
    setBags(newArr);
  }
  return (
    <>
      <div id="serch">
        <input
          id="input"
          onChange={(e) => {
            setvalue(e);
          }}
          type="text"
          placeholder="اسم الشنطه"
        />
        <button className="btn" onClick={serch}>
          {" "}
          بحث
        </button>
      </div>

      <div id="card">
        {Bags.map((element, i) => {
          console.log(element);
          return (
            <div>
              <div id="cc">
                <div class="">
                  <div className="card-body">
                    <h4 className="card-title">
                      <img
                        onClick={() => {
                          goToBag(element._id);
                        }}
                        src={element.img}
                        className="card-img-top"
                        alt="..."
                        style={{ width: "100%" }}
                      />
                      <b>اسم الشنطه : {element.name}</b>
                    </h4>
                    <p className="card-text">لون الشنطه :{element.color}</p>
                    <p className="card-text">وصف :{element.description} </p>
                    <p className="card-text">
                      ر.س {element.price} 
                    </p>
                 
                 
               
                  </div>
                </div>{" "}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
