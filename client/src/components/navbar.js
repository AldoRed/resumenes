import React, { Component } from 'react'
import Ingreso from './ingreso'
import Registro from './registro'

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
                <li><a href="/asignaturas" className="nav-link px-2 link-dark">ASIGNATURAS</a></li>
                <li><a href="/subida" className="nav-link px-2 link-dark">SUBIR ARCHIVO</a></li>
              </ul>
        
              <div className="col-md-3 text-end">
                <Ingreso></Ingreso>
                <Registro></Registro>
              </div>
            </header>
          </div>
          <div className="coverPrincipal">

             <a class="btn mx-6 btn-primary" href="/asignaturas">Explorar Materias</a>

          </div>

          <div className='destacados container'>
            <h2>Asignaturas más buscadas</h2>
            <div className='row'>
              <div className='col-12 col-md-4 card'>
                <img className="card-img-top" src={"https://artesliberales.uai.cl/assets/uploads/2019/07/libros-core-curriculum-2.jpg"} alt="CORE"/>
                <div className="card-body">
                  <h5 className="card-title">CORE</h5>
                  <a href="#" className="btn btn-primary">Ver más</a>
                </div>
              </div>

              <div className='col-12 col-md-4 card'>
                <img className="card-img-top" src={"https://edem.eu/wp-content/uploads/2021/10/calculo-diferencial.jpg"} alt="CORE"/>
                <div className="card-body">
                  <h5 className="card-title">CÁLCULO DIFERENCIAL</h5>
                  <a href="#" className="btn btn-primary">Ver más</a>
                </div>
              </div>

              <div className='col-12 col-md-4 card'>
                <img className="card-img-top" src={"data:image/jpeg;base64,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"} alt="CORE"/>
                <div className="card-body">
                  <h5 className="card-title">FÍSICA I</h5>
                  <a href="#" className="btn btn-primary">Ver más</a>
                </div>
              </div>
            </div>
            
          </div>
          </div>
    )
  }
}

export default Navbar