const Store = () => {
  return (
    <>
      <h1 className="mt-4">Choisissez ce que vous cherchez :</h1>

      <div className="d-flex justify-content-around mt-5">
        <div className="card p-0">
          <div className="w-100 bg-dark">
          <h3 className="card-title text-uppercase  text-light ">Pack</h3>
          </div>
          
          <div className="card-body p-5">
            <img src="https://placehold.co/200" className="rounded-circle" alt="" />
          </div>
        </div>

        <div className="card p-0">
          <div className="w-100 bg-dark">
          <h3 className="card-title text-uppercase  text-light ">Cards</h3>
          </div>
          
          <div className="card-body p-5">
            <img src="https://placehold.co/200" className="rounded-circle" alt="" />
          </div>
        </div>

        
      </div>
    </>
  )
}

export default Store;