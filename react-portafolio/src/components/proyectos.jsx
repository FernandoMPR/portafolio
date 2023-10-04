
const ComponentProyectos  = (props) => {
return (
 <>  
 <div className="col-10 col-md-10 col-lg-4 rounded shadow p-3 mb-3 mb-md-0 position-relative cont">
          <div className="zoom-container">
            <img src={props.foto} className="mt-2 img-proyec" alt="Proyecto" />
            <div className="zoom-overlay">
              <a href={props.github} className="icon-link" target="_blank">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>
          <h3 className="text-white mt-4 font-weight-bold">{props.titulo}</h3>
          <p className="text-white text-justify">
            {props.descripcion}
          </p> 
        </div>
        </> 
)
}

export default ComponentProyectos