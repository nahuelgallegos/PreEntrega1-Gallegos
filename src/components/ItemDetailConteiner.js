import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
import { Utils } from './Utils'
import { useParams } from 'react-router-dom'   

const ItemDetailConteiner = () =>{
  const [item , setItems] = useState ({})
  const {prenda} = useParams ()
  
  useEffect(()=> {
      Utils()
      .then ((respuesta)=>{
         setItems(respuesta)
         console.log(respuesta)
      })
      .catch((error)=>{
         console.log(error)
      })

  } ,[prenda] )

  return ( <div> {<ItemDetail items={item}/>}</div>)
}

export default ItemDetailConteiner