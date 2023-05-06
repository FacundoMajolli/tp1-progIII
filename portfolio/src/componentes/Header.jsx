import React from "react";
import "../CSS/Header.css";
// import yo from "../assets/2.jpg";
// import { Button } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <div className="container">
        <p className="logo">
          {/* <img src={yo} alt="foto mia" /> */}
          FACUNDO MAJOLLI
        </p>
      </div>
      <div className="container">
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
