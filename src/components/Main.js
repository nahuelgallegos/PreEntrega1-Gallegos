import React from "react";
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

export default CarouselFadeExample;