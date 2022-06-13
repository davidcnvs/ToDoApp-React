import React, { useRef } from 'react'
import '../02-useEffect/effects.css'

export const FocusScreen = () => {

    const inputRef = useRef()

    const handleClick = () => {
        inputRef.current.focus();
    }

  return (
    <div>
        <h1>
            Focus Screen
        </h1>
        <hr />
        <input type="text" className='form-control mb-4' placeholder='Su nombre' ref={inputRef} />
        <button className='btn btn-outline-primary' onClick={handleClick}>Focus</button>
    </div>
  )
}
