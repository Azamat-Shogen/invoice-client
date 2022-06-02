import { createContext, useState, useContext } from "react";
import { MAP } from './map'

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
    const [serviceFee, setServiceFee] = useState(25);
    const [usaMap, setMap] = useState(MAP);
    

    const login = (user) => {
        setUser(user)
    }

    const logout = () => {
        setUser(null);
    }

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    
    //TODO: togle map path checked to apply the styles
    function toggleChecked(stateId){
        const updatedLocations = usaMap.locations.map(loc => {
            if(loc.id === stateId){ return {...loc, checked: !loc.checked}}
            return loc;
        });
        setMap({...usaMap, locations: updatedLocations})
    }

       
    const handleMapClick = (stateId) => {

        toggleChecked(stateId)
        const item = usaMap.locations.find(el => el.id === stateId);
        const existsInCartItem = cart.find(el => el.id === item.id);
        let newCart;

        //TODO: if item not in the cart, add to cart
        if(!existsInCartItem){
                newCart = [...cart, item];
            setCart(newCart);
            calculate(newCart.length);
            } 

        //TODO: filter cart, if item already in cart, remove it
            else {
                newCart = cart.filter(el => el.id !== item.id);     
        }
        setCart(newCart);
        calculate(newCart.length);
    }
     

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
            calculate('-');
            updateCart(filtered);
            toggleChecked(itemId)
        }
    }

    const increaseStateCount = (itemId) => {
        const newState = cart.map( el => {
            if(el.id === itemId){ return {...el, count: el.count + 1}}
            return el;
        });
        setCart(newState)
    }

    function updateCart (newCartList){
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
        <AuthContext.Provider value={{ user, login, logout, updateCart, handleMapClick,
            itemCount, calculate, cart, addToCart, usaMap,
            deleteFromCart, increaseStateCount }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => {
    return useContext(AuthContext);
}

