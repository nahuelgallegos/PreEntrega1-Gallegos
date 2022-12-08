import { useState } from 'react'
import {  useCarrito } from './CustomProvider'
import ItemCount from './ItemCount'
import Card from 'react-bootstrap/Card';

const ItemDetail = ({product}) => {

  const {agregarAlCarrito} = useCarrito()
  const [cantidad , setCantidad] = useState(1)
  const [confirmado, setConfirmado] = useState(false)

  const handleOnAdd = (cantidad) => {
    setCantidad(cantidad)
    setConfirmado(true)
  }

  const handleClick = () => {
    agregarAlCarrito(product , cantidad)
  }

  
  return  (
    <div className=' product_card card'>
    <Card border="dark" style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {product.image} />
      <Card.Body>
        <Card.Title>{product.title} </Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <ItemCount init={cantidad} handleOnAdd={handleOnAdd} />
      </Card.Body>
      {confirmado && <button onClick={handleClick}>Agregar al carrito</button>}
    </Card>
    </div>)
  
}
export default ItemDetail