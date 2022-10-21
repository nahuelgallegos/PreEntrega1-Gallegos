import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"

function CartWidgets (){
    return (
        <div style={{color: "white"}} >
            <FontAwesomeIcon icon={faCartShopping}/>{" "}
        </div>
    )
}
export default CartWidgets