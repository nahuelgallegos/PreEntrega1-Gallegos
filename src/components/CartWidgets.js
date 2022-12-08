import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import { useCarrito } from "./CustomProvider";

const CartWidgets = () => {
    const valorContexto = useCarrito()
    return (
        <Link to="/carrito">
        <div style={{color: "white"}}  >
            <FontAwesomeIcon icon={faCartShopping}/>
            <span>{valorContexto.cantidadTotal}</span>
        </div>
        </ Link>
    )
}
export default CartWidgets