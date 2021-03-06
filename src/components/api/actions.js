import { authenticate } from "../auth/helpers";
import axios from 'axios';
import {toast} from 'react-toastify';


const callSuccess = (success) => toast.success(success, {theme: "colored"});
const callFailure = (error) => toast.error(error, {theme: "colored"})

export const loginUser = (userData, next) => {
    // axios.post('http://localhost:8000/api/login', userData)
    axios.post(`${process.env.REACT_APP_API}/login`, userData)
    .then(response => {
        console.log(response);
        callSuccess('User authenticated!');
        authenticate(response, next)
    })
    .catch(error => {
        console.log('Login error: ', error);
        const msg = error.response.data.error;
        callFailure(msg)
    })
}

export const fetchAllUsers = async (token) => {
  
    try {
        // const users = await axios.get(`${process.env.REACT_APP_API}/users`);
        const users = await axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API}/users`,
            headers: { Authorization: `Bearer ${token}`}
        })
        return users
    } catch (error) {
        return null
    }
}