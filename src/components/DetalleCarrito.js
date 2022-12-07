import React from 'react';
import { Link } from 'react-router-dom';
import { useCarrito } from './CustomProvider';

import Card from 'react-bootstrap/Card';
const DetalleCarrito = () => {
    
    const contexto = useCarrito()
    const { vaciarCarrito } = useCarrito()
    const carrito  = contexto.productos

    return (
        <div className='contenedor-carrito'>
            {carrito.map((product)=>{
                return (
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                      <Card.Title> {product.cantidad} {product.title} </Card.Title>
                      <Card.Text>
                        Precio Total: ${product.price*product.cantidad}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                )})
            }
            <div>
                <Link to="/carrito/compra"><button className='btn-compra'>Confirmar compra</button> </Link>
                <button onClick={vaciarCarrito} className='btn-vaciado'>Vaciar Carrito</button>
            </div>
        </div>
        );
}

export default DetalleCarrito;