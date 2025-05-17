import { useState } from 'react'
import viteLogo from '/coq-inu-coin-svg.svg'
import './App.css'
import Dialog from './dialog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="dialog">
      <h1 className="dialog__heading">welcome to heaven</h1>
      <Dialog/>
    </div>
      <img src='./coq-inu-coin-svg.svg' alt='doggo'></img>
      <h1>coq-inu-coin</h1>
      <p>stay tuned</p>
    </>
  )
}

export default App
