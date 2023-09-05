import React, { useRef } from "react";
import emailjs from "@emailjs/browser"
import "./styles/contacto.css"


function Contacto() {
    const refForm = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const serviceId ="service_5mi1wmb";
        const templateId ="template_s9wqf2j";
        const apikey ="eodHdz20t9EWEY-Fg";

        emailjs.sendForm(serviceId, templateId, refForm.current ,apikey)
        .then(result => console.log(result.text))
        .catch (error => console.error(error))
    }

    return (
        <div className="cont">
        <div className="container" id="Contact">
            <section className="row justify-content-center div-contacto text-center" >
                <h2 className="col-12 display-4 text-capitalize mb-4 text-white">CONTACTO</h2>
                <article className="col-10 col-md-10 col-lg-10">
                    <form ref={refForm} action="" onSubmit={handleSubmit}>
                        <fieldset className="field-name-email contacto">
                            <input type="text" placeholder="Escriba su nombre" name="username" required className="col-10 col-md-10 col-lg-2 form-control formColor"></input>
                            <input type="email" placeholder="Escriba su email" name="username" id="email" required className="col-10 col-md-10 col-lg-2 form-control inputs formColor"></input>
                        </fieldset>
                        <fieldset className="field-message">
                            <textarea maxLength="250" placeholder="Escribe tu mensaje" name="message" id="" cols="30" rows="20" className="col-10 col-md-10 col-lg-2 form-control formColor"></textarea>
                         </fieldset> 
                         <button className="btn  btn-primary col-10 col-md-10 col-lg-4 mt-5 mb-5">Enviar</button> 
                    </form>    
                </article>
            </section>
        </div>    
        </div>
    )
} 

export default Contacto