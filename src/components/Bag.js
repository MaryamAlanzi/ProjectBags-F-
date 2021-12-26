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
    console.log("id :",id);
    setbag(res.data);
    }, []);


    return (
        <div>


        </div>
    )
}
