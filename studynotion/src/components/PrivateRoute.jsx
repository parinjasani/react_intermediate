import { Navigate } from "react-router-dom";

const PrivateRoute=({isLoggedIn,children})=>{
 
    if(isLoggedIn){
        // console.log("in private route")
        return children;
        
    }
    else{
        return <Navigate to="/login"/>
    }
    
}

export default PrivateRoute;