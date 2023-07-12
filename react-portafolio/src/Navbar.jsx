import React from 'react'
import  "./App.css"




function Navigatebar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light navbar-main" >
    <div className="container-fluid">
      <a className="navbar-brand " href="#">Portafolio</a>
      <button 
       className="navbar-toggler"
       type="button" 
       data-bs-toggle="collapse" 
       data-bs-target="#navbarNavAltMarkup" 
       aria-controls="navbarNavAltMarkup" 
       aria-expanded="false" 
       aria-label="Barra de Navegacion">

        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="nav ms-auto text-dark flex-column flex-md-row">
          <a className="nav-link active " aria-current="page" href="#Inicio" >INICIO</a>
          <a className="nav-link " href="#Habilidades" >HABILIDADES</a>
          <a className="nav-link " href="#Contact" >CONTACTO</a>
        </div>
      </div>
    </div>
  </nav>
  );
}

export default Navigatebar;