import React, { useState } from 'react'

const ItemCount = ({handleOnAdd, init}) => {

    const [count , setCount] = useState(init);

    const handleSumar = () => {
        setCount(count + 1);
    }
    const handleRestar = () => {
        setCount(count - 1);
    }
    const handleConfirmar = () => {
        handleOnAdd(count)
    }

  return (
    <div className='btn-sumarrestar'>
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