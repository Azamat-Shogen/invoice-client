import { NavLink } from "react-router-dom";


const NavBar = () => {

    const navlinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "underline",
      fontWeight: isActive ? "bold" : "normal"
    };
  };

//   $(document).on('click','.navbar-collapse.show',function(e) {
//         $(this).collapse('hide');
//     });


    return (
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark nav-div">
            <h3><a href="/user" className="az">Profile</a> </h3>
                <button className="navbar-toggler"
                        type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                        <li className="nav-item active" >
                        <NavLink className="nav-link" style={{}} to="/">
                             Home
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
                        <NavLink className="nav-link" style={{}} to="/invoice">
                             Invoice
                        </NavLink>
                        </li>
                    </ul>
                </div>

        </nav>
    )
}

export default NavBar