const AdminLayout = () => {
    return (
      <div>
        <header>
          <Navbar />
        </header>
        <main>
          
          <Outlet />
          
        </main>
  
        <footer >
          <Footer />
        </footer>
      </div>
    )
  }
  
  export default AdminLayout;