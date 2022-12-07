import React, { useRef, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './Firebase'
import { useCarrito } from './CustomProvider';

const FinalizarCompra = () => {

    const carrito = useCarrito()
    const productos = carrito.productos
    const { vaciarCarrito }= carrito 
    const nameUser = useRef('')
    const emailUser = useRef('')
    const telefonoUser = useRef('')
    const [id, setId] = useState('')
    
    const submitFunction = (e) => {     
        e.preventDefault()
        const ordenCompra = {
            user: {
                nombre: nameUser.current.value,
                email: emailUser.current.value,
                telefono: telefonoUser.current.value
            },
            productos: [...productos]
        }

        const setColeccion = collection(db, "ordenes")
        const setOrdenes = addDoc(setColeccion, ordenCompra)
        
        setOrdenes
        .then((order) => {
            setId(order.id)
        })
        .catch((error)=>{
            console.log(error)
        })
        
        borrarFormulario(e)
    }        
    
    const borrarFormulario = (e) =>{
        vaciarCarrito()
        e.target.reset()
    }
    
    return (
        <div className='contenedor'>
            {id ? <h1>Orden generada con exito, su id es {id}</h1> :    
            <div className='formulario-container'>
            <h2>Ingresa tus datos para realizar la compra</h2>
            
            <form onSubmit={submitFunction} className='formulario-compra'>
                <p>Ingresa tus datos</p>
                <input ref={nameUser} type="text" placeholder='name' className='input-form' required />
                <input ref= {emailUser} type="email" placeholder='pluggest_arg@gmail.com'  required/>
                <input ref={telefonoUser} type="number" placeholder='1154068422' required/>
                <button className='btn-vaciado'>Cargar orden</button>
            </form>
            </div>}
        </div>
    );
}

export default FinalizarCompra