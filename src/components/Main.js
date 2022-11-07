/* import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample(prop) {

  let saludo = prop.nombre
  return (
    <>
    <h1 className="saludo" >Bienvenido {saludo} a Pluggest StreetWear </h1>
    <Carousel fade className="caro" >
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src="/imagenes/gorra1.jpeg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src="/imagenes/pantalon3.jpeg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src="/imagenes/gorra4.jpeg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default CarouselFadeExample; */

/* import React from 'react';
import { Routes , Route } from "react-router-dom"
import Home from './Home';
import Carrito from "./Carrito"
/* import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer'; */
/* 
const Main = () => {
    
    return (
        <main>
            <Routes>

                <Route path='/' element={<Home/>}/>
                <Route path="/productos" element={<ItemListContainer/>}/>
                <Route path="/productos/:cat"  element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path='/carrito' element={<Carrito/>}/>
                <Route path='*' element={<h1>404</h1>}/>

            </Routes>
        </main>
    )
}

export default Main  */

import React from 'react'
import { Routes , Route } from "react-router-dom"
import Home from './Home';
import Carrito from './Carrito';
import ItemListConteiner from './ItemListConteiner';

const Main = () => {
  return (
    <main>
    <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/productos' element={<ItemListConteiner/>}/>
        <Route path='/productos:prenda' element={<ItemListConteiner/>}/>
        <Route path='/carrito' element={<Carrito/>}/>

    </Routes>
</main>

  )
}

export default Main
