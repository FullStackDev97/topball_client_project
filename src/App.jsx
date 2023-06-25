import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ClientLayout from './components/layouts/ClientLayout'
import AdminLayout from './components/layouts/AdminLayout'
import MainLayout from './components/layouts/MainLayout'
import ProtectedRouteAdmin from './components/protectedRoutes/AdminRoutes'
import Store from './pages/Store'
import Packs from './pages/Packs'
import Cards from './pages/Cards'
import Profil from './pages/Profil'
import Teams from './pages/Teams'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path='/store' element={<Store />}></Route>
          <Route path='/packs' element={<Packs />}></Route>
          <Route path='/cards' element={<Cards />}></Route>
        </Route>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />}></Route>
          <Route path='/profil' element={<Profil />}></Route>
          <Route path='/teams' element={<Teams />}></Route>
          {/*<Route path='/orders' element={<Profil />}></Route>
          <Route path='/teams' element={<Teams />}></Route>*/}

        </Route>
        <Route path='/admin' element={<AdminLayout />}>

          {/*<Route path='/divisions' element={<Store />}></Route>
          <Route path='/packs' element={<Packs />}></Route>
          <Route path='/articles' element={<Cards />}></Route>
          <Route path='/users' element={<Profil />}></Route>
        <Route path='/teams' element={<Teams />}></Route>*/}

        </Route>

      </Routes>

    </>
  )
}

export default App
