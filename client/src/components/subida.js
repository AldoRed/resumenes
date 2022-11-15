import React, { Component } from "react"
import Ingreso from './ingreso'
import Registro from './registro'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default class Materias extends Component{

    render(){
        return (
            <div>
                <div className="container">
                    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                        <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                            RESUMENES UAI
                        </a>
                    
                        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="/" className="nav-link px-2 link-secondary">INICIO</a></li>
                            <li><a href="/asignaturas" className="nav-link px-2 link-dark">ASIGNATURAS</a></li>
                            <li><a href="/subida" className="nav-link px-2 link-dark">SUBIR ARCHIVO</a></li>
                        </ul>
                    
                        <div className="col-md-3 text-end">
                            <Ingreso></Ingreso>
                            <Registro></Registro>
                        </div>
                    </header>
                </div>
                <div className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <h1>Sube tu archivo</h1>
                </div>
                <div className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">

                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Titulo de tu resumen</Form.Label>
                        <Form.Control type="text" placeholder="Titulo" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Asignatura</Form.Label>
                        <Form.Control type="text" placeholder="Ramo" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Tema del resumen</Form.Label>
                        <Form.Control type="text" placeholder="De que trata tu resumen" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Escribe una breve descripcion de tu resumen</Form.Label>
                        <Form.Control as="textarea" rows={5} />
                    </Form.Group>

                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Default file input example</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Subir Archivo
                    </Button>
                    </Form>
                </div>
            </div>
            
        )
    }
}