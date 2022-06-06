import { useState, useEffect } from "react";
import './_profile.scss'
import avatar from './profile1.jpg'
import EditUserModal from "./EditUserModal";
import { useAuth } from "../../auth/auth";

const initialProfile = {
    name: 'John Doe',
    email: 'john@gmail.com',
    password: '0000'
}


const Profile = () => {

    const auth = useAuth();
    
    useEffect(() => {
       
    }, [])

    const statusBGColor = auth.user.status === 'active' ? 'bg-success' : 
                       (auth.user.status === 'pending' ? 'bg-warning' : 'bg-danger')
    const statusTextColor = auth.user.status === 'active' ? 'white' : 
                        (auth.user.status === 'pending' ? 'blue' : 'black')

  
    return (
        <div className="profile">
            
            <div className="row">
             {/* TODO: USER  */}
            <div className="col-sm-6">
                <div className="card user">
                <img className="card-img-top avatar" src={avatar} alt="Card cap" />
                <div className="card-body d-flex justify-content-between">
                    <div className="bg-info flex-fill rounded-left">
                        <h5 className="card-title bold white ml-1 pt-2">Profile</h5>
                    </div>
                   <div className={`flex-fill rounded-right ${statusBGColor}`}>

                     {/* <h6 className="center pt-2 {}">{auth.user.status}</h6> */}
                     <h6 className={`center pt-2 ${statusTextColor}`}>{auth.user.status}</h6>

                   </div>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <div className="flex">
                            <p className="w-40">Username</p>
                            <p className="w-50">{initialProfile.name}</p>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="flex">
                            <p className="w-40">Email</p>
                            <p className="w-50">{initialProfile.email}</p>
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
            <div className="col-sm-6">
                <div className="card">
                {/* <img className="card-img-top company-image" src='https://innovologistics.com/wp-content/uploads/2014/06/freight-forwarding-banner.jpg' alt="Card cap" /> */}
                <img className="card-img-top company-image" src='http://www.gstewari.com/wp-content/uploads/2016/09/logistic-concept-flat-banner-production-process-factory-to-shop-warehouse-ship-truck-car-wide-panoramic-illustration-69220178.jpg' alt="Card cap" />
                <div className="card-body ">
                    <h5 className="card-title bold">Company Page</h5>
                </div>
                <form onSubmit={() => alert('company update')}>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <div className="flex">
                            <label htmlFor="company_name" className="w-40 mt-10">Company Name</label>
                            <input type="text" className="input w-60 fs-16 company-input" id="company_name" />
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="flex">
                            <label htmlFor="company_address" className="w-40 mt-10">Company Address</label>
                            <input type="text" className="input w-60 fs-16 company-input" id="company_address" />
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="flex">
                            <label htmlFor="company_city" className="w-40 mt-10">Company City</label>
                            <input type="text" className="input w-60 fs-16 company-input" id="company_city" />
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="flex">
                            <label htmlFor="company_state" className="w-40 mt-10">Company State</label>
                            <input type="text" className="input w-60 fs-16 company-input" id="company_state" />
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="flex">
                            <label htmlFor="company_zidpcode" className="w-40 mt-10">Company Zipcode</label>
                            <input type="text" className="input w-60 fs-16 company-input" id="company_zipcode" />
                        </div>
                    </li>
                    
                </ul>
                <div className="card-body">
                    {auth.user.company ? (
                    <button type="submit" className="btn btn-primary">Update</button>

                    ) : (
                        <button type="submit" className="btn btn-primary">Add</button>
                    )}
                   

                </div>
                </form>
                </div>
            </div>
            </div>
        </div>
    )
};

export default Profile;