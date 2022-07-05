import error from './error1.svg';
import './pageNotFound.scss';

const PageNotFound = () => {
    
    return (
        <div className='not-found'>
            <img src={error} alt="not found"/>
        </div>
    )
}

export default PageNotFound;