
const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-fixed-top navbar-expand-lg bg-body-tertiary d-flex justify-content-between ">
          <div>
              <img src="/public/img/Topball_logo.png" className="rounded-circle" width={50} height={50}  alt="" />
          </div>
          <div className="  w-50">
            
            <ul className="navbar-nav d-flex justify-content-evenly w-100 ">
              <li className="nav-item"><a className="nav-item text-decoration-none" href="">Market</a></li>
              <li className="nav-item"><a className="nav-item text-decoration-none" href="">Blog </a></li>
              <li className="nav-item"><a className="nav-item text-decoration-none" href="">About Us </a></li>
              <li className="nav-item"><a className="nav-item text-decoration-none" href="">Contact </a></li>
            </ul>
          </div>

          <div className="w-25 d-flex justify-content-evenly">
            <button className="button text-light rounded-pill px-4 py-1 bg-dark ">Login</button>
            <button className="button text-light rounded-pill px-4 py-1 bg-dark ">Sign Up</button>
          </div>
        
        
       
      </nav>
    </>

  )
}


export default Navbar;