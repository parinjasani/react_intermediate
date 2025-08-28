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
        <div className="flex justify-evenly">
            <Link to="/">
                <img src={logo} width={160} height={32} loading="lazy" alt="logo"/>
            </Link>
            <nav >
                <ul className="flex gap-3">
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

            <div className="flex mr-3 ml-5 gap-3">
                { !isLoggedIn && 
                    <Link to="/login">
                        <button>
                            Login
                        </button>
                    </Link>
                }
                { !isLoggedIn &&
                    <Link to="/signup">
                        <button>
                            Sign up
                        </button>
                    </Link>
                }
                { isLoggedIn &&
                    <Link to="/">
                        <button onClick={logoutClickHandler}>
                            Logout
                        </button>
                    </Link>
                }
                { isLoggedIn &&
                    <Link to="/dashboard">
                        <button>
                            Dashboard
                        </button>
                    </Link>
                }

            </div>
        </div>
    )
}

export default Navbar;