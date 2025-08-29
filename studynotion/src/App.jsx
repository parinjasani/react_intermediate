import "./App.css";

import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import DashBoard from "./pages/Dashboard";
import {Routes,Route} from "react-router-dom";
import {  useState } from "react";

function App() {
  
  const[isLoggedIn,setIsLoggedin]=useState(false);


  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedin}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedin}/>}/>
        <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedin}/>} />
        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <DashBoard/>
          </PrivateRoute> 
          } />        
      </Routes> 
    </div>
  );
} 

export default App;
