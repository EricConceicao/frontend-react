// Libary imports //
import { useEffect, useState } from 'react';

// Component imports //
import Header from '../layouts/Header.jsx';
import Content from '../layouts/Content.jsx';
import Footer from '../layouts/Footer.jsx';
import CardUser from '../ui/CardUser.jsx';
import Sidebar from '../layouts/Sidebar.jsx';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
function About() {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {

    async function fetchUsers() {
      const data = await fetch('http://localhost:3000/user/list');
      const userData = await data.json();

      setUsers(userData.users);
    }
    
    fetchUsers();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const newUser = { 
      email: e.target.email.value, 
      name: e.target.name.value, 
      photo: e.target.photo.value, 
      password: e.target.password.value,
    };

    const response = await fetch('http://localhost:3000/user', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newUser),
    });

    if (response.ok) {
      const data = await response.json();

      alert(data.success);
      setShow(false);
    }
  }

    return (
      <div className='About'>
        <Header />
        

        <Sidebar>
          <h2>Users</h2>
          <Button onClick={handleShow} size='md' variant='warning'>Create User</Button>

          <Modal className='fs-4' show={show} onHide={handleClose} centered>
            <Modal.Header className='bg-warning'>
                <Modal.Title>Bem-vindo!</Modal.Title>
            </Modal.Header>
            <ModalBody>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label>Username</Form.Label>
                      <Form.Control name='name' className='p-2' type="text" placeholder="Enter username" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control name='email' className='p-2' type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                      </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control name='password' className='p-2' type="password" placeholder="Password" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPhoto">
                      <Form.Label>Photo</Form.Label>
                      <Form.Control name='photo' className='p-2' type="text" placeholder="Your photo link" />
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

          <div className='d-flex text-center justify-content-center align-items-center overflow-auto' style={{minHeight: "16em"}}>
            {users.length > 0 ? users.map(data => <CardUser user={data} key={data.id}/>) : <span className='spinner-border'></span>}
          </div>
        </Sidebar>

        <Content>
          <h1>About</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            In doloribus ipsum nihil autem repellendus dolorem unde 
            pariatur, rem sunt totam. Laboriosam voluptates nulla aut 
            nam illo qui delectus, in corporis est. Maiores, reprehenderit 
            hic, natus quia nemo esse porro tempore blanditiis aliquid 
            fugit autem aperiam eos eius velit laboriosam perspiciatis qui 
            ad? Quibusdam ipsum nesciunt illo tempora facilis dolores quis 
            repudiandae sapiente corrupti earum voluptate, numquam iure? 
            Temporibus dolore voluptatum magnam dolor molestiae rem dicta 
            minima, dolorem aut in asperiores mollitia quod vitae 
            repudiandae voluptates atque beatae eveniet est unde! Omnis 
            ad ipsa delectus, perspiciatis iste quasi distinctio, ipsam 
            consequatur unde hic adipisci reiciendis laudantium atque esse 
            debitis. Minus nulla alias vero fugiat ratione ea dolore harum 
            consequatur deleniti cupiditate.
          </p>
        </Content>

        <Footer />
      </div>
    );
}

export default About