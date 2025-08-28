
import bgimg from "../assets/Images/frame.png"

import SignUpForm from "../components/SignUpForm"
import LoginForm from "../components/LoginForm"

const Template=({title,desc1,desc2,image,formtype,setIsLoggedIn})=>{
    return (
        <div>

            <div>
                <h1>{title}</h1>
                <p>
                    <span>{desc1}</span>
                    <span>{desc2}</span>
                </p>

                {formtype==="signup" ? (<SignUpForm setIsLoggedIn={setIsLoggedIn}/>) : (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

                <div>
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </div>

                <button>Sign Up with Google</button>
            </div>

            <div>
                <img src={bgimg} alt="pattern" width={558} height={504} 
                loading="lazy"/>

                <img src={image} 
                alt="Students" 
                width={558} 
                height={490} 
                loading="lazy"/>
            </div>

        </div>
    )
}

export default Template;