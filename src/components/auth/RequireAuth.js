import { isAuth } from "./helpers"
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
    const user = isAuth();
    const location = useLocation();

    if(!user){
        return <Navigate to="/login" state={{ path: location.pathname }} />
    }

    return children;
}

export default RequireAuth;