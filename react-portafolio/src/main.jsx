import React from 'react'
import ReactDOM from 'react-dom/client'
import Navigatebar from './Navbar.jsx'
import './index.css'
import Person from './yosoy.jsx'
import Habilidades from './habilidades.jsx'
import Contacto from './contacto.jsx'
import Footer from './footer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <Navigatebar />
    <Person />
    <Contacto />
    {/* <Footer />   */}
    </>
)
