import './Header.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import Form from 'react-bootstrap/Form';

function Header() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <header className='container-fluid bg-danger text-light p-1'>
                <h1 className='display-1'>Página em React</h1>

                <div className="d-flex justify-content-between px-2">
                    <nav className='nav'>
                        <NavLink className="nav-link text-dark" to="/">Home</NavLink>
                        <NavLink className="nav-link text-dark" to="/about">About</NavLink>
                        <NavLink className="nav-link text-dark" to="/contact">Contact</NavLink>
                        <NavLink className="nav-link text-dark" to="/profile">Profile</NavLink>
                    </nav>
                    <ButtonGroup size='lg' aria-label='Login and SingUp buttons'>
                        <Button variant='primary' onClick={handleShow}>Login</Button>
                        <Button variant='secondary'>SignUp</Button>
                    </ButtonGroup>
                </div>
            </header>

            <Modal className='fs-4' show={show} onHide={handleClose} centered>
                <Modal.Header className='bg-warning'>
                    <Modal.Title>Bem-vindo!</Modal.Title>
                </Modal.Header>
                <ModalBody>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control className='p-2' type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control className='p-2' type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Stay logged-in" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </ModalBody>
                <Modal.Footer className='bg-info'>
                    <Button size='lg' onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Header