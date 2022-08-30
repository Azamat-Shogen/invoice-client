import React, { useState, useEffect } from 'react';
import './_edit-user.scss';
import { Modal } from 'reactstrap';
import { updateUser } from '../../api/actions';
import { getCookie } from "../../auth/helpers";


const EditUserModal = ({ userData, modal, toggle }) => {
   const [data, setData] = useState({
     name: "",
     password: "",
     email: ""
   });

   const token = getCookie('token')

   useEffect(() => {
     setData({...data, name: userData.name, email: userData.email});
   }, [userData])



    const { name, email, password="" } = data
    
    const handleUserChange = (name) => (event) => {
      setData({...data, [name]: event.target.value})
  }


    const handleUpdate = (event) => {
      event.preventDefault();
      updateUser(data, token, () => {
        setTimeout( () => {
          toggle();
        }, 2000)
      })
    }

   

    return (
        <Modal isOpen={modal} toggle={toggle}>
        <div className="modal-content users-modal-content">
            <div className="modal-header">
              <h5 className="users-modal-title bold center" id="exampleModalLabel">
                UPDATE USER
              </h5>
              <button type="button" className="close" style={{outline: 'none'}} onClick={toggle} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">

              
            <form onSubmit={handleUpdate}>
                <div className="form-group">
                  <input type="text" 
                         className="form-control input" 
                         id="recipient-name" 
                         placeholder='Username'
                         name="name"
                         onChange={handleUserChange('name')} 
                         value={name}/>
                  <input type="password" 
                         className="form-control input" 
                         id="recipient-password" 
                         placeholder='Password'
                         name='password' 
                         onChange={handleUserChange('password')}
                         value={password}/>
                  <input type="email" 
                         className="form-control input"
                         id="recipient-email" 
                         placeholder='Email' 
                         disabled value={email} />
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={toggle}>Cancel</button>
                    <button type="submit" className="btn btn-primary">update</button>
                </div>
              </form>
            </div>
          </div>
      </Modal>
    )
}

export default EditUserModal;