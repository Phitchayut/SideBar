import { useState } from 'react'
import './App.css'
import SideBar from './components/SideBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[100%] h-screen bg-gradient-to-r from-purple-500 to-pink-500'>
      <SideBar />
    </div>
  )
}

export default App
