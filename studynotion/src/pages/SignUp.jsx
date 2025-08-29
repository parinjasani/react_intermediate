import Template from "../components/Template";
import signupImg from "../assets/Images/signup.webp"
function SignUp({setIsLoggedIn}){
    return (
        <div>
            <Template
            title="Join the million learning to code with studynotion for free"
            desc1="Build Skills for today, tomorrow, and beyond."
            image={signupImg}
            desc2="Education to future-proof your career"
            formtype="signup"
            setIsLoggedIn={setIsLoggedIn}
            />           
        </div>
    )
}

export default SignUp;