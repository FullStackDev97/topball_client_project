import React, { useState, useRef, useEffect } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";
const StoreList = ({ title, endPoint }) => {

  const [products, setProducts] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));
  //console.log(user.token)
  useEffect(() => {
    api.getOne(`http://localhost:8000/${endPoint}/`,{headers:{Authorization: `Bearer ${user.token}`}}).then((data) => {
      setProducts(data);
    });
  }, []);

  if (endPoint === 'player') {
    return (
      <>
        {products && products.length > 0 ? (
          products.map((item, index) => (
            <Link to={`/product/${item._id}`} key={`image-item-${index}`}>
              <div className="d-flex justify-content-around mt-5 mb-5">
                <div className="card p-0">
                  <div className="w-100 bg-dark">
                    <h3 className="card-title text-uppercase  text-light ">{item.first_name} {item.last_name}</h3>
                  </div>
  
                  <div className="card-body p-5 d-flex justify-content-around">
                    <img src="https://placehold.co/200" className="rounded-circle me-3" alt="" />
                    <section>
                      <div className="d-flex ">
                        <p className="me-2 fw-bold">position : {item._position}</p>
                        <p className="me-2 fw-bold">quality : {item.quality}</p>
                        <p className="fw-bold">price : {item.price} €</p>
                      </div>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.exercitationem modi dolorum, dignissimos nihil!</p>
                      <button className="btn rounded-pill btn-primary position-absolute bottom-0 end-0 me-3 mb-3">Buy</button>
                    </section>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>loading</p>
        )}
  
      </>
    )
  }else{
    return (
      <>
        {products && products.length > 0 ? (
          products.map((item, index) => (
            <Link to={`/product/${item._id}`} key={`image-item-${index}`}>
              <div className="d-flex justify-content-around mt-5 mb-5">
                <div className="card p-0">
                  <div className="w-100 bg-dark">
                    <h3 className="card-title text-uppercase  text-light ">{item.name}</h3>
                  </div>
  
                  <div className="card-body p-5 d-flex justify-content-around">
                    <img src="https://placehold.co/200" className="rounded-circle me-3" alt="" />
                    <section>
                      <div className="d-flex ">
                        <p className="me-2 fw-bold">quality : {item.quality}</p>
                        <p className="fw-bold">price : {item.price} €</p>
                      </div>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.exercitationem modi dolorum, dignissimos nihil!</p>
                      <button className="btn rounded-pill btn-primary position-absolute bottom-0 end-0 me-3 mb-3">Buy</button>
                    </section>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>loading</p>
        )}
  
      </>
    )
  }
  
}

export default StoreList;