import React from 'react'
import Products from './Products'

const ItemList = ({items}) => {
  return (
    <section className='products' >
      {items.map((item)=>{
        return  <p>  <Products key={item.id} {...item} /> </p>}
      )}
    </section>
  )
}

export default ItemList
