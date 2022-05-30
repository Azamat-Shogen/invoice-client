import { useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from "@material-ui/core/Badge";
import { useAuth } from "../auth/auth";
import './_navbar.scss'
import CartDrawer from "./CartDrawer";
import Button from '@material-ui/core/Button';



const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);


    const auth = useAuth();
    const navigate = useNavigate();


    const handleLogout = () => {
        auth.logout();
        navigate('/')
    }

    const handleCartClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleCartClose = () => {
        setAnchorEl(null);
      };


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
                                <Button  className="nav-link cart-btn" 
                                         aria-controls="customized-menu"
                                         aria-haspopup="true"
                                         onClick={handleCartClick}>

                                <Badge badgeContent={auth.itemCount} color="error" 
                                     overlap="rectangular" showZero>
                                     <AddShoppingCartIcon /> 
                                </Badge>
                                </Button>
                                <CartDrawer anchorEl={anchorEl}
                                            open={Boolean(anchorEl)}
                                            onclose={handleCartClose}
                                            items={auth.cart}
                                />
                            </li>
                         )}   
                           
                    </ul>
                </div>

        </nav>
    )
}

export default NavBar