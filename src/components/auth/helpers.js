import cookie from 'js-cookie';

// set in cookie
export const setCookie = (key, value)=> { // the key is the name of the cookie , and value of that cookie
    if(window !== 'undefined'){
        cookie.set(key, value, {
            expires: 1
        })
    }
};


// remove the cookie when the user logs out from the system
export const removeCookie = (key)=> { // the key is the name of the cookie , and value of that cookie
    if(window !== 'undefined'){
        cookie.remove(key, {
            expires: 1
        })
    }
}

// get from cookie such as stored token
// Will be useful when we need to make request to server with token
export const getCookie = (key)=> { // the key is the name of the cookie , and value of that cookie
    if(window !== 'undefined'){
        return cookie.get(key)
    }
}


// set in localstorage
export const setLocalStorage = (key, value)=> { // the key is the name of the cookie , and value of that cookie
    if(window !== 'undefined'){
        localStorage.setItem(key, JSON.stringify(value))
    }
}


// remove from localstorage
export const removeLocalStorage = (key)=> { // the key is the name of the cookie , and value of that cookie
    if(window !== 'undefined'){
        localStorage.removeItem(key);
    }
}

// authenticate user by passing data to cookie and localstorage during signin
export const authenticate = (response, next) => { // after successful signin
    console.log('AUTHENTICATE HELPER ON LOGIN RESPONSE ')
    setCookie('token', response.data.token);
    const { user } = response.data;
    const {_id, name, email, role, status, company} = user;

    setLocalStorage('user',{
        _id,
        name,
        email,
        role,
        status,
        company
    })
    next();
}

export const updateLocalStorage = (updateData) => {
    const user = {
        ...JSON.parse(localStorage.getItem('user')),
        ...updateData
    };
    localStorage.setItem('user', JSON.stringify(user))
}

// access user info from localstorage
export const isAuth = () => {
    if(window !== 'undefined'){
        const cookieChecked = getCookie('token');
        if(cookieChecked){
            if(localStorage.getItem('user')){
                return JSON.parse(localStorage.getItem('user')) // get a javascript object ( from localstorage json )
            } else{
                return null // if not , the user is not authenticated.
            }
        }
    }
}

export const signout = next => {
    removeCookie('token');
    removeLocalStorage('user');
    next(); // execute the next function/s
}


export const getValueFromLocalStorage = (key) => {
    if(typeof window !== undefined){
        const user = {...JSON.parse(localStorage.getItem('user'))};
        return user[key];
    }
}


export const validateEmail = (email) => {
    const validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.length === 0) return true
    if(email.match(validRegex)){
        return true
    }
    return false
}
