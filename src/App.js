import React, { useState } from "react"; 
 
 import {Route } from 'react-router-dom';
import Home from './Components/Home';
import signup from './Components/signup';
import Login from "./components/Login"
import Bags from "./Components/Bags"
import Navbar from "./Components/Navbar"; 
import Cart from "./components/Cart";
import "./App.css";
 
 
export default function App() {
  const [token, setToken] = useState("");
   return (
    <div className="App">
      <Navbar token={token} setToken={setToken} />
    
    <Route exact path="/" component={Home} />

  <Route   exact path="/signup" component={signup} />
  <Route  exact   path="/Home" render={() => { return <Bags token={token} />;}} />
  <Route  exact   path="/Bags" render={() => { return <AddBags token={token} />;}} />
  <Route  exact  path="/Cart" render={() => {   return <Cart setToken={setToken} token={token} />; }} />
  <Route exact path= "/Login" render={() => ( <Login setToken = {setToken}  />  )
   }/>

    </div>
  );
}

