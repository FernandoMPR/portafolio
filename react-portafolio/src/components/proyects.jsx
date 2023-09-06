import React from "react";
import imagen from "../img/grafico.jpg";

export const Proyectos = () => {
  return (
    <div className="back">
    <div className="container" id="Proye">
      <div className="row justify-content-around text-center div-habilidades pt-5 pb-5">
        <h2 className="col-11 display-4 mb-5 text-white titulo">PROYECTOS</h2>
        <div className="col-10 col-md-10 col-lg-4 rounded shadow p-3 mb-3 mb-md-0 position-relative cont">
          <div className="zoom-container">
            <img src={imagen} className="mt-2 img-proyec" alt="Proyecto" />
            <div className="zoom-overlay">
              <a href="https://github.com/FernandoMPR/graph_React" className="icon-link">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>
          <h3 className="text-white">Grafico Dinamico</h3>
          <p className="text-white">
            Grafico de Barras con Base de datos, mas detalles en barra
            independiente con tabla de datos
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};
