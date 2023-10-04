import React from 'react'
import "./styles/habi.css"
import images from './images.js';

function Habilidades () {
  return (
    <div className='cont' id='Habili'>
        <div className="container " >
        <section className='row  justify-content-around  text-center sect'>
            {/* Titulo */}
            <h2 className='col-11 display-3 mt-5 mb-5 text-white titulo'>HABILIDADES</h2>
 
            {/* LENGUAJES */}
            <article className="col-10 col-md-10 col-lg-2 rounded shadow p-3 mb-3 mb-md-4 bgc">
                <h3 className='text-white pb-5 encabezado'>LENGUAJES</h3>
                <img src={images.javascript} alt='javascript' className='mt-2 iconos-lenguajes'/>
                <div className="row justify-content-center">
                    <img src={images.python} alt='python' className='mt-3 iconos-lenguajes'/>
                </div>
            </article>

            {/* DESARROLLO WEB */}
            <article className="col-10 col-md-10 col-lg-2  rounded shadow pt-3 mb-3 mb-md-4 bgc ">
                <h3 className='text-white pb-1'>DESARROLLO WEB </h3>
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
            <article className="col-10 col-md-10 col-lg-2 rounded shadow pt-3 pb-4 mb-3 mb-md-4 bgc">
                <h3 className='text-white text-lg mb-4'>FRAMEWORK</h3>
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
            <article className="col-10 col-md-10 col-lg-2  rounded shadow p-3 mb-3 mb-md-4 bgc">
                <h3 className='text-white mb-4'>BASE DE DATOS </h3>
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
            <article className="col-10 col-md-10 col-lg-2  rounded shadow p-3 mb-3 mb-md-4 bgc">
                <h3 className='text-white'>CONTROL DE VERSIONES </h3>
                <img src={images.git} alt='git' className='mt-4 iconos-lenguajes'/>  
            </article>
        </section>
        </div>
        </div>
  );
}

export default Habilidades