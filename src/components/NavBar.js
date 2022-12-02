import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidgets from './CartWidgets';
import {Link} from 'react-router-dom';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="black" variant="dark">
        <Container className='navbarr' >
        <Link to="/"><img className='logonavbar' src='/imagenes/logonavbar.jpg'  /></Link>
          <Nav className="me-auto navConteiner">
         <Link className='navItems' to="/productos">Productos</Link>
         <Link className='navItems' to="/productos/hoddies">Hoddies</Link>
         <Link className='navItems' to="/productos/remeras">Remeras</Link>
         <Link className='navItems' to="/productos/pantalones">Pantalones</Link>
         <Link className='navItems' to="/productos/accesorios">Accesorios</Link>
          </Nav>
          <CartWidgets/>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;