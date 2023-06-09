const Profil = () => {
  return (
    <>
      <div className="d-flex">


        <div className="d-flex flex-column flex-shrink-0  bg-light" style={{ width: "8rem" }}>
          <a href="/" className="d-block p-3 link-dark text-decoration-none" title="Icon-only" data-bs-toggle="tooltip" data-bs-placement="right">
            <img src="https://placehold.co/80" className="rounded-circle" alt="" />
            <span className="text-dark">Home</span>
          </a>
          <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
            <li className="nav-item">
              <a href="/" className="d-block p-3 link-dark text-decoration-none" title="Icon-only" data-bs-toggle="tooltip" data-bs-placement="right">
                <img src="https://placehold.co/80" className="rounded-circle" alt="" />
                <span className="text-dark">Teams</span>
              </a>
            </li>
            <li>
              <a href="/" className="d-block p-3 link-dark text-decoration-none" title="Icon-only" data-bs-toggle="tooltip" data-bs-placement="right">
                <img src="https://placehold.co/80" className="rounded-circle" alt="" />
                <span className="text-dark">Auction</span>
              </a>
            </li>
            <li>
              <a href="/" className="d-block p-3 link-dark text-decoration-none" title="Icon-only" data-bs-toggle="tooltip" data-bs-placement="right">
                <img src="https://placehold.co/80" className="rounded-circle" alt="" />
                <span className="text-dark">Play</span>
              </a>
            </li>
            <li>
              <a href="/" className="d-block p-3 link-dark text-decoration-none" title="Icon-only" data-bs-toggle="tooltip" data-bs-placement="right">
                <img src="https://placehold.co/80" className="rounded-circle" alt="" />
                <span className="text-dark">Transactions</span>
              </a>
            </li>
            <li>
              <a href="/" className="d-block p-3 link-dark text-decoration-none" title="Icon-only" data-bs-toggle="tooltip" data-bs-placement="right">
                <img src="https://placehold.co/80" className="rounded-circle" alt="" />
                <span className="text-dark">Stats</span>
              </a>
            </li>

            <li>
              <a href="/" className="d-block p-3 link-dark text-decoration-none" title="Icon-only" data-bs-toggle="tooltip" data-bs-placement="right">
                <img src="https://placehold.co/80" className="rounded-circle" alt="" />
                <span className="text-dark">Settings</span>
              </a>
            </li>
          </ul>

        </div>

        <section className="col mt-3">
          <div className=" offset-2 card p-0 w-70 col-8">
            <div className="w-100 bg-dark">
              <h3 className="card-title text-uppercase  text-light ">Equipe active</h3>
            </div>

            <div className="card-body p-5">
              <img src="https://placehold.co/200" className="rounded-circle" alt="" />
            </div>
          </div>

          <br />

          <div className="d-flex  col">
            <div className="card p-0 offset-2 col-3">
              <div className="w-100 bg-dark">
                <h3 className="card-title text-uppercase  text-light ">Gestion des equipes</h3>
              </div>

              <div className="card-body p-5">
                <img src="https://placehold.co/200" className="rounded-circle" alt="" />
              </div>
            </div>

            <div className="card p-0 offset-2 col-3">
              <div className="w-100 bg-dark">
                <h3 className="card-title text-uppercase  text-light ">Equipe de la semaine</h3>
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