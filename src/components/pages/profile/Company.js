import React, { useState, useEffect } from 'react';
import { getCompany, addCompany } from "../../api/actions";
import { getCookie } from "../../auth/helpers";
import { isAuth } from "../../auth/helpers";



const Company = ({ userData }) => {

    const auth = isAuth();
    const token = getCookie('token');

    const [companyData, setCompanyData] = useState({
        _id: "",
        companyName: "",
        address: "",
        city: "",
        state: "",
        zipcode: ""
    });

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


    
    const handleCompanyChange = (name) => (event) => {
        setCompanyData({...companyData, [name]: event.target.value})
      }

     
    const handleAddCompany = (event) => {
        event.preventDefault();
        addCompany(companyData, token)
    }

    const { companyName, address, city, state, zipcode} = companyData;
  


    return (
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
   
    )
};

export default Company;