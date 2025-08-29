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
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged in");
        console.log(formData)
        navigate("/dashboard")
    }
    return(
        <form onSubmit={submitHandler} 
        className="flex flex-col w-full gap-y-4 mt-6">
            <label className="w-full">
                <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1">
                    Email Address<sup className="text-pink-200">*</sup></p>
                <input 
                required
                type="text"
                value={formData.email}
                name="email"
                placeholder="Enter email address"
                onChange={changeHandler}
                className="bg-richblue-800 rounded-[0.5rem] w-full p-[12px] text-richblack-5"
                />
            </label>
            <label className="w-full relative">
                <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1">
                Password<sup className="text-pink-200">*</sup></p>
                <input 
                required
                type={showPassword ? ("text") : ("password")}
                value={formData.password}
                name="password"
                placeholder="Enter password"
                onChange={changeHandler}
                className="bg-richblue-800 rounded-[0.5rem] w-full p-[12px] text-richblack-5"
                />

                <span 
                className="absolute right-3 top-[38px] cursor-pointer"
                onClick={
                    ()=> setShowPassword((prev)=> !prev)
                }>
                    {
                        showPassword ? 
                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 
                        (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)
                    }
                </span>
                <Link to="forgetpass">
                    <p className="text-xs mt-1 text-blue-100 text-end">
                        Forget password    
                    </p>
                </Link>
            </label>

            <button className="bg-yellow-50 rounded-[0.5rem] w-full px-[12px] py-[8px] mt-6">
                Sign in
            </button>
        </form>
    )
}

export default LoginForm;