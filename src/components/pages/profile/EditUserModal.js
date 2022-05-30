import './_edit-user.scss'


const EditUserModal = () => {


    const handleChange = () => {

    }

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="bold user-title" id="exampleModalLabel">Update User</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <input type="text" className="form-control input" 
                         id="recipient-name" placeholder='Username'
                         onChange={handleChange} />
                  <input type="text" className="form-control input" 
                         id="recipient-name" placeholder='Password'
                         onChange={handleChange}
                         value="" />
                  <input type="text" className="form-control input" id="recipient-name" placeholder='Email' disabled value="user@gmail.com" />
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="submit" className="btn btn-primary">update</button>
                </div>
              </form>
            </div>
            
          </div>
        </div>
      </div> 
    )
}

export default EditUserModal;