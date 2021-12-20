import React, { useState ,useEffect} from "react"; 
 import {Route } from 'react-router-dom';
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login"
import Bags from "./components/Bags"
import Navbar from "./components/Navbar"; 
import Cart from "./components/Cart";

 
 
export default function App() {
  const [token, setToken] = useState("")


   
   return (
    <div className="App">
      <Navbar token={token} setToken={setToken} />
    <Route>
    <Route exact path="/" component={Home} />

  <Route   exact path="/Signup" component={Signup} />
  <Route  exact   path="/Home" render={() => { return <Home token={token} />;}} />
  <Route  exact   path="/Bags" render={() => { return <Bags token={token} />;}} />
  <Route  exact  path="/Cart" render={() => {   return <Cart setToken={setToken} token={token} />; }} />
  <Route exact path= "/Login" render={() => ( <Login setToken={setToken}  />  )
   }/>
</Route>
    </div>
  );
}

