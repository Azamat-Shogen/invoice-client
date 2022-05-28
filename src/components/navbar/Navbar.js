import { NavLink } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './_navbar.scss'


const NavBar = () => {

    const navlinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "underline",
      fontWeight: isActive ? "bold" : "normal"
    };
  };


    return (
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark nav-div header">
            <NavLink to="/" className="nav-link">
                <HomeIcon 
                    style={{color: 'lightblue', width: "45px", height: "45px"}}
                    fontSize="large"   
                 />
            </NavLink>
                <button className="navbar-toggler"
                        type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                        <li className="nav-item active" >
                        <NavLink className="nav-link" style={{}} to="/user">
                             Profile
                        </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" style={{}} to="/login">
                             Login
                        </NavLink>
                        </li>
                
                        <li className="nav-item">
                        <NavLink className="nav-link" style={{}} to="/register">
                             Register
                        </NavLink>
                        </li>

                        <li className="nav-item">
                        <NavLink  className="nav-link" style={{}} to="/invoice">
                             <AddShoppingCartIcon /> 
                        </NavLink>
                        </li>
                        
                    </ul>
                </div>

        </nav>
    )
}

export default NavBar