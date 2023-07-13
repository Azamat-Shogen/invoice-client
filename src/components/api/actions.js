import { authenticate, updateLocalStorage } from "../auth/helpers";
import axios from 'axios';
import {toast} from 'react-toastify';


const callSuccess = (success) => toast.success(success, {theme: "colored"});
const callFailure = (error) => toast.error(error, {theme: "colored"})
const callWarning = (warning) => toast.warning(warning, {theme: 'colored', autoClose: 5000,  type: toast.TYPE.INFO})


export const loginUser = (userData, next, onError) => {
    // axios.post('http://localhost:8000/api/login', userData)
    setTimeout(() => {
    callWarning('Please wait while we are trying to fetch your user information. This may take a while...')
    }, 3000)
    axios.post(`${process.env.REACT_APP_API}/login`, userData)
    .then(response => {
        callSuccess('User authenticated!');
        authenticate(response, next)
        
    })
    .catch(error => {
        let msg;
        try{
          msg = error.response.data.error
        } catch(er){
            msg = 'server is down ..... 🤖';
        } finally {
            callFailure(msg);
            onError();
        }
   
    })
}


export const registerUser = async (userData, onSuccses, onError) => {
    axios.post(`${process.env.REACT_APP_API}/register`, userData)
    .then(response => {
        callSuccess("Registration Successfull");
        onSuccses();
    })
    .catch((error) => {
        let msg;
        try {
            msg = error.response.data.error;
        } catch (er) {
            msg = 'server is down ..... 🤖';
        } finally{
            callFailure(msg)
            onError()
        }
        // const msg = error.response.data.error
        // callFailure(msg)
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

export const changeUserStatus = async ({token, status, userId}) => {
    const options = {
         headers : {
            'Authorization': `Bearer ${token}`
        }
    }
    const body = {status, userId}
    
   await axios.patch(`${process.env.REACT_APP_API}/users`, body, options)
    .then(response => {
        console.log('success: ', response)
        callSuccess('updated')
    })
    .catch(error => {
        console.log('error: ', error);
    })
}

export const getCompany = async (companyId, token) => {
    try {
        const company = await axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API}/companyAccount/${companyId}`,
            headers: { Authorization: `Bearer ${token}`}
        });
        return company.data;
    } catch (error) {
        return null
    }
}



export const addCompany = async (companyData, token) => {

  try {
    await axios.post( `${process.env.REACT_APP_API}/companyAccount`, companyData, {
        headers: { Authorization: `Bearer ${token}`}
    })
    .then(response => {
        updateLocalStorage({company: response.data._id });
        callSuccess('Company added')
    })
  } catch (error) {
    const msg = error.response.data.error;
    callFailure(msg)
  }
}


export const updateCompany = async (companyId, companyData, token) => {
    await axios({
        method: 'PATCH',
        url: `${process.env.REACT_APP_API}/companyAccount/${companyId}`,
        data: companyData,
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
    .then(response => {
        callSuccess('Update success!')
    })
    .catch(error => {
        const msg = error.response.data.error;
        callFailure(msg)
    })

}


export const deleteUser = async (userId, token, func) => {
    await axios({
        method: 'DELETE',
        url: `${process.env.REACT_APP_API}/users`,
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            userId: userId
        }
    })
    .then( response => {
        console.log(response)
        callSuccess(response.data.message);
        func()
    })
    .catch(error => {
        console.log(error)
        // const msg = error.response.data.error
        callFailure('Error while deleting a user')
    })
}


export const updateUser = async (newUserData, token, func) => {
    await axios({
        method: 'PUT',
        url: `${process.env.REACT_APP_API}/user/update`,
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: newUserData
    })
    .then( response => {
        console.log('User has been updated succsessfully!')
        console.log(response);
        callSuccess('User has been updated succsessfully!');
        // updateLocalStorage({})
        func();
    })
    .catch(error => {
        const msg = error.response.data.error;
        callFailure(msg)
    })
}
