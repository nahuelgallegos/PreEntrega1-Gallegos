import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'   
import { collection,doc, getDoc } from 'firebase/firestore'
import { db } from './Firebase'

const ItemDetailConteiner = () =>{
  const [item , setItems] = useState ({})
  const {id} = useParams ()
  
  useEffect(()=> {

   const collectionProducts = collection(db , "products")
   const referencia = doc(collectionProducts, id)
   const consulta = getDoc(referencia)

   consulta
      .then ((respuesta)=>{
         setItems(respuesta.data())
      })
      .catch((error)=>{
         console.log(error)
      })

  } ,[id] )

  return (<ItemDetail product={{id, ...item}}/>)
}

export default ItemDetailConteiner