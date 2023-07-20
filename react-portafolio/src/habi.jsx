import React from 'react'
import "./styles/habi.css"
import images from './images.js';

function Habilidades () {
  return (
        <section className='row justify-content-around text-center div-habilidades' id='Habili'>
            <h2 className='col-12 display-4 text-capitalize mb-5'>HABILIDADES</h2>

            {/* LENGUAJES */}
            <article className="col-10 col-md-10 col-lg-3 rounded shadow mb-3">
                <h3 className='text-capitalize'>LENGUAJES</h3>
                <img src={images.javascript} alt='javascript' className='d-inline-bloc mb-3 iconos-lenguajes'/>
                <img src={images.python} alt='python' className='bg-gradient d-inline-block mb-3 iconos-lenguajes'/>
            </article>

            {/* DESARROLLO WEB */}
            <article className="col-10 col-md-10 col-lg-2  rounded shadow p-3">
                <h3 className='text-capitalize'>DESARROLLO WEB </h3>
                <img src={images.css} alt='css' className='bg-gradient d-inline-block mb-3 iconos-lenguajes'/>
                <img src={images.html} alt='html' className='bg-gradient d-inline-block mb-3 iconos-lenguajes'/>
                <img src={images.nodejs} alt='nodejs' className='bg-gradient d-inline-block mb-3 iconos-lenguajes'/>
            </article>
            
            {/* FRAMEWORKS */}
            <article className="col-9 col-md-10 col-lg-2 rounded shadow p-3 mb-3 mb-md-0">
                <h3 className='text-capitalize'>FRAMEWORKS </h3>
                <img src={images.bootstrap} alt='bootstrap' className='bg-gradient d-inline-block mb-3 iconos-lenguajes'/>
                <img src={images.react} alt='react' className='bg-gradient d-inline-block mb-3 iconos-lenguajes'/>
                <img src={images.django} alt='django' className='bg-gradient d-inline-block mb-3 iconos-lenguajes'/>
            </article>

            {/* BASE DE DATOS */}
            <article className="col-9 col-md-10 col-lg-2  rounded shadow p-3 mb-3 mb-md-0">
                <h3 className='text-capitalize'>BASE DE DATOS </h3>
                <img src={images.mongo} alt='mongodb' className='mongo'/>
                <img src={images.postgresql} alt='postgresql' className='postgresql'/>   
            </article>

            {/* CONTROL DE VERSIONES */}
            <article className="col-10 col-md-10 col-lg-2  rounded shadow p-3 mb-3 mb-md-0">
                <h3 className='text-capitalize'>CONTROL DE VERSIONES </h3>
                <img src={images.git} alt='git' className='git'/>  
            </article>

        </section>
  );
}

export default Habilidades