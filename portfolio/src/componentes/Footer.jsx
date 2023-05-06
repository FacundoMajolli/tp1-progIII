import React from "react";
import "../CSS/Footer.css";

function Footer (props)  {
    console.log(props.numeros);
    return(
        <footer>
            <div className="container">
            <p>&Copy; FacundoMajolli 1999</p>
            </div>
        </footer>
    )

    // return(
    //     <div className="footer"><h3><a href="https://www.instagram.com/facundomajolli/" target="blank"><b>INSTAGRAM</b> </a></h3></div>

    // )
}

export default Footer