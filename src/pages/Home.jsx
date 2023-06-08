const Home = () => {
  return (
    <>
      <section className="border p-3">
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
            <img width={350} height={350} src="/public/img/ja_dunk.jpeg" alt="" />
          </div>

        </article>
      </section>
      <div className="vr">

      </div>
      <section className="border">
        <article> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, culpa sit itaque aliquid earum enim voluptate, nesciunt incidunt dicta dolores debitis blanditiis eligendi placeat, laudantium ullam libero esse nisi sequi.</article>
        <article> Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsam ipsa unde expedita, totam illum deleniti provident vitae, sapiente optio sint earum necessitatibus natus. Odio aspernatur quam nemo? Adipisci, modi.</article>
        <article> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore omnis beatae necessitatibus esse est corrupti illo ratione eaque perspiciatis explicabo minima, maiores quos excepturi, asperiores vero voluptate enim aperiam iure.</article>
      </section>
    </>
  )
}

export default Home;