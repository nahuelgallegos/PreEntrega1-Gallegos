import React from 'react'
import { Routes , Route } from "react-router-dom"
import Home from './Home';
import Carrito from './Carrito';
import ItemListConteiner from './ItemListConteiner';
import ItemDetailConteiner from './ItemDetailConteiner';
import FinalizarCompra from './FinalizarCompra';

const Main = () => {
  return (
    <main>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/productos' element={<ItemListConteiner/>}/>
        <Route path='/productos/:prenda' element={<ItemListConteiner/>}/>
        <Route path='/item/:id' element={<ItemDetailConteiner/>}/>
        <Route path='/carrito' element={<Carrito/>}/>
        <Route path='/carrito/compra' element={<FinalizarCompra/>}/>
    </Routes>
</main>

  )
}

export default Main
