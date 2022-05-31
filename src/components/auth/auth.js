import { createContext, useState, useContext } from "react";

const AuthContext = createContext(null)


const defaultUser = {
    name: "john",
    email: 'john@gmail.com'
}


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(defaultUser);
    const [cart, setCart] = useState([])
    const [itemCount, setItemCount] = useState(0);
    const [total, setTotal] = useState(0);
    const [serviceFee, setServiceFee] = useState(25)

    const login = (user) => {
        setUser(user)
    }

    const logout = () => {
        setUser(null);
    }

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    // const deleteFromCart = (itemId) => {
    //     let count = 0;
    //     let filteredArr = cart.filter( el => {
    //         if(count === 1) return cart;
    //         if(el.id === itemId){
    //             count++;
    //         }
    //         return el.id !== itemId;
    //     });
    //     setCart(filteredArr)
    // }

    const deleteFromCart = (itemId) => {  
        const element = cart.find(el => el.id === itemId);
        if(!element) return;
        if(element.count > 1){
            const mapped = cart.map(el => {
                if(el.id === itemId){ return {...el, count: el.count - 1}}
                return el; });
                setCart(mapped)
        } else {
            const filtered = cart.filter(el => el.id !== itemId);
            setCart(filtered);
            calculate('-')
        }
    }

    const increaseStateCount = (itemId) => {
        const newState = cart.map( el => {
            if(el.id === itemId){ return {...el, count: el.count + 1}}
            return el;
        });
        setCart(newState)
    }

    const updateCart = (newCartList) => {
        setCart(newCartList)
    }

    function calculate (inputValue) {
        if(itemCount === 0 && inputValue === '-'){
            setItemCount(0)
            return;
        }
        if(inputValue === '-'){
            setItemCount(itemCount - 1);
            return
        }
        if(inputValue === '+'){
            setItemCount(itemCount + 1);
            return
        }
        
        if(inputValue === '0'){
            setItemCount(0);
            return;
        }
        else {
            setItemCount(inputValue)
            
        }
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, updateCart,
            itemCount, calculate, cart, addToCart, deleteFromCart, increaseStateCount }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => {
    return useContext(AuthContext);
}