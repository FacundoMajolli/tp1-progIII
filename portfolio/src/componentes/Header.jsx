import React from "react";
import "../CSS/Header.css";
 import yo from "../assets/FM.png";
// import { Button } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={yo} alt="" />
          <p className="nom">FACUNDO MAJOLLI</p>
        </div>
             
        <nav>
          <a href="#somos-proya" className="nav-link">
              Sobre mi
          </a>
          <a href="#nuestros-programas" className="nav-link">
            Lenguajes          </a>
          <a href="#caracteristicas" className="nav-link">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

//ANTERIOR CODIGO
// const Header = () => {

//   return (
//     <div className="header">
//       <h1 className="nom">
//         <i>FACUNDO MAJOLLI</i>{" "}
//       </h1>
//       {/* <div className="foto">
//         <img src={yo} alt="" />
//       </div> */}
//     </div>
//   );
// };

// export default Header;
