import USA from "@svg-maps/usa";

const notRequiredStates = ['Hawaii', 'Alaska']
const filteredStates = USA.locations.filter(location =>  location.name !== notRequiredStates[0] && location.name !== notRequiredStates[1])
const filteredMap = {...USA, locations: filteredStates}

const mappedLocations = filteredMap.locations.map( location => { return {...location, cost: 0.0, convenienceFee: 0.0 }})

export const usaMap = {...USA, locations: mappedLocations}
