import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./Bags.css";

export default function Bags({}) {
  const [Bags, setBags] = useState([]);
  const [valueInput, setvalueInput] = useState("");
  const [name, setneme] = useState("");
  const [img, setimg] = useState("");
  const [descripion, setdescripion] = useState("");
  const [url, seturl] = useState("");
const [updet, setupdet] = useState([])
const { id } = useParams();
const history = useHistory();
console.log("iddd", id);






  useEffect(async () => {
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/Bags`, {});
    setBags(res.data);
  }, []);

  const deleteBags = async (id, index) => {
    const deletedBags = await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/Bag/${id}`,
      {}
    );
    console.log(deletedBags.data);
    // {_id: '61c50624303cb41b0d9f5ca2', name: 'coach', color: 'brown', description: 'مصنوعه من الجلدالاصلي', img: 'https://cdn.salla.sa/dleaa/LwVJX5el3fOyRm9A2BbliGYtODHPV4n7uQxpp5dx.jpg', …}
    if (deletedBags.data === "deleted") {
      const Bagscopy = [...Bags];
      Bagscopy.splice(index, 1);
      setBags(Bagscopy);
    }
  };

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
      <div  id="serch">
        <input id="input"
          onChange={(e) => {
            setvalue (e);
          }}
          type="text"
          className="se"
          placeholder="اسم الشنطه"
        />
        <button   className="btn"  onClick={serch}> بحث</button>
      </div>

      <div id="card" >
        {Bags.map((element, i) => {
          console.log(element);
          return (
            <div>
              <div className="bags">
          
                <div class="di">
                  <div  className="card-body">
                  <h4  className="card-title">
                  <img
                  onClick={() => {
                    goToBag(element._id);
                  }}
                  src={element.img}className="card-img-top"
                  alt="..."
                  style={{ width: "100%" }}
                />
                    <b>اسم الشنطه : {element.name}</b>
                  </h4 >
                  <p className="card-text">لون الشنطه :{element.color}</p>
                  <p className="card-text">وصف :{element.description} </p>
                  <p className="card-text">ر.س {element.price} </p>


                  <button className="btn"
                    onClick={() => {
                      deleteBags(element._id, i);
                    }}
                  >
                   حذف
                  </button>
                </div>
                
              </div>
            </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
