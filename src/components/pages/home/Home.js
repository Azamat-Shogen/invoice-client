import { useState } from "react";
import "react-svg-map/lib/index.css";
import { CheckboxSVGMap, SVGMap } from "react-svg-map";
import { usaMap } from "./map";
import { useAuth } from "./../../auth/auth";
import './_home.scss'




const Home = () => {

    const [currentState, setCurrentState] = useState("...");
    const user = useAuth();


    const handleMapClick = locations => {
        const cartIds = locations.map(loc => { return { id: loc.id, }})
        const newCart = [];
        usaMap.locations.map(loc => {
            if(cartIds.find(el => el.id === loc.id)){
                newCart.push({name: loc.name, id: loc.id, count: 1, cost: loc.cost, convenienceFee: loc.convenienceFee})
            }
            return loc
        })
         user.calculate(newCart.length);
         user.updateCart(newCart);
    }

    return (
        <div className="home">
        <h6>Home Page. I know what you did last summer</h6>
        <div className="state-abbreviation"><h4>{currentState}</h4></div>
            <div className="map-container">
             <CheckboxSVGMap  map={usaMap}
              onLocationMouseOver={(loc) => {setCurrentState(loc.target.id.toUpperCase())}}
              onLocationMouseOut={() => {setCurrentState('...')}}  
              onChange={handleMapClick}
             />
            </div>
        </div>
    )
};

export default Home;