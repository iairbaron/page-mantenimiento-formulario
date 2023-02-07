import React from "react";
import logo from "../../../images/ca822f_2200d6424a8c407d889ab01ed17b5eb5_mv2.png";
import 'bootstrap/dist/css/bootstrap.css';


const Header = () => {
  return (
    <>
     <nav style={{margin:"2% 3%",padding:"2", gap:"30px", textAlign:"center",justifyContent:"center"}} class="navbar navbar-expand-lg navbar-light bg-light">
  <img src={logo} style={{maxWidth:"9.2%",minWidth:"9.2%", height:"auto" }} />
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav" style={{ gap:"10px" , fontFamily: "Lato, sans-serif", fontSize:"1.3rem" }} >
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contacto</a>
      </li>
    </ul>
  </div>
</nav>
    </>
  );
};

export default Header;
