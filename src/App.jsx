import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Button } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Button>App</Button>
    </div>
  )
}

export default App
