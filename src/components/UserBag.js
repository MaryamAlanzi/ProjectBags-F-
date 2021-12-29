import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


export default function UserBag({}) {
    const [Bags, setBags] = useState([]);
     const history = useHistory();
    
  

    useEffect(async () => {
        const res = await axios.get("http://localhost:5000/Bags", {});
        setBags(res.data);
      }, []);
    
    const goToBag  =(id)=>{
        history.push(`/Bag/${id}`);
      }
    
      return(
      
    
    
      
      <div>
      {Bags.map((element, i) => {
        console.log(element);
        return (
          <div>
            <img  onClick={() => { (goToBag(element._id));}}  src={element.img} alt="..." />
            
              <h4>أسم الشنطه : {element.name} </h4>
              <p>اللون :{element.color} </p>
              <p> وصفها :{element.description} </p>
              <p>السعر: {element.price} </p>
              
        
       
        </div>
               );
            })}
    
    
    </div>
      
      );
    
        }    
    
        