import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap'

const NavBar = () => {
  const navigate = useNavigate()

  function contactButton(){
    navigate("/contact")

   }
    
 return (

 <div>

 <nav className="navbar navbar-light bg-light py-4 px-3">
    <div className="container-fluid">
      <a className="navbar-brand fs-1 fw-bold" onClick={() => navigate("/")}>
        GATEKEY
       </a>
      <form className="d-flex">
      <Button
      className="btn btn-outline-success" 
      onClick={() => navigate("/about")}
      type="button"
      >
      ABOUT
      </Button>
      <button 
      onClick={contactButton} 
      className="btn btn-outline-success"
       type="button"
       >
       CONTACT
       </button>
     </form>
    </div>
   </nav>
</div>
       
    );
};

export default NavBar;