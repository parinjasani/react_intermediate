import Template from "../components/Template";
import loginImg from "../assets/Images/login.webp"
function Login({setIsLoggedIn}){
    return (
        <Template
        title="Welcome Back"
        desc1="Build Skills for today, tomorrow, and beyond."
        image={loginImg}
        desc2="Education to future-proof your career"
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
        />      
    )
}

export default Login;