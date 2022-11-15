import React, { Component } from "react"
import Ingreso from './ingreso'
import Registro from './registro'
import Footer from './footer'
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
                            <li><a href="#" className="nav-link px-2 link-secondary">INICIO</a></li>
                            <li><a href="/asignaturas" className="nav-link px-2 link-dark">ASIGNATURAS</a></li>
                        </ul>
                    
                        <div className="col-md-3 text-end">
                            <Ingreso></Ingreso>
                            <Registro></Registro>
                        </div>
                    </header>
                </div>
                <div className="coverAsignaturas">
                    <h2>Plan Común</h2>
                </div>
                <div>
                <Carousel variant="dark" interval={null}>
                    <Carousel.Item>
                        <div className="Carrusel">
                            <h3 className="semestres contanier">1er Semestre</h3>
                            <CardGroup>
                                <Card >
                                    <Card.Img variant="top" src={"https://edem.eu/wp-content/uploads/2021/10/calculo-diferencial.jpg"} />
                                    <Card.Body>
                                    <Card.Title style={{ height: '3.5rem'}}>CÁLCULO DIFERENCIAL</Card.Title>
                                    <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                    <Card.Title style={{ height: '3.5rem'}}>ÁLGEBRA</Card.Title>
                                    <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                    <Card.Title style={{ height: '3.5rem'}}>PROGRAMACIÓN</Card.Title>
                                    <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="Carrusel">
                        <h3 className="semestres contanier">2do Semestre</h3>
                            <CardGroup>
                                <Card>
                                    <Card.Img variant="top" src={"https://edem.eu/wp-content/uploads/2021/10/calculo-diferencial.jpg"} />
                                    <Card.Body>
                                    <Card.Title style={{ height: '3.5rem'}}>CÁLCULO INTEGRAL</Card.Title>
                                    <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                    <Card.Title style={{ height: '3.5rem'}}>ÁLGEBRA LINEAL</Card.Title>
                                    <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                    <Card.Title style={{ height: '3.5rem'}}>FÍSICA I</Card.Title>
                                    <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                    <Card.Title style={{ height: '3.5rem'}}>TALLER DE INTRODUCCIÓN A LA INGENIERÍA</Card.Title>
                                    <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="Carrusel">
                        <h3 className="semestres contanier">3er Semestre</h3>
                            <CardGroup>
                                <Card>
                                    <Card.Img variant="top" src={"https://edem.eu/wp-content/uploads/2021/10/calculo-diferencial.jpg"} />
                                    <Card.Body>
                                    <Card.Title style={{ height: '3.5rem'}}>CÁLCULO MULTIVARIABLES</Card.Title>
                                    <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                    <Card.Title style={{ height: '3.5rem'}}>PROBABILIDAD Y ESTADÍSTICA</Card.Title>
                                    <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                    <Card.Title style={{ height: '3.5rem'}}>FÍSICA II</Card.Title>
                                    <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                    <Card.Title style={{ height: '3.5rem'}}>FUNDAMENTOS DE CIENCIAS AMBIENTALES</Card.Title>
                                    <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="Carrusel">
                        <h3 className="semestres contanier">4to Semestre</h3>
                            <CardGroup>
                                <Card>
                                    <Card.Img variant="top" src={"https://edem.eu/wp-content/uploads/2021/10/calculo-diferencial.jpg"} />
                                    <Card.Body>
                                    <Card.Title style={{ height: '3.5rem'}}>ECUACIONES DIFERENCIALES</Card.Title>
                                    <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                    <Card.Title style={{ height: '3.5rem'}}>FÍSICA III</Card.Title>
                                    <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                    <Card.Title style={{ height: '3.5rem'}}>FUNDAMENTOS DE CIENCIAS DE DATOS</Card.Title>
                                    <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                    <Card.Title style={{ height: '3.5rem'}}>TALLER DE DISEÑO EN INGENIERÍA</Card.Title>
                                    <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                        </div>
                    </Carousel.Item>
                </Carousel>
                </div>
                <div className="coverAsignaturas">
                    <h2>Informática</h2>
                </div>
                <div>
                    <Carousel variant="dark" interval={null}>
                        <Carousel.Item>
                            <div className="Carrusel">
                                <CardGroup>
                                    <Card >
                                        <Card.Img variant="top" src={""} />
                                        <Card.Body>
                                        <Card.Title style={{ height: '3.5rem'}}>MINERÍA DE DATOS</Card.Title>
                                        <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Img variant="top" src="" />
                                        <Card.Body>
                                        <Card.Title style={{ height: '3.5rem' }}>LENGUAJES Y PARADIGMAS DE PROGRAMACIÓN</Card.Title>
                                        <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Img variant="top" src="" />
                                        <Card.Body>
                                        <Card.Title style={{ height: '3.5rem' }}>ESTRUCTURA DE DATOS Y ALGORITMOS</Card.Title>
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
                                        <Card.Title style={{ height: '3.5rem'}}>BASES DE DATOS</Card.Title>
                                        <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Img variant="top" src="" />
                                        <Card.Body>
                                        <Card.Title style={{ height: '3.5rem'}}>INTELIGENCIA ARTIFICIAL</Card.Title>
                                        <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Img variant="top" src="" />
                                        <Card.Body>
                                        <Card.Title style={{ height: '3.5rem'}}>DISEÑO DE SOFTWARE</Card.Title>
                                        <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </CardGroup>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="coverAsignaturas">
                    <h2>Core</h2>
                </div>
                <div>
                    <Carousel variant="dark" interval={null}>
                        <Carousel.Item>
                            <div className="Carrusel">
                                <CardGroup>
                                    <Card >
                                        <Card.Img variant="top" src={""} />
                                        <Card.Body>
                                        <Card.Title style={{ height: '3.5rem'}}>CIVILIZACIÓN CONTEMPORÁNEA</Card.Title>
                                        <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Img variant="top" src="" />
                                        <Card.Body>
                                        <Card.Title style={{ height: '3.5rem'}}>ESCRITURA ARGUMENTATIVA</Card.Title>
                                        <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Img variant="top" src="" />
                                        <Card.Body>
                                        <Card.Title style={{ height: '3.5rem'}}>LITERATURA Y HUMANIDADES</Card.Title>
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
                                        <Card.Title style={{ height: '3.5rem'}}>CIENCIAS</Card.Title>
                                        <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Img variant="top" src="" />
                                        <Card.Body>
                                        <Card.Title style={{ height: '3.5rem'}}>ÉTICA</Card.Title>
                                        <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Img variant="top" src="" />
                                        <Card.Body>
                                        <Card.Title style={{ height: '3.5rem'}}>ARTE Y HUMANIDADES</Card.Title>
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