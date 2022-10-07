import React, { useContext } from 'react'
import './Button.css'
import calc_context from './context'

const Button = ({number}) => {
  const {clicked,add} = useContext(calc_context)

  return (
    <div className="button">
      
         <button id={number} onClick={() => clicked(number)}> {number} </button>
      
        
    </div>
  )
}

export default Button