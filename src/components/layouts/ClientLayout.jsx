import React from 'react'
import Footer from '../Footer';
import Navbar from '../Navbar';
import {Outlet} from 'react-router-dom';

const ClientLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        
        <Outlet />
        
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default ClientLayout