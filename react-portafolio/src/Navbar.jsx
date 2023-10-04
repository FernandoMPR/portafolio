import React from 'react'
import  "./Navbar.css"
import logo from "./img/logo1.png"

function Navigatebar() {

  // <--CAMBIAR A MODO OSCURO O BLANCO-->
  const modoOscuro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill");
  };

  const modoClaro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
  };
  
  const cambiarTema = () => {
    document.querySelector("body").getAttribute("data-bs-theme") === "light" ?
    modoOscuro() : modoClaro();
  }

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary navbar-main p-0">
    <div className="container">
      <a className="navbar-brand"><img src={logo} className='logo' alt="logo"></img></a>
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
        <ul className="nav ms-auto flex-column flex-md-row bd-navbar-nav nav-indicator">
          <li className='nav-item'>
            <a className="nav-link active d-flex flex-column align-items-center" aria-current="page" href="#Inicio" ><i class="bi bi-house-door-fill"/> INICIO</a>
          </li>
          <li className='nav-item'>
            <a className="nav-link d-flex flex-column align-items-center" href="#Habili" ><i class="bi bi-person-lines-fill"/>HABILIDADES</a>
          </li>
          <li className='nav-item'>
            <a className="nav-link d-flex flex-column align-items-center " href="#Proye" ><i class="bi bi-file-earmark-code-fill"/>PROYECTOS</a>
          </li>
          <li className='nav-item'>
            <a className="nav-link d-flex flex-column align-items-center" href="#Contact" ><i class="bi bi-envelope-fill"/>CONTACTO</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navigatebar;