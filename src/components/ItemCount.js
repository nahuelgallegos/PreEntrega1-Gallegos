import React, { useState } from 'react'

const ItemCount = () => {

    const [count , setCount] = useState(0);

    const handleSumar = () => {
        setCount(count + 1);
    }
    const handleRestar = () => {
        setCount(count - 1);
    }
    const handleConfirmar = () => {
        
    }

  return (
    <div>
       <button onClick={handleSumar} >+</button>
       <p>{count}</p>
       <button onClick={handleRestar}>-</button>
       <div>
       <button onClick={handleConfirmar}>Confirmar</button>
    </div>
    </div>
  )
}

export default ItemCount