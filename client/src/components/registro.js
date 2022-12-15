import { useMutation } from "@apollo/client";
import { useState } from "react";
import { addUserMutation } from "../queries/queries";
import Modal from 'react-bootstrap/Modal';

// Agrega un usuario: 
const Registro = () => {
    const [show, setShow] = useState(false);
    const [addTodo, { data, loading, error }] = useMutation(addUserMutation);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (error) return (<h1>error</h1>);
        if (loading) return (<h1>Loading ...</h1>);
        addTodo({
            variables: {
                username: username,
                password: password,
                email: email
            }
        });
        console.log(data);
        handleClose();
    }
    return (
        <>
            <button variant="primary" type='button' className='btn btn-outline-primary me-2' onClick={handleShow}>
                Registrarse
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Registrate</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="card bg-white text-dark">
                            <div className="card-body p-5 text-center">

                                <div className="mb-md-5 mt-md-4 pb-5">

                                    <div className="form-outline form-white mb-4">
                                        <label className="form-label" for="typeEmailX">Nombre de usuario</label>
                                        <input type="text" className="form-control form-control-lg" placeholder='Usuario' value={username} onChange={e => setUsername(e.target.value)} required />
                                    </div>

                                    <div className="form-outline form-white mb-4">
                                        <label className="form-label" for="typeEmailX">Email</label>
                                        <input type="email" id="typeEmailX" className="form-control form-control-lg" placeholder='ejemplo@alumnos.uai.cl' value={email} onChange={e => setEmail(e.target.value)} required />
                                    </div>

                                    <div className="form-outline form-white mb-4">
                                        <label className="form-label" for="typePasswordX">Constraseña</label>
                                        <input type="password" id="typePasswordX" className="form-control form-control-lg" value={password} onChange={e => setPassword(e.target.value)} required />
                                    </div>

                                    <button className="btn btn-outline-dark btn-lg mx-1" type="submit">Registrarse</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );

}
export default Registro;
