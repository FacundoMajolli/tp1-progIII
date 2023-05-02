import React from 'react'
import Main from '../componentes/Main';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';


export const Home = () => {
  return (
    <div>
        <Header/>
        <Main/>
        <Footer/>
    </div>
  )
}

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

