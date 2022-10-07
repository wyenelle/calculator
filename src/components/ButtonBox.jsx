import React, { useContext, useState } from 'react'
import './ButtonBox.css'
import calc_context from './context'
import Button from './Button'

const ButtonBox = () => {
    const numbers = ['C','DEL','%','/',7,8,9,'*',4,5,6,'-',1,2,3,'+',0,'00','.','=']
    const {operator_clicked,clicked,add} = useContext(calc_context)
   
 
  return (
    <section className="button-box">
      
      <button  onClick={() => operator_clicked('-')}> -</button>
      <button  onClick={() => operator_clicked('+')}> + </button>
      <button  onClick={() => operator_clicked('*')}> * </button>
      <button  onClick={() => operator_clicked('/')}> / </button>
      <button  onClick={() => clicked(1)}> 1 </button>
      <button  onClick={() => clicked(2)}> 2 </button>
        
       {/* {
        numbers.map((number,idx) => (
          <Button number={number} key={idx} />
        ))
       } */}
    </section>
  )
}

export default ButtonBox