import React,{useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Bag({token}) {
  const {id} = useParams()
  const [bag, setbag] = useState([])


  useEffect(async () => {
    const res = await axios.get(`http://localhost:5000/Bag/${id}`, {
    headers: { authorization: `Bearer ${token}`  },
    });
    console.log("id",id);
    setbag(res.data);
    console.log("aaaa",res.data);
    
  }, []);

  return (
    <div>
      
      <img className="imgBag" src={bag.img}alt="..."/>
      <h1>{bag.name}</h1>
      <h1> وصف :{bag.description}</h1>
      <h1>لون الشنطه  {bag.color} </h1>
      <h1> {bag.price}ر.س.<p>شامل ضريبة القيمة المضافة</p> </h1>






    </div>
  )
}

