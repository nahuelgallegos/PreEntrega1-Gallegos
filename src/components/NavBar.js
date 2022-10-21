import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidgets from './CartWidgets';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="black" variant="dark">
        <Container className='navbarr' >
          <img className='logonavbar' src='/imagenes/logonavbar.jpg'/>
          <Nav className="me-auto navConteiner">
            <Nav.Link className='navItems' href="#home">Hoddies</Nav.Link>
            <Nav.Link className='navItems' href="#features">Remeras</Nav.Link>
            <Nav.Link className='navItems' href="#pricing">Pantalones</Nav.Link>
            <Nav.Link className='navItems' href="#pricing">Accesorios</Nav.Link>
          </Nav>
          <CartWidgets/>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;