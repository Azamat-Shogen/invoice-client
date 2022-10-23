import { useEffect, useState } from "react";
import "react-svg-map/lib/index.css";
import { useAuth } from "./../../auth/auth";
import './_home.scss'
import Path from "./Path";


const Home = () => {

    const [currentState, setCurrentState] = useState("...");
    const auth = useAuth();
    const [statesFeesData, setStatesFeeData] = useState({})
    const link_to_pdf = 'http://nationwideexpressservices.weebly.com/uploads/2/9/4/0/2940251/estimated_permit_costs.pdf';

    useEffect( () => {
        fetch("/statesFees.json")
        .then(res => res.json())
        .then(data => setStatesFeeData(data))
        .catch(err => console.log(err))
    }, [])


    const handleMouseOver = (e) => {
        setCurrentState(e.target.id.toUpperCase());
        
    }

    const handleMouseLeave = (e) => {
        setCurrentState("...");
    }


    return (
        <div className="home">
        <h6>Oversize permits invoice generator </h6>
        <div className="disclaimer">
            <p>State permits can range from $5-$5,000</p>
            <p>depending on weight, size and route </p>
            <p>More details can be found here: 
            {statesFeesData.hasOwnProperty('states-prices') && 
                <a href={link_to_pdf} type="button" className="btn btn-info info">Info
                </a>
            }
            </p>
        </div>
      
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