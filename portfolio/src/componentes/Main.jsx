import React from "react";
import "../CSS/Main.css";
import av from "../assets/myAvatar.png";

const Main = () => {
  console.log("Props en main");
  return (
    <main>
      <section id="hero">
      <center><h1 className="titulo">Desarrollador FrontEnd, BackEnd & FullStack</h1><h2>Diseño y codifico cosas hermosas y sencillas, y me encanta lo que hago</h2></center>
        <img src={av} alt="" />
      </section>

      <section id="somos-proya">
        <div className="container">
          <div className="img-container"></div>
          <div className="texto">
            <h2>
              <center>
                Hola! me presento, soy: <span className="color-acento"><b>Facundo Majolli</b> </span>
              </center>
            </h2>
            <p>
              Tengo 23 años, vivo en Tucumán, Argentina. Actualmente soy estudiante de <b>PROGRAMACION</b> en la Universidad Tecnologica Nacional, donde me encuentro cursando el 2do año de la carrera. <br />
              Ademas, estoy trabajando en el Sistema Provincial de Salud. <br />
              En mis tiempos libres juego al rugby en el Club Natación y Gimnasia.
            </p>
          </div>
        </div>
      </section>

      <section id="nuestros-programas">
        <div className="container">
          <h2>CONOCIMIENTOS</h2>
          <div className="programas">
            <div className="carta">
              <h3>FRONT END </h3>
              <p>
                Dentro del desarrollo Front, manejo distintos tipos de lenguajes. Entre ellos los más usados en la actualidad como HTML, CSS Y Javascript. Ademas, utilizo Boostrap y react para reaizar mis proyectos.
              </p>
              <button>VER MÁS</button>
            </div>
            <div className="carta">
              <h3>BACK END</h3>
              <p>
                En la rama de desarrollo Back End, poseo conocimientos en distintos lenguajes de programación, realice distintos proyectos. Los lenguajes que utilizo son Javascript, C# y Python. proyectos manejo Node JS y base de datos como SQLite3 y MySQL Wornkbench.
              </p>
              <button>VER MÁS</button>
            </div>
            <div className="carta">
              <h3>MIS PROYECTOS</h3>
              <p>
                Aqui vas a poder encontrar todos mis proyectos ya sean de desarrollo web como de programas backend. Lo mismos estan subidos a un repositorio por medio de GIT HUB.
              </p>
              <button>VER MÁS</button>
            </div>
          </div>
        </div>
      </section>

      <section id="car">
        <div className="container">
          <h3>Carateristicas personales:</h3>
          <ul>
            <li>✔️Compromiso</li>
            <li>✔️Responsabilidad </li>
            <li>✔️Garantia de trabajo</li>
            <li>✔️Entregas en tiempo y forma</li>
          </ul>
        </div>
      </section>

      {/* <section id="final">
        <h2>CONTACTAME</h2><div className="container"> <button> + INFO</button></div>
       
      </section> */}
    </main>

    // <h1>({props.alumno})</h1>
  );
};

export default Main;
