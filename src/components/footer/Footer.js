import "./footer.scss"


const Footer = () => {

    return (
        <div className="main-footer">
           <div className="item contacts">
             <h5>Contacts :</h5>
             <p className="p1" >Phone: <span>224-772-1279</span></p>
             <p className="p2">Emal: <span>permits@imcpermits.com</span></p>
           </div>
          
           <div className="item copyright">
            <p>Copyright © 2022 All Rights Reserved</p> 
           </div>
         
        </div>
    )
}

export default Footer