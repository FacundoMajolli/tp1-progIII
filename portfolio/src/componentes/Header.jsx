import React from "react";
import "../CSS/Header.css";
// import yo from "../assets/1.jpeg";
// import { Button } from "react-bootstrap";



const Header = (props) => {
console.log("En header me llega esta: prop: ", props)


  return (
    <div className="header">
      <h1 className="nom">
        <i>FACUNDO MAJOLLI</i>{" "}
      </h1>
      {/* <div className="foto">
        <img src={yo} alt="" />
      </div> */}
    </div>
  );
};

export default Header;
