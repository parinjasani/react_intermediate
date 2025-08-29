import { useState } from "react";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import toast from "react-hot-toast";
import {  useNavigate } from "react-router-dom";
const SignUpForm=({setIsLoggedIn})=>{
    const navigate=useNavigate();
    const[formData,setFormData]=useState(
        {
            firstname:"",
            lastname:"",
            email:"",
            confrimpassword:"",
            password:"",
        }
    );
    const [showPassword,setShowPassword]=useState(false);
    const [showPassword1,setShowPassword1]=useState(false);
    const[accountType,setAccountType]=useState("student")
    function changeHandler(event){
        // {name,type,value}=event.target;
        
        setFormData((prevData)=>({
            ...prevData,
            [event.target.name]:event.target.value
            }))
        
    };

    function submitHandler(event){
        
        event.preventDefault();
        if(formData.password !== formData.confrimpassword){
            toast.error("password not match")
        }
        
            toast.success("account creted")
            setIsLoggedIn(true);
            navigate("/dashboard")
            const finaldata={
                ...formData,
                accountType
            }
            console.log(finaldata);
    }
    return(
        <div>

            {/* student-instrucure tab */}

            <div className="flex bg-richblack-800 p-1 my-5 rounded-full max-w-max gap-x-1">
                <button 
                className={ `${accountType==="student"   
                    ? "bg-richblack-900 text-richblack-5" 
                    : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`
                }
                onClick={()=>setAccountType("student")}>
                    Student  
                </button>
                <button 
                className={ `${accountType==="instructor" 
                    ? "bg-richblack-900 text-richblack-5" 
                    : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`
                }
                onClick={()=>setAccountType("instructor")}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
                <div className="w-full flex flex-row gap-4">
                    <label className="w-full">
                        <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1">
                            First Name
                        <sup className="text-pink-200">*</sup></p>

                        <input 
                            required
                            type="text"
                            onChange={changeHandler}
                            placeholder="Enter First Name"
                            name="firstname"
                            className="bg-richblue-800 rounded-[0.5rem] w-full p-[12px] text-richblack-5"

                        />
                    </label>
                    <label className="w-full">
                        <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1">
                            Last Name
                            <sup className="text-pink-200">*</sup></p>

                        <input 
                            required
                            type="text"
                            onChange={changeHandler}
                            placeholder="Enter Last Name"
                            name="lastname"
                            className="bg-richblue-800 rounded-[0.5rem] w-full p-[12px] text-richblack-5"

                        />
                    </label>
                </div>

                <label>
                    <p
                    className="text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1"
                    >Email Address
                    <sup className="text-pink-200">*</sup></p>
                    <input 
                    required
                    type="text"
                    value={formData.email}
                    name="email"
                    placeholder="Enter email id"
                    onChange={changeHandler}
                    className="bg-richblue-800 rounded-[0.5rem] w-full p-[12px] text-richblack-5"
                    />
                </label>

                <div className="w-full flex flex-row gap-4">
                    <label className="w-full relative">
                        <p
                        className="text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1"
                        >Creat Password<sup>*</sup></p>
                        <input 
                        required
                        type={showPassword ? ("text") : ("password")}
                        value={formData.password}
                        name="password"
                        onChange={changeHandler}
                        className="bg-richblue-800 rounded-[0.5rem] w-full p-[12px] text-richblack-5"
                        placeholder="Creat Password"
                        />

                        <span 
                        className="absolute right-3 top-[38px] cursor-pointer"
                        onClick={
                            ()=> setShowPassword((prev)=> !prev)}>
                            {
                                showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)
                            }
                        </span>
                    </label>
                    <label className="w-full relative">
                        <p
                        className="text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1"
                        >Confrim Password
                        <sup className="text-pink-200">*</sup></p>
                        <input 
                        required
                        type={showPassword1 ? ("text") : ("password")}
                        value={formData.confrimpassword}
                        name="confrimpassword"
                        onChange={changeHandler}
                        placeholder="Confrim Password"
                        className="bg-richblue-800 rounded-[0.5rem] w-full p-[12px] text-richblack-5"
                        />

                        <span 
                        className="absolute right-3 top-[38px] cursor-pointer"
                        onClick={
                            ()=> setShowPassword1((prev)=> !prev)}>
                            {
                                showPassword1 ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)
                            }
                        </span>
                    </label>
                </div>

                <button className="bg-yellow-50 rounded-[0.5rem] w-full px-[12px] py-[8px] mt-6">
                    create account
                </button>
            </form>

        </div>
    )
}

export default SignUpForm;