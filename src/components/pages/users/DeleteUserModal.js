
import { deleteUser } from '../../api/actions';
import { Modal } from 'reactstrap';
import './_users.scss';



const DeleteUserModal = ({ token, userId, modal, toggle , setLoading}) => {

    const handleDelete = () => {
        deleteUser(userId, token, () => {
            setTimeout(() => {
                toggle();
                setLoading(true)
            }, 3000)
        })
       
    }

    return (

        <Modal isOpen={modal} toggle={toggle}>
          
          <div className="modal-content users-modal-content">
            <div className="modal-header">
              <h5 className="users-modal-title bold" id="exampleModalLabel">
              Are you sure you want to delete this User
              </h5>
              <button type="button" className="close" style={{outline: 'none'}} onClick={toggle} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
                <div className="users-modal-footer">
                {/* <form onSubmit={handleDelete}> */}
                    <button type="button" className="btn btn-secondary" onClick={toggle}>Cancel</button>
                    <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
                {/* </form> */}
                </div>
             
            </div>
            
          </div>
      
      </Modal>
     
    )
}

export default DeleteUserModal;