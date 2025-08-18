import { useNavigate } from "react-router-dom";

function About(){
    const navigate=useNavigate();
    function clickHandler(){
        navigate("/");
    }
    function backClickHandler(){
        navigate(-1);
    }
    return (
        <div>
            this is about page
            <button onClick={clickHandler}>move to home page</button>
            <button onClick={backClickHandler}>Back</button>
        </div>
    )
}

export default About;