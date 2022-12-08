import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Products = ({title, price , image , id}) => {

  return (
  <Card className='cards' border="dark" style={{ width: '18rem'}}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title> {title} </Card.Title>
    <Card.Text> ${price}</Card.Text>
    <Link to={"/item/" + id}><Button variant="dark">Ver detalle</Button> </Link>
  </Card.Body>
</Card>)
}

export default Products