import { Link } from "react-router-dom";

const Store = () => {

  return (
    <>
      <h1 className="my-4 text-light">What are you looking for ? :</h1>
      <div className="d-sm-flex justify-content-around my-5">
        <Link className="text-decoration-none my-5" to={'/packs'}>

          <div className="bg-light p-0 ">
            <div className="w-100 bg-dark">
              <h3 className="card-title text-uppercase  text-light ">Packs</h3>
            </div>

            <div className="card-body p-5">
              <img src="https://placehold.co/200" className="rounded-circle w-75" alt="" />
            </div>
          </div>
        </Link>

        <Link className="text-decoration-none my-5" to={'/cards'}>
          <div className="bg-light p-0">
            <div className="w-100 bg-dark">
              <h3 className="card-title text-uppercase  text-light ">Cards</h3>
            </div>

            <div className="card-body p-5">
              <img src="https://placehold.co/200" className="rounded-circle w-75" alt="" />
            </div>
          </div>
        </Link>



      </div>
    </>
  )
}

export default Store;