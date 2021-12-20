import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./Bags.css"

export default function Bags({ token }) {
  
  const [Bags, setBags] = useState([]);
  const [valueInput, setvalueInput] = useState("");
  const history = useHistory();

  useEffect(async () => {
    const res = await axios.get("http://localhost:5000/Bags", {
      headers: { authorization: `Bearer ${token}` },
    });
    setBags(res.data);
  }, []);

  const deleteBags = async (id, index) => {
    const deletedBags = await axios.delete(`http://localhost:5000/Bag/${id}`, {
      
    });
    console.log(deletedBags.data);
    if (deletedBags.data === "deleted") {
      const Bagscopy = [...Bags];
      Bagscopy.splice(index, 1);
      setBags(Bagscopy);
    }
  };

  // const goToBag  =(id)=>{
  //   history.push(`/Bag/${id}`);
  // }
  function setvalue(e) {
    let v = e.target.value;
    setvalueInput(v);
  }

  function serch() {
    let newArr = Bags.filter((item) => item.name == valueInput);
    setBags(newArr);
  }
  return (
    <>
      <div>

        <input
          onChange={setvalue}
          type="text"
          placeholder="اسم الشنطه"
        />
        <button onClick={serch}> بحث</button>
      </div>
      <div className="Bag">
</div>
      <div className="Bags">

        {Bags.map((element, i) => {
          console.log(element);
          return (
            <div className="Bag">
              <img className="imgBags" src={element.img} alt="..." />
              <div>
                <h4>أسم الشنطه : {element.name} </h4>
                <p>اللون :{element.color} </p>
                <p> وصفها :{element.description} </p>
                <p>السعر: {element.price} </p>
                <button
                  onClick={() => {
                    deleteBags(element._id, i);
                  }}
                >
                  {" "}
                  حذف{" "}
                </button>
              </div>
              
              <br /> <br />
            </div>
          );
        })}
      </div>
    </>
  );
}
