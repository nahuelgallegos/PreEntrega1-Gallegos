import React from 'react'

const Products = ({nombre, precio , img}) => {

  return (
    <article className=' product_card card'>
        <h1 className='card_nombre'> {nombre} - ${precio} </h1>
        <img className='card_image' src={img} alt={nombre} /> 
        <button>Agregar al carrito</button>
    </article>
  )
}

export default Products