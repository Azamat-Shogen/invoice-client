import { useState, useEffect } from "react";
import './_profile.scss'
import avatar from './profile1.jpg'
import { avatars } from "./data/images";
import EditUserModal from "./EditUserModal";
import { getCompany, addCompany } from "../../api/actions";
import { getCookie } from "../../auth/helpers";
import { isAuth } from "../../auth/helpers";



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
    const [companyData, setCompanyData] = useState({
        _id: "",
        companyName: "",
        address: "",
        city: "",
        state: "",
        zipcode: ""
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


    useEffect( () => {
        const loadCompany = async () => {
               if(auth.company){
                const fetchedCompany = await getCompany(auth.company, token);
                if(fetchedCompany){
        
                     setCompanyData({
                    ...companyData,
                    _id: fetchedCompany._id,
                    companyName: fetchedCompany.companyName,
                    address: fetchedCompany.address,
                    city: fetchedCompany.city,
                    state: fetchedCompany.state,
                    zipcode: fetchedCompany.zipcode
                 })
                }     
            }
        }

        loadCompany();
    }, [])

    const randAvatar = avatars[(Math.floor(Math.random() * 4))]
   
    const statusBGColor = userData.status === 'Active' ? 'bg-success' : 
                       (userData.status === 'Pending' ? 'bg-warning' : 'bg-danger')
    const statusTextColor = userData.status === 'Active' ? 'white' : 
                        (userData.status === 'Pending' ? 'blue' : 'black')



    const handleCompanyChange = (name) => (event) => {
        setCompanyData({...companyData, [name]: event.target.value})
      }

     
    const handleAddCompany = (event) => {
        event.preventDefault();
        addCompany(companyData, token)
    }

    const { companyName, address, city, state, zipcode} = companyData;
  

    return (
        <div className="profile">
            
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
            <div className="col-sm-6">
                <div className="card">
                {/* <img className="card-img-top company-image" src='https://innovologistics.com/wp-content/uploads/2014/06/freight-forwarding-banner.jpg' alt="Card cap" /> */}
                <img className="card-img-top company-image" src='http://www.gstewari.com/wp-content/uploads/2016/09/logistic-concept-flat-banner-production-process-factory-to-shop-warehouse-ship-truck-car-wide-panoramic-illustration-69220178.jpg' alt="Card cap" />
                <div className="card-body ">
                    <h5 className="card-title bold">Company Page</h5>
                </div>
                <form onSubmit={handleAddCompany}>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <div className="flex">
                            <label htmlFor="company_name" className="w-40 mt-10">Company Name</label>
                            <input type="text" className="input w-60 fs-16 company-input" id="company_name" 
                              onChange={handleCompanyChange('companyName')}
                              value={companyName } />
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="flex">
                            <label htmlFor="company_address" className="w-40 mt-10">Company Address</label>
                            <input type="text" className="input w-60 fs-16 company-input" id="company_address" 
                              onChange={handleCompanyChange('address')}
                              value={address} />
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="flex">
                            <label htmlFor="company_city" className="w-40 mt-10">Company City</label>
                            <input type="text" className="input w-60 fs-16 company-input" id="company_city" 
                                onChange={handleCompanyChange('city')}
                                value={city} />
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="flex">
                            <label htmlFor="company_state" className="w-40 mt-10">Company State</label>
                            <input type="text" className="input w-60 fs-16 company-input" id="company_state" 
                                onChange={handleCompanyChange('state')}
                                value={state} />
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="flex">
                            <label htmlFor="company_zidpcode" className="w-40 mt-10">Company Zipcode</label>
                            <input type="text" className="input w-60 fs-16 company-input" id="company_zipcode" 
                                onChange={handleCompanyChange('zipcode')}
                                value={zipcode} />
                        </div>
                    </li>
                    
                </ul>
                <div className="card-body">
                    {userData.companyId ? (
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