import React from "react";
import "../CSS/Main.css";

const Main = () => {
  console.log("Props en main");
  return (
    <main>
      <section id="hero">
        <h1>Soy un estudiante de programacion</h1>
        <button>Ver mas</button>
      </section>
      <section id="somos-proya">
        <div className="img-container"></div>
        <div className="texto">
          <h2>
            {" "}
            <center>
              soy <span className="color-acento">facundomajolli</span>{" "}
            </center>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            corrupti libero dicta a. Aliquam odio explicabo, autem sequi
            voluptates consequatur in quibusdam et cum porro cupiditate ad iure
            eos provident? In, veritatis minus tempore a culpa exercitationem
            similique nulla debitis esse quae amet voluptates at magnam
            explicabo velit quis, distinctio fugiat rem maiores autem. Molestiae
            nisi et voluptas distinctio. Quo.
          </p>
        </div>
      </section>
      <section id="nuestros-programas">
        <div className="container">
          <h2>MIS LENGUAJES</h2>
          <div className="programas">
            <div className="carta">
              <h3>FULL STACK </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                ab nisi eligendi sit perspiciatis quas assumenda provident
                repellendus saepe officiis ea laboriosam facere impedit
                necessitatibus, enim eaque praesentium, dolore est!
              </p>
              <button>+ info</button>
            </div>
            <div className="carta">
              <h3>FRONT END</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                ab nisi eligendi sit perspiciatis quas assumenda provident
                repellendus saepe officiis ea laboriosam facere impedit
                necessitatibus, enim eaque praesentium, dolore est!
              </p>
              <button>+ info</button>
            </div>
            <div className="carta">
              <h3>BACK END</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                ab nisi eligendi sit perspiciatis quas assumenda provident
                repellendus saepe officiis ea laboriosam facere impedit
                necessitatibus, enim eaque praesentium, dolore est!
              </p>
              <button>+ info</button>
            </div>
          </div>
        </div>
      </section>
      <section id="caracteristicas">
        <div className="container">
          <ul>
            <li>🙂compromiso </li>
            <li>🙂responsabilidad </li>
            <li>🙂buena predisposciion </li>
            <li>🙂 lalala</li>
          </ul>
        </div>
      </section>
      <section id="final">
        <h2>Lista para programar</h2>
        <button>dale</button>
      </section>
    </main>

    // <h1>({props.alumno})</h1>
  );
};

export default Main;
