import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

export default function AddBook({ token }) {
  const [newname, setneme] = useState("");
  const [newprice, setprice] = useState("");
  const [Updet, setupdet] = useState([]);
  const { id } = useParams();
  console.log("iddddd", id);

  const updetname = (e) => {
    setneme(e.target.value);
  };
  const updeprice = (e) => {
    setprice(e.target.value);
  };

  const UpdeteBags = async (id) => {
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
    <div>
      <br />
      <br />
      <br />
      <input
        onChange={(e) => {
          updetname(e);
        }}
        type="text"
        placeholder="   الاسم  "
      ></input>

      <br />
      <br />
      <br />
      <input
        onChange={(e) => {
          updeprice(e);
        }}
        type="text"
        placeholder=" السعر "
      ></input>
      <br />

      <button
        onClick={() => {
          UpdeteBags(id);
        }}
      >
        تعديل الشنط{" "}
      </button>
    </div>
  );
}
