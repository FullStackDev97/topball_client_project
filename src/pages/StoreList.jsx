const StoreList = () => {
  return (
    <>
      <div className="d-flex justify-content-around mt-5">
        <div className="card p-0">
          <div className="w-100 bg-dark">
            <h3 className="card-title text-uppercase  text-light ">Pack</h3>
          </div>

          <div className="card-body p-5 d-flex justify-content-around">
            <img src="https://placehold.co/200" className="rounded-circle me-3" alt="" />
            <section>
              <div className="d-flex ">
                <p className="me-2 fw-bold">Lorem</p>
                <p className="me-2 fw-bold">Lorem</p>
                <p className="fw-bold">Lorem</p>
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.exercitationem modi dolorum, dignissimos nihil!</p>
              <button className="btn rounded-pill btn-primary position-absolute bottom-0 end-0 me-3 mb-3">Acheter</button>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default StoreList;