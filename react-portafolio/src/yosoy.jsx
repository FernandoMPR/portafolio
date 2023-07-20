import React from 'react'
import  "./yosoy.css"
import Yo from "./img/Yo.jpg"

function Person () {
  return (
            <header className='container'>
            <div className='row align-content-center header-main' id='Inicio'>
              <div className='col-md-7 text-center text-md-start'>
                <h1 className='display-2'>
                <span className='d-block'>Hola,soy</span>
                Mauro Pichardo
                </h1>
                <p className='text-muted fw-light text-capitalize'>Y soy</p>
                <p className='text-muted fw-light text-capitalize'>Desarrollador Fullstack autodidacta en busca de mejorar mis habilidades personales y profesionales</p>
                </div>
              <div className='col-11 col-md-4'> 
                <img src={Yo} alt="FotoPerfil" className='w-100 foto'/>
              </div>
              </div> 
            </header>
  );
}

export default Person