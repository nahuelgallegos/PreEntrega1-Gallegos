import { createContext, useContext, useState } from "react"


export const contexto = createContext()
export const { Provider } = contexto
export const useCarrito = () => {
    return useContext(contexto)
}

export const CustomProvider = ({children}) =>{
    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0) 
    const [cantidadTotal, setcantidadTotal] = useState(0)

    const vaciarCarrito = () => {
        setCarrito([])
        setTotal(0)
        setcantidadTotal(0)
    }

    const agregarAlCarrito = (product, cantidad) => {
        const inCart = carrito.find(prod=> prod.id === product.id)
        if (inCart){
            setCarrito(carrito.map((element) => {
                if(element.id === inCart.id) {
                    return {...inCart, cantidad: inCart.cantidad + cantidad}
                }else return element
            }))
        }
        else{
            setCarrito([...carrito, {...product,cantidad}])

        } 
        setTotal(total + product.price * cantidad)
        setcantidadTotal(cantidadTotal + cantidad)
        console.log(setTotal())
    }

    
    const valorDelContexto = {
        productos : carrito,
        cantidad : total,
        cantidadTotal: cantidadTotal,
        vaciarCarrito : vaciarCarrito,
        agregarAlCarrito : agregarAlCarrito
    }

    return (
        <Provider value={valorDelContexto}>{children}</Provider>
    )

}


    