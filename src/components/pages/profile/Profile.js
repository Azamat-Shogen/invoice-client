import { useState, useEffect } from "react";
import './_profile.scss'
import { ToastContainer } from 'react-toastify';
import avatar from './profile1.jpg'
import { avatars } from "./data/images";
import EditUserModal from "./EditUserModal";
import { getCookie } from "../../auth/helpers";
import { isAuth } from "../../auth/helpers";
import Company from "./Company";



const Profile = () => {
    const auth = isAuth();
    const token = getCookie('token');
    const [modal, setModal] = useState(false);
    const [userData, setUserData] = useState({
        _id: "",
        name: "",
        email: "",
        status: "",
        password: "",
        companyId: null
    });
   

    useEffect( () => {
        if(auth){
            setUserData({
                ...userData,
                _id: auth._id,
                name: auth.name,
                email: auth.email,
                status: auth.status,
                password: auth.password,
                companyId: auth.company
            });
        }
       
    }, []);



    const randAvatar = avatars[(Math.floor(Math.random() * 4))]
   
    const statusBGColor = userData.status === 'Active' ? 'bg-success' : 
                       (userData.status === 'Pending' ? 'bg-warning' : 'bg-danger')
    const statusTextColor = userData.status === 'Active' ? 'white' : 
                        (userData.status === 'Pending' ? 'blue' : 'black')


    return (
        <div className="profile">
             <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
            <div className="row">
             {/* TODO: USER  */}
            <div className="col-sm-6">
                <div className="card user">
                <img className="card-img-top avatar" src={randAvatar} alt="Card cap" />
                <div className="card-body d-flex justify-content-between">
                    <div className="bg-info flex-fill rounded-left">
                        <h5 className="card-title bold white ml-1 pt-2">Profile</h5>
                    </div>
                   <div className={`flex-fill rounded-right ${statusBGColor}`}>

                     {/* <h6 className="center pt-2 {}">{auth.user.status}</h6> */}
                     <h6 className={`center pt-2 ${statusTextColor}`}>{userData.status}</h6>

                   </div>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <div className="flex">
                            <p className="w-40">Username</p>
                            <p className="w-50">{userData.name}</p>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="flex">
                            <p className="w-40">Email</p>
                            <p className="w-50">{userData.email}</p>
                        </div>
                    </li>
                    
                </ul>
                <div className="card-body">
                <button type="button" 
                    className="btn btn-primary" 
                    data-toggle="modal" data-target="#exampleModal" 
                    data-whatever="@mdo">Edit
                </button>
                 <EditUserModal />
                </div>
                </div>
               
            </div>

            {/* TODO: COMPANY  */}
            <Company userData={userData}/>
            </div>
        </div>
    )
};

export default Profile;