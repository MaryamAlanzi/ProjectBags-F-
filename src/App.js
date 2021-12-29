import React, { useState ,useEffect} from "react"; 
 import {Route } from 'react-router-dom';
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login"
import Bags from "./components/Bags"
import Bag from "./components/Bag";
import Navbar from "./components/Navbar"; 
import Cart from "./components/Cart";
import Add from "./components/Add";
import UserBag from "./components/UserBag";
 
 
export default function App() {
  const [token, setToken] = useState("");
  const [Admin , setAdmin]=useState("")

   
   return (
    <div className="App">
      <Navbar token={token}  Admin={Admin} setToken={setToken}  />
    <Route>
    <Route exact path="/" component={Home} />
    
  <Route  exact   path="/Signup" component={Signup} />
  <Route  exact   path="/Home" render={() => { return <Home token={token} />;}} />
  <Route  exact   path="/Bags" render={() => { return <Bags token={token} />;}} />
  <Route  exact   path="/UserBag" render={() => { return <UserBag token={token} />;}} />
  <Route  exact   path="/Add" render={() => { return <Add token={token} />;}} />
 <Route  exact   path="/Bag/:id" render={() => { return <Bag token={token} />;}} />
 <Route  exact  path="/Cart" render={() => {   return <Cart setToken={setToken} token={token} />; }} />
  <Route exact path= "/Login" render={() => ( <Login setToken={setToken} setAdmin={setAdmin}  />  )
   }/>
</Route>
    </div>
  );
}

