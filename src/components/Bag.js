import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import{FaShoppingCart} from "react-icons/fa"
import "./Bag.css"
import axios from "axios";

export default function Bag({ token,Admin }) {
  const { id} = useParams();
  const [bag, setbag] = useState([]);
  const [Commint, setCommint] = useState("");

  const history = useHistory();

console.log(Admin);

  useEffect(async () => {
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/Bag/${id}`, {
      headers: { authorization: `Bearer ${token}` },
    });
    console.log("id", id);
    setbag(res.data);
    console.log("aaaa", res.data);
  }, []);


  const addcart = async () => {
    
    try { const result = await axios.post( `${process.env.REACT_APP_BACKEND_URL}/addcart/${id}`,
 {},
        {
          headers: { authorization: "Bearer " + token },
        }
      );
      console.log(result.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  


  const AddBagCommint = async () => {
    console.log("commmmmint");
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/BagCommint/${id}`,
        {
          Commint: Commint,
        },
        { headers: { authorization: "Bearer " + token } }
      );
      console.log("mmmmmm" , result.data);
      setbag({...bag, Commint: result.data });
      console.log("don");
    } catch (err) {
      console.log(err);
    }
  };




  const changeCommint = (e) => {
    setCommint(e.target.value);
  };


  const deleteBagCommint =async (Commint)=>{
    try {
        const result = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/${id}`,

        {Commint:Commint},
        {headers: { authorization: "Bearer " + token }})
        console.log(result.data);
        setbag({...bag , Commint:result.data})
        } catch (err) {
            console.log(err.res.data,"error");
        }
    }
    



  return (
    <div className="di">
      <img className="amge" src={bag.img} alt="..." />
      <h1 >{bag.name}</h1>
      <h1 > وصف :{bag.description}</h1>
      <h1>لون الشنطه {bag.color} </h1>

      
      <h1>
      
        {" "}
       <p className="card-text">ر.س.  {bag.price}  </p> 
      </h1>

      {Admin == "Maryam.com" ?
      <button className="btn" id="put" onClick={() => {history.push(`/Updet/${id}`); }}> تعديل </button>:""}

     
      <input id="input"
            onChange={(e) => {
              changeCommint(e);
            }}
            type="text"
            
          />
          <button className="btn"
            onClick={() => {
              AddBagCommint();
            }}
          >
            اضف تعليق
          </button> 
          {bag.Commint && bag.Commint.map((elm, i) => {
                return (
 <div key={i}>
                    <p> {elm.userName}</p>
                    <p>{elm.Commint}</p>
                     <button className="btn"   id="put"    onClick={()=>{deleteBagCommint(elm.comment)}}>delet </button> 

                   </div>
               );
              })} 
      {Admin != "Maryam.com" ?
      <button className="btn"
      // style={{ width: "100%" }}
       
        onClick={() => {
          addcart();
        }}
        سله التسوق
        type="submit"
      >
        <FaShoppingCart/>
        </button>
        
:"" }

    </div>
  );
}
