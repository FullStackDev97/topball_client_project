const Home = () => {
  return (
    <>
      <section className=" p-3 mt-5 col">
        <article className="d-sm-flex  justify-content-between ">
          <div className="w-50">
            <h2 className="fs-1 fw-bold my-2 text-light">AS TU LE QI BASKET POUR
              DEVENIR LE MEILLEUR
            </h2>
            <br />
            <h2 className="s-1 fw-bold my-2 text-light">POUR DEVENIR LE MEILLEUR TU
              DOIS VAINCRE LES MEILLEURS
            </h2>
            <br />
            <p className="fs-4 text-light">EST TU PRET ?</p>
            <button className=" btn-outline-bright text-light rounded-pill fs-5 px-4 py-3 bg-transparent ">Check it out</button>
          </div>
          <div className="col-5">
            <img className="col-8 my-2" src="src/assets/giannis.jpg" alt="" />
          </div>

        </article>
      </section>

      <p className="text-uppercase p-3 text-start fs-3 bg-dark text-light">The Latests</p>

      <section className=" d-flex justify-content-around mb-3 py-2 col">
        <article className="col-3">  <img className=" my-2 " src="https://placehold.co/200" alt="" /> <p className="text-light fw-bolder fs-5">League news</p></article>
        <article className="col-3"><img className=" my-2 " src="https://placehold.co/200" alt="" /> <p className="text-light fw-bolder fs-5">Player developpment</p> </article>
        <article className="col-3"> <img className=" my-2 " src="https://placehold.co/200" alt="" /> <p className="text-light fw-bolder fs-5">Articles </p>  </article>
      </section>
    </>
  )
}

export default Home;