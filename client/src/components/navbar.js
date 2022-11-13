import React, { Component } from 'react'

export class Navbar extends Component {
  
    render() {

    
        return (
          
          <div>
            <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
              <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                RESUMENES UAI
              </a>
        
              <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="#" className="nav-link px-2 link-secondary">INICIO</a></li>
                <li><a href="#" className="nav-link px-2 link-dark">ASIGNATURAS</a></li>
              </ul>
        
              <div className="col-md-3 text-end">
                <button type="button" className="btn btn-outline-primary me-2">Iniciar Sesión</button>
                <button type="button" className="btn btn-primary">Registro</button>
              </div>
            </header>
          </div>
          <div className="coverPrincipal">
            <button type="button" className='btn btn-default'>Explorar Materias</button>
          </div>

          </div>
    )
  }
}

export default Navbar