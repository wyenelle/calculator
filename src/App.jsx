import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Wrapper from './components/Wrapper'

function App() {
  const [count, setCount] = useState({
    number : 0
  })

  return (
    <div className="App">
         <Wrapper />
    </div>
  )
}

export default App
