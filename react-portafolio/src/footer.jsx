import React from "react"
import "./styles/footer.css"

function Footer() {
return (
      <footer className='bd-footer pt-4 py-md-5 bg-body-tertiary text-center p-4 footer-sup'>
        <div className="container d-md-block d-block icons">
          <a href='https://www.linkedin.com/in/mauro-p/' target="_blank" className="bg-linkedin text-white" alt="linkedin">
            <i class="bi bi-linkedin"/>
            </a>
          <a href='https://github.com/FernandoMPR' target="_blank" className="bg-github text-white" alt="github">
            <i class="bi bi-github"></i>
            </a>
        </div>
      </footer>
)
}

export default Footer