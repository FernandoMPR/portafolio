import React from 'react'
import  "./Navbar.css"


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
    <nav className="navbar navbar-expand-lg  fixed-top bg-body-tertiary navbar-main">
    <div className="container">
      <a className="navbar-brand" href="#">Portafolio</a>
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
            <a className="nav-link active" aria-current="page" href="#Inicio" >INICIO</a>
          </li>
          <li className='nav-item'>
            <a className="nav-link " href="#Habili" >HABILIDADES</a>
          </li>
          <li className='nav-item'>
            <a className="nav-link " href="#Contact" >CONTACTO</a>
          </li>
        </ul>
        {/* <--MODO OSCURO--> */}
        <button onClick={ cambiarTema } className='btn rounded-fill'><i id="dl-icon" className='bi bi-moon-fill'></i></button>
      </div>
    </div>
  </nav>
  );
}

export default Navigatebar;