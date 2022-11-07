import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from "./ItemList"
import { ItemDetailConteiner } from './ItemDetailConteiner'

const ItemListConteiner = () => {

    const [items , setItems] = useState ([])
    const {prenda} = useParams ()
    console.log(prenda)

    useEffect(()=> {
        ItemDetailConteiner()
        .then ((respuesta)=>{
           setItems(respuesta)
        })
        .catch((error)=>{
           console.log(error)
        })

    } ,[prenda] )

    return (
        <div>
            <h2>Productos</h2>
            {items.length == 0 ? <h1>Cargando...</h1> : <ItemList items={items} />}
        </div>
    )
}

export default ItemListConteiner


