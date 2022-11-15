import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

// Todo: arreglar el boton Registrarse para q on hover sea vea bien
function Ingreso() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button variant="primary" type='button' className='btn btn-primary me-2' onClick={handleShow}>
        Iniciar Sesión
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Inicia Sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <div class="">
        <div class="card bg-white text-dark">
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <div class="form-outline form-white mb-4">
                <label class="form-label" for="typeEmailX">Email</label>
                <input type="email" id="typeEmailX" class="form-control form-control-lg" placeholder='ejemplo@alumnos.uai.cl'/>
              </div>

              <div class="form-outline form-white mb-4">
                <label class="form-label" for="typePasswordX">Password</label>
                <input type="password" id="typePasswordX" class="form-control form-control-lg" />
              </div>

              <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

              <button class="btn btn-outline-dark btn-lg mx-1" type="submit">Iniciar Sesión</button>
            </div>
          </div>
        </div>
      </div>
        </Modal.Body>
      </Modal>
    </>
  );
}


export default Ingreso