const Home = () => {
  return (
    <>
      <section className="border p-3 mt-5">
        <article className="d-flex border justify-content-between ">
          <div className="w-50">
            <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed laboriosam culpa eum dolorum sequi.
            </h2>
            <br />
            <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed laboriosam culpa eum dolorum sequi.
            </h2>
            <br />
            <button className="button text-light rounded-pill px-4 py-1 bg-dark ">Check it out</button>
          </div>
          <div className="w-50">
            <img width={350} height={350} src="https://placehold.co/400" alt="" />
          </div>

        </article>
      </section>
      
        <p className="text-uppercase text-left bg-dark text-light">Nouveautés</p>
      
      <section className="border d-flex justify-content-around col">
        <article className="col-3">  <img src="https://placehold.co/200" alt="" srcset="" /> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p></article>
        <article className="col-3"><img src="https://placehold.co/200" alt="" srcset="" /> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p> </article>
        <article className="col-3"> <img src="https://placehold.co/200" alt="" srcset="" /> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>  </article>
      </section>
    </>
  )
}

export default Home;