import React from "react";
import Main from "../componentes/Main";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";

export const Home = () => {
    
const numeros = [2,8,12,1,18]

const alumno = {id:1,nombre:"alvaro",apellido:"llovera",edad:32}
  // const nombre = "Facundo";
  // const saludar = () => {
  //   return (
  //     <div><h3>(props.saludar())</h3></div>
  //   )
    // console.log ("welcome to react")
  // }
  return (
    <div>
      <Header  />
      <Main alumno={alumno}/>
      <Footer numeros={numeros}/>
    </div>
  );
};

export default Home;

// import React from "react";
// import Main from "../componentes/Main";
// import "./css/Home.css"

// function Home(){
//     const nombre = "Facundo"
//     let array = [1,2,3,4,5,6];
//     for (const item of array){
//         console.log(item);
//     }

//     return(
//         <div className="div">
//             <h1 className="h1">
//                 bienvenido {nombre}
//             </h1>
//         </div>

// )
// }
