import { useState } from "react";
import './_profile.scss'
import avatar from './profile1.jpg'

const initialProfile = {
    name: 'John Doe',
    email: 'john@gmail.com',
    password: '0000'
}


const Profile = () => {
  
    return (
        <div className="profile">

            <div className="row">

             {/* TODO: USER  */}
            <div className="col-sm-6">
                <div className="card">
                <img className="card-img-top avatar" src={avatar} alt="Card cap" />
                <div className="card-body ">
                    <h5 className="card-title bold">Use Profile</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <div className="flex">
                            <h6 className="w-40">Username</h6>
                            <h6 className="w-50">{initialProfile.name}</h6>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="flex">
                            <h6 className="w-40">Email</h6>
                            <h6 className="w-50">{initialProfile.email}</h6>
                        </div>
                    </li>
                    
                </ul>
                <div className="card-body">
                    <a href="/" className="card-link">Update</a>
                </div>
                </div>
            </div>

            {/* TODO: COMPANY  */}
            <div className="col-sm-6">
                <div className="card">
                <img className="card-img-top avatar" src='/' alt="Card cap" />
                <div className="card-body ">
                    <h5 className="card-title bold">Company Page</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <div className="flex">
                            <h6 className="w-40">Comapny Name</h6>
                            <h6 className="w-50">{initialProfile.name}</h6>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="flex">
                            <h6 className="w-40">Email</h6>
                            <h6 className="w-50">{initialProfile.email}</h6>
                        </div>
                    </li>
                    
                </ul>
                <div className="card-body">
                    <a href="/" className="card-link">Update</a>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
};

export default Profile;