import React, { useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

export default function Updet({ token, Admin }) {
  const [newname, setneme] = useState("");
  const [newprice, setprice] = useState("");
  const [updet, setupdet] = useState([]);
  const { id } = useParams();
  console.log("iddddd", id);
  console.log("Admin", Admin);

  const Updetname = (e) => {
    setneme(e.target.value);
  };
  const Updetprice = (e) => {
    setprice(e.target.value);
  };

  const UpdeteBags = async (id,e) => {
    e.preventDefault();
    try {
      console.log(id, "id");
      const Updet = await axios.put(
        `http://localhost:5000/Bags/${id}`,
        {
          newname,
          newprice,
        },
        {
          headers: { authorization: "Bearer " + token },
        }
      );
      setupdet(Updet.data);
      console.log(Updet.data, "Updet");
    } catch (error) {
      console.log("err", error);
    }
  };

  return (
    <div class="container">
      <form className="form">
        <div className="control">
      <br />
      <br />
      <br />
      {Admin == "Maryam.com" ? (
        <input
          onChange={(e) => {
            Updetname(e);
          }}
          type="text"
          placeholder="   الاسم  "
        ></input>
      ) : (
        ""
      )}

      <br />
      <br />
      <br />
      {Admin == "Maryam.com" ? (
        <input
          onChange={(e) => {
            Updetprice(e);
          }}
          type="text"
          placeholder=" السعر "
        ></input>
      ) : (
        ""
      )}
      <br />
      <br />

      <button
        onClick={(e) => {
          UpdeteBags(id,e);
        }}
      >
        تعديل الشنط{" "}
      </button>
      </div>
      </form>
      
    </div>
    
    
  );
}
