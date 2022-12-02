import { collection, doc, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from './Firebase'
import ItemList from "./ItemList"
import { Utils } from './Utils'

const ItemListConteiner = () => {

    const [items , setItems] = useState ([])
    const {prenda} = useParams ()
    const collectionProducts = collection(db , "products")
    
    useEffect(()=> {
        if(prenda){
            const filtroCategoria = query(collectionProducts, where("category","==", prenda))
            const filtroConsulta = getDocs(filtroCategoria)

            filtroConsulta
            .then ((respuesta)=>{
                const products = respuesta.docs.map(doc => ({...doc.data(), id: doc.id}) )
               setItems(products)
               console.log(products)
            })
            .catch((error)=>{
               console.log(error)
            })


        }
        else{
            const consultaProducts = getDocs(collectionProducts)
            consultaProducts
            .then ((respuesta)=>{
                const products = respuesta.docs.map(doc => ({...doc.data(), id: doc.id}) )
               setItems(products)
               console.log(products)
            })
            .catch((error)=>{
               console.log(error)
            })
        }
    } ,[prenda] )

    return (
        <div>
            <h2>Productos</h2>
            {items.length == 0 ? <h1>Cargando...</h1> : <ItemList items={items} />}
        </div>
    )
}

export default ItemListConteiner


