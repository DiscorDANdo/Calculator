import { useState } from 'react'
import './App.css'
import { Calculator } from './Components/Calculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-[#018529a1] h-screen w-screen">
        <Calculator />
      </div>

    </>
  )
}

export default App
