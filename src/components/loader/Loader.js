import {CircularProgress} from '@mui/material'
import './loader.scss';


const Loader = () => {

    
    return (
        <CircularProgress 
            className='loader' 
            color='inherit'
            value={5}
            thickness={5}
            size={30}
            
        />
    )
};

export default Loader;