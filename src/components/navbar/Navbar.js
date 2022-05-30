import { NavLink, useNavigate } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useAuth } from "../auth/auth";
import './_navbar.scss'


const NavBar = () => {

    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.logout();
        navigate('/')
    }

    console.log(auth)

    return (
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark sticky-top header">
                <NavLink to="/" className="nav-link">
                    <HomeIcon style={{color: 'lightblue', width: "45px", height: "45px"}}/>
                </NavLink>
                <h6 className="navbar-title">Invoice Generator</h6>
                <button className="navbar-toggler"
                        type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                        {/* <li className="nav-item active" > */}
                        {/* TODO: If user logged in, show profile */}

                        {auth.user && (
                            <li className="nav-item" >
                                <NavLink className="nav-link" to="/profile">
                                    Profile
                                </NavLink>
                            </li>
                        )}
                       {!auth.user && (
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">
                                    Login
                                </NavLink>
                            </li>
                       )}
                       {!auth.user && (
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/register">
                                Register
                            </NavLink>
                        </li>
                       )}
                       {auth.user && (
                            <li className="nav-item">
                                <button type="button" 
                                className="nav-link btn logout-btn"
                                onClick={handleLogout}>
                                Logout</button>
                            </li>
                       )}

                         {auth.user && (
                            <li className="nav-item">
                                <NavLink  className="nav-link" to="/invoice">
                                    <AddShoppingCartIcon /> 
                                </NavLink>
                            </li>
                         )}   
                           
                    </ul>
                </div>

        </nav>
    )
}

export default NavBar