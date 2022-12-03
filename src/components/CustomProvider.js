import { createContext, useState } from "react"

export const contexto = createContext()
export const { Provider } = contexto

const CustomProvider = ({children}) =>{
    const [carrito, setCarrito] = useState([
        {nombre: "buzo1" , categoria : "hoddies", id: "00" , precio: 12000 , cantidad: 10 ,img :"/imagenes/buzo1.jpeg" },
        {nombre: "buzo2" , categoria : "hoddies", id: "01" , precio: 12000 , cantidad: 10 ,img :"/imagenes/buzo2.jpeg"},
        {nombre: "buzo3" , categoria : "hoddies", id: "02" , precio: 12000 , cantidad: 10 ,img :"/imagenes/buzo3.jpeg"},
    ])
    const [total, setTotal] = useState(2) 
    
    const valorDelContexto = {
        productos : carrito,
        cantidad : total,
        setCarrito : setCarrito,
        setTotal : setTotal
    }

    return (
        <Provider value={valorDelContexto}>{children}</Provider>
    )

}

export default (CustomProvider , contexto) 
    