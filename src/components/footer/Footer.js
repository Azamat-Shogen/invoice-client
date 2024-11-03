import "./footer.scss"


const Footer = () => {

    return (
        <div className="main-footer">
           <div className="item contacts">
             <h5>Contacts :</h5>
             <p className="p1" >Phone: <span>(904) 712-6435</span></p>
             <p className="p2">Emal: <span>permits@ipropermits.com</span></p>
           </div>
          
           <div className="item copyright">
            <p>Copyright © 2022 All Rights Reserved</p> 
           </div>
         
        </div>
    )
}

export default Footer