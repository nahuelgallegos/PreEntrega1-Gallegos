import React, { useContext } from 'react'
/* import { contexto } from '../App' */
import ItemCount from './ItemCount'

const Item = ({nombre, precio , img , id, category}) => {
/*   useContext(contexto) */
  
  return (
    <article className=' product_card card'>
        <h1 className='card_nombre'> {nombre} - ${precio}  {category} </h1>
        <img className='card_image' src={img} alt={nombre} /> 
        <ItemCount/>
    </article>)
}

export default Item