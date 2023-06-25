import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Login from '../pages/Login'
import { useAuth } from '../context/AuthContext';
import { Link } from "react-router-dom";
import SignUp from '../pages/SignUp';
import '../MyOwn.css'


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
      <nav className="navbar navbar-fixed-top navbar-expand-lg bg-dark mt-0 d-flex justify-content-between ">
        <div className='mx-2'>
          <Link to={'/'}><img src="/public/img/Topball_logo.png" className="rounded-circle" width={50} height={50} alt="" /></Link>
        </div>
        <div className="  w-50">

          <ul className="navbar-nav d-sm-flex justify-content-evenly w-100 ">
            <li className="nav-item"> <Link className="nav-item text-light text-decoration-none " to={'/store'}>Store</Link></li>
            <li className="nav-item"><Link className="nav-item text-light text-decoration-none" to={'/'}>Blog </Link></li>
            <li className="nav-item"><Link className="nav-item text-light text-decoration-none" to={'/'}>About Us</Link> </li>
            <li className="nav-item"><Link className="nav-item text-light text-decoration-none" to={'/'}>Contact </Link></li>
          </ul>
        </div>

        {!authCtx.isLoggedIn ?
          (<div className="w-25 d-sm-block d-md-flex justify-content-evenly">
            <button className="btn-outline-bright text-light rounded-pill m-1  px-4 py-2  " onClick={handleShow}>Login</button>
            <button className="btn-outline-bright text-light rounded-pill  m-1 px-4 py-2 bg-dark " onClick={handleShow2}>Sign Up</button>
          </div>) : (
            <div className="w-25 d-flex justify-content-evenly">
              <button className="btn-outline-bright text-light rounded-pill px-4 py-1 bg-dark" onClick={(e) => { e.preventDefault(); authCtx.logout(); setShow(false); setShow2(false) }} >Logout</button>
              <Link to={'/profil'}><img src={user.profil_pic != null || user.profil_pic != null? user.profil_pic:'https://placehold.co/200'} className="rounded-circle w-25"  alt="" /></Link>
            </div>

          )}

        {!authCtx.isLoggedIn ? (
          <div className='mt-5'>
            <Modal className='mt-5' show={show} onHide={handleClose}>

              <Modal.Body>
                <Login ></Login>
              </Modal.Body>

            </Modal>
            <Modal className='mt-5' show={show2} onHide={handleClose2}>

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