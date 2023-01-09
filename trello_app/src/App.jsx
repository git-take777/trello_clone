import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import TaskCards from './components/task/TaskCards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
    <Header />
    <TaskCards />
    </div>
  )
}

export default App
