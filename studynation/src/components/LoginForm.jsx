import { useState } from "react";
import toast from "react-hot-toast";

import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom";

const LoginForm=({setIsLoggedIn})=>{
    const navigate=useNavigate();
    const[formData,setFormData]=useState(
        {
            email:"",
            password:""
        }
    );

    const [showPassword,setShowPassword]=useState(false);

    function changeHandler(event){
        // {name,type,value}=event.target;
        
        setFormData((prevData)=>({
            ...prevData,
            [event.target.name]:event.target.value
            }))
        
    }

    function submitHandler(event){
        console.log("hello")
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged in");
        navigate("/dashboard")


    }
    return(
        <form onSubmit={submitHandler}>
            <label>
                <p>Email Address<sup>*</sup></p>
                <input 
                required
                type="text"
                value={formData.email}
                name="email"
                placeholder="Enter email id"
                onChange={changeHandler}
                />
            </label>
            <label>
                <p>Password<sup>*</sup></p>
                <input 
                required
                type={showPassword ? ("text") : ("password")}
                value={formData.password}
                name="password"
                onChange={changeHandler}
                />

                <span onClick={
                    ()=> setShowPassword((prev)=> !prev)
                }>
                    {
                        showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)
                    }
                </span>
                <Link to="forgetpass">
                    <p>
                        Forget password    
                    </p>
                </Link>
            </label>

            <button>
                Sign in
            </button>
        </form>
    )
}

export default LoginForm;