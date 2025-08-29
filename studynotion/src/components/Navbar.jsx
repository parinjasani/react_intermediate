import logo from "../assets/Logo/Logo-Full-Light.png"
import {toast} from "react-hot-toast";
import { Link } from "react-router-dom";
const Navbar= (props)=>{
    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;
    function logoutClickHandler (){
        setIsLoggedIn(false);
        toast.success("Logout")
    }
    return(
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
            <Link to="/">
                <img src={logo} width={160} height={32} loading="lazy" alt="logo"/>
            </Link>
            <nav>
                <ul className="flex gap-x-6 text-richblack-100">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className="flex items-center gap-x-4">
                { !isLoggedIn && 
                    <Link to="/login">
                        <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
                            Login
                        </button>
                    </Link>
                }
                { !isLoggedIn &&
                    <Link to="/signup">
                        <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
                            Sign up
                        </button>
                    </Link>
                }
                { isLoggedIn &&
                    <Link to="/">
                        <button onClick={logoutClickHandler} className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
                            Logout
                        </button>
                    </Link>
                }
                { isLoggedIn &&
                    <Link to="/dashboard">
                        <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
                            Dashboard
                        </button>
                    </Link>
                }

            </div>
        </div>
    )
}

export default Navbar;