import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='cadastro'>

        <h1>Olá,</h1>
        <p> 
            Para continuar navegando de forma<br/>
            segura, efetue o login na rede.
        </p>

        <h2>Login</h2>

      </div>

    </div>
  )
}

export default App
