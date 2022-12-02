
export const Utils = () => {
    let  productosIniciales = [
        {nombre: "buzo1" , categoria : "hoddies", id: "00" , precio: 12000 , cantidad: 10 ,img :"/imagenes/buzo1.jpeg" },
        {nombre: "buzo2" , categoria : "hoddies", id: "01" , precio: 12000 , cantidad: 10 ,img :"/imagenes/buzo2.jpeg"},
        {nombre: "buzo3" , categoria : "hoddies", id: "02" , precio: 12000 , cantidad: 10 ,img :"/imagenes/buzo3.jpeg"},
        {nombre: "buzo4" , categoria : "hoddies", id: "03" , precio: 12000 , cantidad: 10 ,img :"/imagenes/buzo4.jpeg"},
        {nombre: "buzo5" , categoria : "hoddies", id: "04" , precio: 12000 , cantidad: 10 ,img :"/imagenes/buzo5.jpeg"},
        {nombre: "buzo6" , categoria : "hoddies", id: "05" , precio: 12000 , cantidad: 10 ,img :"/imagenes/buzo6.jpeg"},
        {nombre: "remera1" , categoria : "remeras", id: "10" , precio: 7000 , cantidad: 10 ,img :"/imagenes/remera1adelante.jpeg" },
        {nombre: "remera2" , categoria : "remeras", id: "11" , precio: 7000 , cantidad: 10 ,img :"/imagenes/remera2adelante.jpeg"},
        {nombre: "pantalon1" , categoria : "pantalones", id: "20" , precio: 10000 , cantidad: 10 ,img :"/imagenes/pantalon1.jpeg"},
        {nombre: "pantalon2" , categoria : "pantalones", id: "21" , precio: 10000 , cantidad: 10 ,img :"/imagenes/pantalon2.jpeg"},
        {nombre: "pantalon3" , categoria : "pantalones", id: "22" , precio: 10000 , cantidad: 10 ,img :"/imagenes/pantalon3.jpeg"},
        {nombre: "gorra1" , categoria : "gorras", id: "30" , precio: 4000 , cantidad: 10 ,img :"/imagenes/gorra1.jpeg"},
        {nombre: "gorra2" , categoria : "gorras", id: "31" , precio: 4000 , cantidad: 10 ,img :"/imagenes/gorra2.jpeg"},
        {nombre: "gorra3" , categoria : "gorras", id: "32" , precio: 4000 , cantidad: 10 ,img :"/imagenes/gorra3.jpeg"},
        {nombre: "gorra4" , categoria : "gorras", id: "33" , precio: 4000 , cantidad: 10 ,img :"/imagenes/gorra4.jpeg"},
        {nombre: "gorra5" , categoria : "gorras", id: "34" , precio: 4000 , cantidad: 10 ,img :"/imagenes/gorra5.jpeg"},
        {nombre: "gorra6" , categoria : "gorras", id: "35" , precio: 4000 , cantidad: 10 ,img :"/imagenes/gorra6.jpeg"},
    ]

    let pedidoProductos = new Promise ((res) => {
        setTimeout (() =>{
           res(productosIniciales)
        }, 2000)   
       })

  return (
        pedidoProductos
  )
}

export default Utils