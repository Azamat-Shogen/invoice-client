import { authenticate } from "../auth/helpers"



export const loginUser = (userData) => {
    authenticate(userData, alert('success'))
}