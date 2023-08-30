import React from "react";
import imagen from "../img/grafico.jpg";

export const Proyectos = () => {
  return (
    <div className="container">
      <div className="row justify-content-around text-center div-habilidades">
        <h2 className="col-11 display-4 mb-5">Proyectos</h2>
        <div className="col-10 col-md-10 col-lg-4 rounded shadow p-3 mb-3 mb-md-0 position-relative">
          <div className="zoom-container">
            <img src={imagen} className="mt-2 img-proyec" alt="Proyecto" />
            <div className="zoom-overlay">
              <a href="https://github.com/FernandoMPR/graph_React" className="icon-link">
                <i className="bi bi-github"></i>
              </a>
              {/* <a href="#" className="icon-link">
                <i className="bi bi-globe"></i>
              </a> */}
            </div>
          </div>
          <h3>Grafico Dinamico</h3>
          <p>
            Grafico de Barras con Base de datos, mas detalles en barra
            independiente con tabla de datos
          </p>
        </div>
      </div>
    </div>
  );
};
