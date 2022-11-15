import React, { Component } from "react"
import Ingreso from './ingreso'
import Registro from './registro'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Carousel from 'react-bootstrap/Carousel';

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
                        </ul>
                    
                        <div className="col-md-3 text-end">
                            <Ingreso></Ingreso>
                            <Registro></Registro>
                        </div>
                    </header>
                </div>
                <div>
                    <h2 className="asignaturas contanier">Plan Común</h2>
                </div>
                <div>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <div className="Carrusel">
                            <CardGroup>
                                <Card >
                                    <Card.Img variant="top" src={"https://edem.eu/wp-content/uploads/2021/10/calculo-diferencial.jpg"} />
                                    <Card.Body>
                                    <Card.Title>CÁLCULO DIFERENCIAL</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                    <Card.Title>ÁLGEBRA</Card.Title>
                                    <Card.Text>
                                        This card has supporting text below as a natural lead-in to
                                        additional content.{' '}
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                    <Card.Title>PROGRAMACIÓN</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This card has even longer content than the
                                        first to show that equal height action.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="Carrusel">
                            <CardGroup>
                                <Card>
                                    <Card.Img variant="top" src={"https://edem.eu/wp-content/uploads/2021/10/calculo-diferencial.jpg"} />
                                    <Card.Body>
                                    <Card.Title>CÁLCULO</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                    <Card.Title>ÁLGEBRA</Card.Title>
                                    <Card.Text>
                                        This card has supporting text below as a natural lead-in to
                                        additional content.{' '}
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                    <Card.Title>PROGRAMACIÓN</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This card has even longer content than the
                                        first to show that equal height action.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                        </div>
                    </Carousel.Item>
                </Carousel>
                </div>
                <div>
                    <h2 className="asignaturas contanier">Informática</h2>
                </div>
                <div>
                    <Carousel variant="dark">
                        <Carousel.Item>
                            <div className="Carrusel">
                                <CardGroup>
                                    <Card >
                                        <Card.Img variant="top" src={""} />
                                        <Card.Body>
                                        <Card.Title>MINERÍA DE DATOS</Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in
                                            to additional content. This content is a little bit longer.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Img variant="top" src="" />
                                        <Card.Body>
                                        <Card.Title>LENGUAJES Y PARADIGMAS DE PROGRAMACIÓN</Card.Title>
                                        <Card.Text>
                                            This card has supporting text below as a natural lead-in to
                                            additional content.{' '}
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Img variant="top" src="" />
                                        <Card.Body>
                                        <Card.Title>ESTRUCTURA DE DATOS Y ALGORITMOS</Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in
                                            to additional content. This card has even longer content than the
                                            first to show that equal height action.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </CardGroup>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="Carrusel">
                                <CardGroup>
                                    <Card>
                                        <Card.Img variant="top" src={""} />
                                        <Card.Body>
                                        <Card.Title>BASES DE DATOS</Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in
                                            to additional content. This content is a little bit longer.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Img variant="top" src="" />
                                        <Card.Body>
                                        <Card.Title>INTELIGENCIA ARTIFICIAL</Card.Title>
                                        <Card.Text>
                                            This card has supporting text below as a natural lead-in to
                                            additional content.{' '}
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Img variant="top" src="" />
                                        <Card.Body>
                                        <Card.Title>DISEÑO DE SOFTWARE</Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in
                                            to additional content. This card has even longer content than the
                                            first to show that equal height action.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </CardGroup>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div>
                    <h2 className="asignaturas contanier">Core</h2>
                </div>
                <div>
                    <Carousel variant="dark">
                        <Carousel.Item>
                            <div className="Carrusel">
                                <CardGroup>
                                    <Card >
                                        <Card.Img variant="top" src={""} />
                                        <Card.Body>
                                        <Card.Title>CIVILIZACIÓN CONTEMPORÁNEA</Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in
                                            to additional content. This content is a little bit longer.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Img variant="top" src="" />
                                        <Card.Body>
                                        <Card.Title>ESCRITURA ARGUMENTATIVA</Card.Title>
                                        <Card.Text>
                                            This card has supporting text below as a natural lead-in to
                                            additional content.{' '}
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Img variant="top" src="" />
                                        <Card.Body>
                                        <Card.Title>LITERATURA Y HUMANIDADES</Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in
                                            to additional content. This card has even longer content than the
                                            first to show that equal height action.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </CardGroup>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="Carrusel">
                                <CardGroup>
                                    <Card>
                                        <Card.Img variant="top" src={""} />
                                        <Card.Body>
                                        <Card.Title>CIENCIAS</Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in
                                            to additional content. This content is a little bit longer.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Img variant="top" src="" />
                                        <Card.Body>
                                        <Card.Title>ÉTICA</Card.Title>
                                        <Card.Text>
                                            This card has supporting text below as a natural lead-in to
                                            additional content.{' '}
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Img variant="top" src="" />
                                        <Card.Body>
                                        <Card.Title>ARTE Y HUMANIDADES</Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in
                                            to additional content. This card has even longer content than the
                                            first to show that equal height action.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </CardGroup>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            
        )
    }
}