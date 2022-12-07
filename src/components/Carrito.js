import React from 'react';
import DetalleCarrito from './DetalleCarrito';
import { useCarrito } from './CustomProvider';

const Carrito = () => {
    const contexto = useCarrito()
    const carrito = contexto.productos
    return (<div className='contenedor'>
        {carrito.length === 0 ? <h1 className="loading">Upss , parece que no agregaste nada al carrito!</h1> : <DetalleCarrito/>}
        </div>
      
    );
}

export default Carrito