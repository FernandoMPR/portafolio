import React from "react";
import ComponentProyectos from "./components/proyectos";
import Graficoimagen from "./img/grafico.jpg";
import RestauranteImagen from "./img/restaurantes.jpg"

export const Proyectos = () => {

  return (
    <div className="back">
    <div className="container" id="Proye">
      <div className="row justify-content-around text-center div-habilidades pt-5 pb-5">
        <h2 className="col-11 display-4 mb-5 text-white titulo">PROYECTOS</h2>
        <ComponentProyectos titulo={"Grafico de Analisis de Datos"} descripcion="Grafico de barras actualizable mediante base de datos, con detalles profundos de analisis de datos." github="https://github.com/FernandoMPR/graph_React" foto={Graficoimagen}/>
        <ComponentProyectos titulo="Lista de Restaurantes" descripcion="CRUD de lista de restaurantes con authentificacion de usuario para metodos POST DELETE Y PUT." github="https://github.com/FernandoMPR/RestaurantesApp" foto={RestauranteImagen}/>
      </div>
    </div>
    </div>
  );
};
