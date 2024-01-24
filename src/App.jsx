import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TableExample from './TableExample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <TableExample/>
    </>
  )
}

export default App
