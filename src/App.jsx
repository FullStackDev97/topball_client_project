import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import ClientLayout from './components/layouts/ClientLayout'
import Store from './pages/Store'
import StoreList from './pages/StoreList'
import Profil from './pages/Profil'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route  path="/" element={<ClientLayout/>}>
          <Route index element={<Home/>}></Route>
          <Route path='/store' element={<Store/>}></Route>
          <Route path='/packs' element={<StoreList/>}></Route>
          <Route path='/cards' element={<StoreList/>}></Route>
          <Route path='/profil' element={<Profil/>}></Route>
        </Route>
        
      </Routes>
      
    </>
  )
}

export default App
