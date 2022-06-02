import { useState } from 'react';


const CustomSVG = ({ handleMouseOver, location, handleMouseLeave, handleMapClick}) => {
    

    return (
        <path id={location.id} name={location.name} d={location.path}
              className={`${location.checked ? 'filled_path' : 'svg-map__location'}`} tabIndex="0" role="checkbox" 
              aria-label={location.name} area-checked={location.checked.toString()}
              onMouseEnter={handleMouseOver} 
              onMouseLeave={handleMouseLeave}
              onClick={() => handleMapClick(location.id)}
        >
        </path>
    )
}

export default CustomSVG;