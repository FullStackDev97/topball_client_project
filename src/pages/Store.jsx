import { Link } from "react-router-dom";

const Store = () => {

  return (
    <>
      <h1 className="mt-4">Choisissez ce que vous cherchez :</h1>
      <div className="d-flex justify-content-around mt-5 mb-5">
        <Link to={'/packs'}>

          <div className="card p-0">
            <div className="w-100 bg-dark">
              <h3 className="card-title text-uppercase  text-light ">Pack</h3>
            </div>

            <div className="card-body p-5">
              <img src="https://placehold.co/200" className="rounded-circle" alt="" />
            </div>
          </div>
        </Link>

        <Link to={'/cards'}>
          <div className="card p-0">
            <div className="w-100 bg-dark">
              <h3 className="card-title text-uppercase  text-light ">Cards</h3>
            </div>

            <div className="card-body p-5">
              <img src="https://placehold.co/200" className="rounded-circle" alt="" />
            </div>
          </div>
        </Link>



      </div>
    </>
  )
}

export default Store;