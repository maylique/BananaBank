import { useState } from 'react'
import './App.css'
import Bank from './components/bank'
import './components/style.css'

function App() {
  const [obj, setObj] = useState({
    eingabe: '',
    kontostand: 0
  })

  return (
    <>
    <Bank 
    obj = {obj}
    setObj = {setObj} />
    </>
  )
}

export default App
