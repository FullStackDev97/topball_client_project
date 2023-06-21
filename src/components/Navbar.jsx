import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Login from '../pages/Login'
import { useAuth } from '../context/AuthContext';
import { Link } from "react-router-dom";
import SignUp from '../pages/SignUp';


const Navbar = () => {
  const [show, setShow] = useState(false);

  const [show2, setShow2] = useState(false);


  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const authCtx = useAuth();
  const auth = useContext(AuthContext);
  const user = auth.authUser;
  return (

    <>
      <nav className="navbar navbar-fixed-top navbar-expand-lg bg-body-tertiary d-flex justify-content-between ">
        <div>
          <Link to={'/'}><img src="/public/img/Topball_logo.png" className="rounded-circle" width={50} height={50} alt="" /></Link>
        </div>
        <div className="  w-50">

          <ul className="navbar-nav d-flex justify-content-evenly w-100 ">
            <li className="nav-item"> <Link className="nav-item text-decoration-none" to={'/store'}>Store</Link></li>
            <li className="nav-item"><Link className="nav-item text-decoration-none" to={'/'}>Blog </Link></li>
            <li className="nav-item"><Link className="nav-item text-decoration-none" to={'/'}>About Us</Link> </li>
            <li className="nav-item"><Link className="nav-item text-decoration-none" to={'/'}>Contact </Link></li>
          </ul>
        </div>

        {!authCtx.isLoggedIn ?
          (<div className="w-25 d-flex justify-content-evenly">
            <button className="button text-light rounded-pill px-4 py-1 bg-dark " onClick={handleShow}>Login</button>
            <button className="button text-light rounded-pill px-4 py-1 bg-dark " onClick={handleShow2}>Sign Up</button>
          </div>) : (
            <div className="w-25 d-flex justify-content-evenly">
              <button className="button text-light rounded-pill px-4 py-1 bg-dark" onClick={(e) => { e.preventDefault(); authCtx.logout(); setShow(false); setShow2(false) }} >Logout</button>
              <Link to={'/profil'}><img src={user.profil_pic} className="rounded-circle " width={50} height={50} alt="" /></Link>
            </div>

          )}

        {!authCtx.isLoggedIn ? (
          <div>
            <Modal show={show} onHide={handleClose}>

              <Modal.Body>
                <Login ></Login>
              </Modal.Body>

            </Modal>
            <Modal show={show2} onHide={handleClose2}>

              <Modal.Body>
                <SignUp ></SignUp>
              </Modal.Body>

            </Modal>
          </div>
        ):(
          <>
          </>
        )}

      </nav>
    </>

  )
}


export default Navbar;