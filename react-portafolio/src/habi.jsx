import React from 'react'
import "./styles/habi.css"
import images from './images.js';

function Habilidades () {
  return (
        <div className="container" id='Habili'>
        <section className='row  justify-content-around  text-center div-habilidades'>
            {/* Titulo */}
            <h2 className='col-11 display-4  mb-5'>HABILIDADES</h2>
 
            {/* LENGUAJES */}
            <article className="col-10 col-md-10 col-lg-2 rounded shadow p-3 mb-3 mb-md-0 div-hab">
                <h3 className='text-capitalize'>LENGUAJES</h3>
                <img src={images.javascript} alt='javascript' className='mt-3 iconos-lenguajes'/>
                <div className="row justify-content-center">
                    <img src={images.python} alt='python' className='mt-3 iconos-lenguajes'/>
                </div>
            </article>

            {/* DESARROLLO WEB */}
            <article className="col-10 col-md-10 col-lg-2  rounded shadow p-3 mb-3 mb-md-0">
                <h3 className='text-capitalize'>DESARROLLO WEB </h3>
                <div className="row">
                <div className="col-12">
                    <img src={images.css} alt='css' className='d-inline-block mt-3 iconos-lenguajes'/>
                </div>
                <div className="col-12">
                    <img src={images.html} alt='html' className='d-inline-block mt-3 iconos-lenguajes'/>
                </div>
                <div className="col-12">
                    <img src={images.nodejs} alt='nodejs' className='d-inline-block mt-3 iconos-lenguajes'/>
                </div>
                </div>
            </article>
            
            {/* FRAMEWORKS */}
            <article className="col-10 col-md-10 col-lg-2 rounded shadow p-3 mb-3 mb-md-0">
                <h3 className='text-capitalize'>FRAMEWORKS </h3>
                <div className='row'>
                <div className="col-12">
                    <img src={images.bootstrap} alt='bootstrap' className='d-inline-block mt-3 iconos-lenguajes'/>
                </div> 
                <div className="col-12">    
                    <img src={images.react} alt='react' className='d-inline-block mt-4 iconos-lenguajes'/>
                </div> 
                <div className="col-12">    
                    <img src={images.django} alt='django' className='mt-4 iconos-lenguajes'/>
                </div>    
                </div>
            </article>

            {/* BASE DE DATOS */}
            <article className="col-10 col-md-10 col-lg-2  rounded shadow p-3 mb-3 mb-md-0">
                <h3 className='text-capitalize'>BASE DE DATOS </h3>
                <div className="row">
                <div className="col-12">   
                    <img src={images.mongo} alt='mongodb' className='mb-3 iconos-lenguajes'/>
                </div>    
                <div className="col-12">       
                    <img src={images.postgresql} alt='postgresql' className='mb-3 iconos-lenguajes'/>
                </div>       
                </div>
            </article>

            {/* CONTROL DE VERSIONES */}
            <article className="col-10 col-md-10 col-lg-2  rounded shadow p-3 mb-3 mb-md-0">
                <h3 className='text-capitalize'>CONTROL DE VERSIONES </h3>
                <img src={images.git} alt='git' className='mt-3 iconos-lenguajes'/>  
            </article>

        </section>
        </div>
  );
}

export default Habilidades