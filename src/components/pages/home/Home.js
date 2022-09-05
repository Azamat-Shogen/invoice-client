import { useEffect, useState } from "react";
import "react-svg-map/lib/index.css";
import { useAuth } from "./../../auth/auth";
import { isAuth } from "../../auth/helpers";
import './_home.scss'
import Path from "./Path";


const Home = () => {

    const [currentState, setCurrentState] = useState("...");
    const auth = useAuth();


    const handleMouseOver = (e) => {
        setCurrentState(e.target.id.toUpperCase());
        
    }

    const handleMouseLeave = (e) => {
        setCurrentState("...");
    }


    return (
        <div className="home">
        <h6>Imc Permits: OS Invoice generator</h6>
        <div className="state-abbreviation"><h4>{currentState}</h4></div>
            <div className="map-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="192 9 1028 746" className="svg-map" aria-label="Map of USA">
                {auth.usaMap.locations.map( loc => (
                    <Path key={loc.id} location={loc} 
                    handleMouseOver={handleMouseOver}
                    handleMouseLeave={handleMouseLeave}
                    handleMapClick={auth.handleMapClick}
                     />
                ))}
                </svg>
            </div>
        </div>
    )
};

export default Home;