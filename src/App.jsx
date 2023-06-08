import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import ClientLayout from './components/layouts/ClientLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route  path="/" element={<ClientLayout/>}>
          <Route index element={<Home/>}></Route>
        </Route>
        
      </Routes>
      
    </>
  )
}

export default App
