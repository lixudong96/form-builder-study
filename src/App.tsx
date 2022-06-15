import { useState } from 'react'
import {Button} from 'antd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button type="primary">Click me!</Button>
    </div>
  )
}

export default App
