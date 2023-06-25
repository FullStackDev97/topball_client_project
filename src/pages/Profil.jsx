import { useState, createContext, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Profil = () => {
  const auth = useContext(AuthContext);
  const user = auth.authUser;
  return (
    <>

      <div className="d-flex">

        <div className="d-flex flex-column flex-shrink-0  bg-dark" style={{ width: "8rem" }}>

          <a href="/" className="d-block p-3 link-light mt-1 bg-dark text-decoration-none" title="Icon-only" data-bs-toggle="tooltip" data-bs-placement="right">
            <img src="https://placehold.co/80" className="rounded-circle" alt="" />
            <span className="text-light">Home</span>
          </a>
          <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
            <li className="nav-item">
              <a href="/teams" className="d-block p-3 link-dark text-decoration-none" title="Icon-only" data-bs-toggle="tooltip" data-bs-placement="right">
                <img src="https://placehold.co/80" className="rounded-circle" alt="" />
                <span className="text-light">Teams</span>
              </a>
            </li>
            <li>
              <a href="/" className="d-block p-3 link-dark text-decoration-none" title="Icon-only" data-bs-toggle="tooltip" data-bs-placement="right">
                <img src="https://placehold.co/80" className="rounded-circle" alt="" />
                <span className="text-light">Auction</span>
              </a>
            </li>
            <li>
              <a href="/" className="d-block p-3 link-dark text-decoration-none" title="Icon-only" data-bs-toggle="tooltip" data-bs-placement="right">
                <img src="https://placehold.co/80" className="rounded-circle" alt="" />
                <span className="text-light">Play</span>
              </a>
            </li>
            <li>
              <a href="/" className="d-block p-3 link-dark text-decoration-none" title="Icon-only" data-bs-toggle="tooltip" data-bs-placement="right">
                <img src="https://placehold.co/80" className="rounded-circle" alt="" />
                <span className="text-light">Transactions</span>
              </a>
            </li>
            <li>
              <a href="/" className="d-block p-3 link-dark text-decoration-none" title="Icon-only" data-bs-toggle="tooltip" data-bs-placement="right">
                <img src="https://placehold.co/80" className="rounded-circle" alt="" />
                <span className="text-light">Stats</span>
              </a>
            </li>

            <li>
              <a href="/" className="d-block p-3 link-dark text-decoration-none" title="Icon-only" data-bs-toggle="tooltip" data-bs-placement="right">
                <img src="https://placehold.co/80" className="rounded-circle" alt="" />
                <span className="text-light">Settings</span>
              </a>
            </li>
          </ul>

        </div>

        <section className="col mt-3">
          <h1 className="text-center fs-2 fw-bold text-light my-5">welcome {user.user_name}</h1>
          <div className=" offset-2 bg-light shadow-lg  p-0 w-70 col-8">
            <Link className="text-decoration-none" to={'/teams'}>
              <div className="w-100 bg-dark p-3">

                <h3 className="card-title text-uppercase  text-light ">Manage Teams</h3>


              </div>
            </Link>
            <div className="card-body p-5">
              <img src="https://placehold.co/200" className="rounded-circle" alt="" />
            </div>
          </div>

          <br />

          <div className="d-flex col">

            <div className="bg-light p-0 offset-2 col-3">
              <div className="w-100 bg-dark p-3">

                <h3 className="card-title text-uppercase  text-light ">Players</h3>

              </div>

              <div className="card-body p-5">
                <img src="https://placehold.co/200" className="rounded-circle" alt="" />
              </div>
            </div>

            <div className="bg-light p-0 offset-2 col-3">
              <div className="w-100 bg-dark p-3">
                <h3 className="card-title text-uppercase  text-light ">Market</h3>
              </div>

              <div className="card-body p-5">
                <img src="https://placehold.co/200" className="rounded-circle" alt="" />
              </div>
            </div>
          </div>


        </section>
      </div>
    </>
  )
}

export default Profil;