import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import DashBoard from "./pages/Dashboard";
import {Routes,Route} from "react-router-dom";
import {  useState } from "react";

function App() {
  
  const[isLoggedIn,setIsLoggedin]=useState(false);


  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedin}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedin}/>}/>
        <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedin}/>} />
        <Route path="/dashboard" element={<DashBoard/>} />        
      </Routes> 
    </div>
  );
} 

export default App;
