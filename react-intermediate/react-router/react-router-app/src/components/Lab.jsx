import { useNavigate } from "react-router-dom";
function Lab(){
    const navigate=useNavigate();
    function clickHandler(){
        navigate("/")
    }
    return (
        <div>
            this is lab page
            <button onClick={clickHandler}>Navigate to home page</button>
        </div>
    )
}

export default Lab;