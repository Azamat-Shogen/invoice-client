import React, {useState} from 'react';
import error from './error1.svg';
import { useLocation } from 'react-router-dom';
import { isAuth } from "../../auth/helpers";
import './pageNotFound.scss';


const PageNotFound = () => {
    const { pathname } = useLocation();
    const message = pathname === '/NotFound' ? isAuth().status : 'Not Found'
    
    return (
        <div className='not-found'>
            <h2>{`Error:  ${message}`}</h2>
            <img src={error} alt="not found"/>
        </div>
    )
}

export default PageNotFound;