import { useNavigate } from "react-router-dom";

function Support(){
    const navigate=useNavigate();
    function clickHandler(){
        navigate("/")
    }
    return(
        <div>
            this is support page
            <button onClick={clickHandler}>move to home page</button>
        </div>
    )
}

export default Support;