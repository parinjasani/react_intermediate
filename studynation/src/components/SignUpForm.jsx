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
        
    };

    function submitHandler(event){
        
        event.preventDefault();
        if(formData.password !== formData.confrimpassword){
            toast.error("password not match")
        }
        else{
            toast.success("account creted")
            setIsLoggedIn(true);
            const accData={
                ...formData
            }
            console.log(accData);
            navigate("/dashboard")
        }
    }
    return(
        <div>

            {/* student-instrucure tab */}

            <div>
                <button>
                    Student  
                </button>
                <button>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                <div>
                    <label>
                        <p>First Name<sup>*</sup></p>

                        <input 
                            required
                            type="text"
                            onChange={changeHandler}
                            placeholder="Enter First Name"
                            name="firstname"

                        />
                    </label>
                    <label>
                        <p>Last Name<sup>*</sup></p>

                        <input 
                            required
                            type="text"
                            onChange={changeHandler}
                            placeholder="Enter Last Name"
                            name="lastname"

                        />
                    </label>
                </div>

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

                <div>
                    <label>
                        <p>Creat Password<sup>*</sup></p>
                        <input 
                        required
                        type={showPassword ? ("text") : ("password")}
                        value={formData.password}
                        name="password"
                        onChange={changeHandler}
                        />

                        <span onClick={
                            ()=> setShowPassword((prev)=> !prev)}>
                            {
                                showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)
                            }
                        </span>
                    </label>
                    <label>
                        <p>Confrim Password<sup>*</sup></p>
                        <input 
                        required
                        type={showPassword ? ("text") : ("password")}
                        value={formData.confrimpassword}
                        name="confrimpassword"
                        onChange={changeHandler}
                        />

                        <span onClick={
                            ()=> setShowPassword((prev)=> !prev)}>
                            {
                                showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)
                            }
                        </span>
                    </label>
                </div>

                <button>
                    create account
                </button>
            </form>

        </div>
    )
}

export default SignUpForm;