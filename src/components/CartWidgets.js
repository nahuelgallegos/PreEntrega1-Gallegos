/* import React, { useContext } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import { contexto } from "../App";

const CartWidgets = () => {

    const valorDelContexto = useContext(contexto)
    return (
        <Link to="/carrito">
        <div style={{color: "white"}} >
            <FontAwesomeIcon icon={faCartShopping}/>{valorDelContexto.cantidad}
        </div>
        </ Link>

    )
}
export default CartWidgets */