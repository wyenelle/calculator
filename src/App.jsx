import './App.css'
import Wrapper from './components/Wrapper'
import calc_context from './components/context'
import { useState } from 'react'

function App() {
  const [initialState,setInitilState] = useState([0])  
  const [operators ,setOpertors] = useState('')
  const operator = ['+','-','/','*','.']

 console.log(eval(initialState))

 const operator_clicked = (number) => {
  if(initialState[0] === 0){
    return;
  }
  return setInitilState(prev => [...prev,number])
 }
  const clicked = (number) => {
    

    //    Reminder to add finctionality for 0.n decimals
    return(
      setInitilState(prev => prev[0] === 0 ?  [ number] : [...prev , number])
    )
}

const add = () => {
  // adds state
}
  return (
    <calc_context.Provider value={{initialState,clicked,operator_clicked}}>
    <div className="App">
         <Wrapper />
    </div>
    </calc_context.Provider>
  )
}

export default App
