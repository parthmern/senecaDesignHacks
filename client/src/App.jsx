import { useState } from 'react'

import { LampContainer, LampDemo } from './components/ui/lamp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <span>hii</span>
      <LampDemo />
    </div>
  )
}

export default App
