import { createContext, useState, useContext } from "react";

const AuthContext = createContext(null)


const defaultUser = {
    name: "john",
    email: 'john@gmail.com'
}


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(defaultUser);
    // const [user, setUser] = useState(null);

    const [itemCount, setItemCount] = useState(0)

    const login = (user) => {
        setUser(user)
    }

    const logout = () => {
        setUser(null);
    }

    const calculate = (operand) => {
        if(itemCount === 0 && operand === '-'){
            setItemCount(0)
            return;
        }
        if(operand === '-'){
            setItemCount(itemCount - 1);
            return
        }
        if(operand === '+'){
            setItemCount(itemCount + 1);
            return
        }
        if(operand === '0'){
            setItemCount(0);
            return;
        }
        else {
            return;
        }
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, itemCount, calculate}}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => {
    return useContext(AuthContext);
}