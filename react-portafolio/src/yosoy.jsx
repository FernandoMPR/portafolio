import React from 'react'
import  "./yosoy.css"
import Yo from "./img/Yo.jpg"
import cv from "./assets/CV.pdf"

function Person () {
  return (
    <div className='back'>
            <header className='container'>
            <div className='row justify-content-center align-content-center align-items-center header-main' id='Inicio'>
              <div className='col-lg-8 col-md-10 col-12  text-start text-md-starts '>
                <h1 className='display-2 mb-0 p1'>
                <span className='d-block '>Hola,yo soy Mauro Pichardo</span>
                </h1>
                <h2 className='mb-0 p2'>Desarrollador Fullstack</h2>
                <p className='text-capitalize mb-0 p3'>Creador de paginas web con lo ultimo en tecnologia</p>
                <button type="button" class="btn btn-outline-primary b1">
                  <a href={cv} target="_blank" download className="btn-link cv">
                  Resume <i class="bi bi-file-person"></i></a></button>
                </div>
              <div className='col-10 col-md-4 '> 
                <div className='profile-picture-container'>
                <img src={Yo} alt="FotoPerfil" className='profile-picture img-fluid'/>
                </div>
              </div>
              </div> 
            </header >
            </div>
  );
}

export default Person