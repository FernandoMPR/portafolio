import React from "react"
import "./styles/footer.css"

function Footer() {
return (
      <footer className='bd-footer py-4 py-md-5 mt-6 bg-body-tertiary text-center p-4 footer-sup'>
        <div className="container d-md-block icons">
          <a href='https://www.linkedin.com/in/mauro-p/' target="_blank" className="bg-linkedin" alt="linkedin">
            <i class="bi bi-linkedin"></i>
            </a>
          <a href='https://github.com/FernandoMPR' target="_blank" className="bg-github" alt="github">
            <i class="bi bi-github"></i>
            </a>
        </div>
      </footer>
)
}

export default Footer