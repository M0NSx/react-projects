import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Signup from "./Signup"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Signup />
  )
}

export default App
