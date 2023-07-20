import React from 'react'
import ReactDOM from 'react-dom/client'
import Navigatebar from './Navbar.jsx'
import './index.css'
import Contacto from './contacto.jsx'
import Person from './yosoy.jsx'
import Habilidades from './habi.jsx'
import Footer from './footer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <Navigatebar />
    <Person />
    <Habilidades />
    <Contacto />
    <Footer />
    </>
)
