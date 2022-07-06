import { createContext, useState, useContext, useEffect } from "react";
import { MAP } from './map';
import {Link, useNavigate, Navigate } from "react-router-dom";
import { isAuth, signout } from "./helpers";
import { loginUser } from './../api/actions';


const AuthContext = createContext(null)




export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(isAuth());
    const [cart, setCart] = useState([])
    const [itemCount, setItemCount] = useState(0);
    const [total, setTotal] = useState(0.0);
    const [serviceFee] = useState(25);
    const [grandTotal, setGrandTotal] = useState(0)
    const [usaMap, setMap] = useState(MAP);
    
   const navigate = useNavigate();

    const login = (email, password) => {
        loginUser({ email, password }, () => {
            const userAuth = isAuth();
            setUser(userAuth);
            if(isAuth()){
                navigate('/profile')
            }
        })
       
    }

 

    const logout = () => {
        setUser(null);
        setTotal(0.0);
        setMap(MAP);
        setCart([]);
        setItemCount(0)
        setGrandTotal(0);
        signout(() => {console.log('signed out')});
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

    
    //TODO: update total and grandTotal values
    const calculateTotals = (arr) => {
         
         const defaultTotal = 0.0
         const tempTotal = arr.length > 0 ? arr.map(el => el.cost)
                         .reduce((a, b) => parseFloat(a) + parseFloat(b)) : defaultTotal;
 
         setTotal(parseFloat(tempTotal).toFixed(2))
 
         const totalCount = arr.length > 0 ? arr.map(el => el.count)
                          .reduce((a, b) => parseInt(a) + parseInt(b)) : 0;
 
         const d = (parseFloat(totalCount) * serviceFee + parseFloat(tempTotal)).toFixed(2)              
         setGrandTotal(d);
    }

       
    const handleMapClick = (stateId) => {
        const userAuth = isAuth();

        if(!userAuth){
            alert('Authentication requiered. Please Login or Register.');
            return;
        }

        toggleChecked(stateId)
        const item = usaMap.locations.find(el => el.id === stateId);
        const existsInCartItem = cart.find(el => el.id === item.id);
        let newCart;

        //TODO: if item not in the cart, add to cart
        if(!existsInCartItem){
                newCart = [...cart, {...item, cost: item.cost.toFixed(2)}];
            } 

        //TODO: filter cart, if item already in cart, remove it
            else {
                newCart = cart.filter(el => el.id !== item.id);     
        }
        setCart(newCart);
        calculate(newCart.length);
        calculateTotals(newCart)
       
    }
     

    const deleteFromCart = (itemId) => {  
        const element = cart.find(el => el.id === itemId);
        if(!element) return;
        if(element.count > 1){
            const mapped = cart.map(el => {
                if(el.id === itemId){ 
                    const newElement = {...el, count: el.count - 1}
                    newElement.cost -= newElement.stateFee + newElement.convenienceFee;
                    return {...newElement, cost: newElement.cost.toFixed(2)}
                }
                return el; });
                setCart(mapped)
                calculateTotals(mapped)
        } else {
            const filtered = cart.filter(el => el.id !== itemId);
            calculate('-');
            updateCart(filtered);
            calculateTotals(filtered)
            toggleChecked(itemId)
        }
    }

    const increaseStateCount = (itemId) => {
        const newCart = cart.map( el => {
            if(el.id === itemId){
                const newElement = {...el, count: el.count + 1 }
                newElement.cost = newElement.stateFee * newElement.count + newElement.convenienceFee * newElement.count;
                return {...newElement, cost: newElement.cost.toFixed(2)}
                }
            return el;
        });
        setCart(newCart)
        calculateTotals(newCart)
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
            itemCount, calculate, cart, addToCart, usaMap, total, grandTotal, serviceFee,
            deleteFromCart, increaseStateCount }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => {
    return useContext(AuthContext);
}

