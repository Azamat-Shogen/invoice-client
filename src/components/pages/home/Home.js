import { useEffect, useState } from "react";
import "react-svg-map/lib/index.css";
import { useAuth } from "./../../auth/auth";
import './_home.scss'
import Path from "./Path";


const Home = () => {

    const [currentState, setCurrentState] = useState("...");
    const user = useAuth();


    console.log(user)

    const handleMouseOver = (e) => {
        setCurrentState(e.target.id.toUpperCase());
        
    }

    const handleMouseLeave = (e) => {
        setCurrentState("...");
    }

    

    return (
        <div className="home">
        <h6>Home Page. I know what you did last summer</h6>
        <div className="state-abbreviation"><h4>{currentState}</h4></div>
            <div className="map-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="192 9 1028 746" className="svg-map" aria-label="Map of USA">
                {user.usaMap.locations.map( loc => (
                    <Path key={loc.id} location={loc} 
                    handleMouseOver={handleMouseOver}
                    handleMouseLeave={handleMouseLeave}
                    handleMapClick={user.handleMapClick}
                     />
                ))}
                </svg>
            </div>
        </div>
    )
};

export default Home;