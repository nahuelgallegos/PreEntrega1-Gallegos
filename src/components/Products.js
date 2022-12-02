import React from 'react'
import { Link } from 'react-router-dom'
const Products = ({title, price , image , id}) => {

  return (
    <article className=' product_card card'>
        <h1 className='card_nombre'> {title} - ${price} </h1>
        <img className='card_image' src={image} alt={title} /> 
        <button><Link to={"/item/" + id}> Ver  detalle   </Link>
        </button>
    </article>
  )
}

export default Products