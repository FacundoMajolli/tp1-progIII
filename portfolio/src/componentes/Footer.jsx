import React from "react";
import "../CSS/Footer.css";

function Footer(props) {
  console.log(props.numeros);
  return (
    <body>
        
    
    <footer>
      <img src="" alt="" className="logo" />
      <div className="social-icons-container">
        <a href="https://www.instagram.com/facundomajolli/" className="social-icon">a</a>
        <a href="https://www.instagram.com/facundomajolli/" className="social-icon">b</a>
        <a href="https://www.instagram.com/facundomajolli/" className="social-icon">c</a>
        <a href="https://www.instagram.com/facundomajolli/" className="social-icon">d</a>
      </div>
      <ul>
        <li className="menu-item">Legal</li>
        <li className="menu-item">Cookies</li>
        <li className="menu-item">Privacy</li>
        <li className="menu-item">Shipping</li>
        <li className="menu-item">Refounds</li>
      </ul>
      <span className="copyright">&copy;FacundoMajolli1999. Todos los derechos reservados.</span>
    </footer></body>
  );

  // return(
  //     <div className="footer"><h3><a href="https://www.instagram.com/facundomajolli/" target="blank"><b>INSTAGRAM</b> </a></h3></div>

  // )
}

export default Footer;
