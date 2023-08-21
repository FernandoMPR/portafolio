import React from 'react'
import ReactDOM from 'react-dom/client'
import Navigatebar from './Navbar.jsx'
import './index.css'
import Contacto from './contacto.jsx'
import Person from './yosoy.jsx'
import Habilidades from './habi.jsx'
import Footer from './footer.jsx'
import { Proyectos } from './components/proyects.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <Navigatebar />
    <Person />
    <Habilidades />
    <Proyectos />
    <Contacto />
    <Footer />
    </>
)
