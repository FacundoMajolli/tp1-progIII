import React from "react";
// import "../CSS/Footer.css";

function Footer (props)  {
    console.log(props.numeros);
    return(
        <div>
            <h1>
                (props.numeros())
            </h1>
        </div>
    )

    // return(
    //     <div className="footer"><h3><a href="https://www.instagram.com/facundomajolli/" target="blank"><b>INSTAGRAM</b> </a></h3></div>

    // )
}

export default Footer