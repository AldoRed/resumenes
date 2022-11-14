import React, { Component } from 'react'
// Todo: arreglar el boton Registrarse para q on hover sea vea bien
export class Ingreso extends Component {
  render() {
    return (
      <div>
         <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
              <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                RESUMENES UAI
              </a>
            </header>  
          </div>
<section className='vh-100 gradient-custom loginSection'>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-6">
        <div className="card bg-dark text-white" style={{borderRadius: "1rem"}}>
          <div className="card-body p-5 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">

              <h2 className="fw-bold mb-2 text-uppercase">Bienvenid@ a Resúmenes UAI</h2><br/>
              <div className="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" placeholder='Usuario' className="form-control form-control-lg" />
              </div>

              <div className="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" placeholder='Contraseña' className="form-control form-control-lg" />
              </div>

              <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">¿Olvidaste tu contraseña?</a></p>
                <div className="container">
                  <a href="#" className="btn btn-primary btn-lg mx-3">Iniciar Sesión</a>

                  <a href="#" className="btn bg-white fg-dark btn-lg mx-3">Registrarse</a>
                </div> 

            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
    )
  }
}


export default Ingreso