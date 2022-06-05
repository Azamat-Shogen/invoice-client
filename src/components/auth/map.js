import USA from "@svg-maps/usa";
import { states } from "./states";

const notRequiredStates = ['Hawaii', 'Alaska']
const filteredStates = USA.locations.filter(location =>  location.name !== notRequiredStates[0] && location.name !== notRequiredStates[1])
const filteredMap = {...USA, locations: filteredStates}

// const mappedLocations = filteredMap.locations.map( location => { return {...location, cost: 0.0, convenienceFee: 0.0, checked: false, count: 1}})


const mappedLocations = filteredMap.locations.map( loc => {
    const state = states.find(el => el.id === loc.id);
    if(state) {
        const count = 1;
        const cost = state.stateFee * count + state.convenienceFee * count;
        return { ...loc, stateFee: state.stateFee, convenienceFee: state.convenienceFee, checked: false, count, cost }

     }
     else { 
         return {...loc, stateFee: 0.0, convenienceFee: 0.0, checked: false, count: 1} 
        }
})

export const MAP = {...USA, locations: mappedLocations}


