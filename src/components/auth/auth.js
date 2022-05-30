import { createContext, useState, useContext } from "react";

const AuthContext = createContext(null)


const defaultUser = {
    name: "john",
    email: 'john@gmail.com'
}


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(defaultUser);
    // const [user, setUser] = useState(null);
    const [cart, setCart] = useState([])
    const [itemCount, setItemCount] = useState(0)

    const login = (user) => {
        setUser(user)
    }

    const logout = () => {
        setUser(null);
    }

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const deleteFromCart = (itemId) => {
        let count = 0;
        let filteredArr = cart.filter( el => {
            if(count === 1) return cart;
            if(el.id === itemId){
                count++;
            }
            return el.id !== itemId;
        });
        setCart(filteredArr)
    }

    const updateCart = (newCartList) => {
        setCart(newCartList)
    }

    const calculate = (inputValue) => {
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
            itemCount, calculate, cart, addToCart, deleteFromCart}}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => {
    return useContext(AuthContext);
}