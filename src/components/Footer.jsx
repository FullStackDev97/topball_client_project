const Footer = () => {
  return (
    <>
      <div className="container-fluid text-light bg-dark ">
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
            <h2 className="footer-heading"><a href="#" className="logo text-decoration-none text-light">Colorlib</a></h2>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <a href="#" className="text-light">read more <span className="ion-ios-arrow-round-forward"></span></a>
          </div>
          <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
            <h2 className="footer-heading">Categories</h2>
            <ul className="list-unstyled">
              <li><a href="#" className="py-1 d-block text-decoration-none text-light">Buy &amp; Sell</a></li>
              <li><a href="#" className="py-1 d-block text-decoration-none text-light">Merchant</a></li>
              <li><a href="#" className="py-1 d-block text-decoration-none text-light">Giving back</a></li>
              <li><a href="#" className="py-1 d-block text-decoration-none text-light">Help &amp; Support</a></li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
            <h2 className="footer-heading">Tag cloud</h2>
            <div className="tagcloud">
              <a href="#" className="tag-cloud-link d-block text-decoration-none text-light">basketball</a>
              <a href="#" className="tag-cloud-link d-block text-decoration-none text-light">nba</a>
              <a href="#" className="tag-cloud-link d-block text-decoration-none text-light">sports</a>
              <a href="#" className="tag-cloud-link d-block text-decoration-none text-light">game</a>
              <a href="#" className="tag-cloud-link d-block text-decoration-none text-light">jordan</a>
              <a href="#" className="tag-cloud-link d-block text-decoration-none text-light">bball</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
            <h2 className="footer-heading">Subcribe</h2>
            <form action="#" className="subscribe-form">
              <div className="form-group d-flex justify-content-evenly">
                  <input type="text" className="form-control rounded-left col-1 w-50" placeholder="Enter email address" />
                  <button type="submit" className=" btn btn-outline-light submit rounded-right w-25"><span className="sr-only">Submit</span><i className="ion-ios-send"></i></button>
              </div>
            </form>
            <h2 className="footer-heading mt-5">Follow us</h2>
            <ul className="ftco-footer-social d-flex list-unstyled  p-0">
              <li className="ftco-animate"><img className="w-25" src="src/assets/facebook.svg" alt="" /></li>
              <li className="ftco-animate"><img className="w-25" src="src/assets/instagram.svg" alt="" /></li>
              <li className="ftco-animate"><img className="w-25" src="src/assets/twitter.svg" alt="" /></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-100 bg-dark border-top py-5">
        <div className="container">
          <div className="row">
            <div className=" offset-md-3 offset-lg-2  col-md-6 col-lg-8">
              <p className="copyright text-light">
                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved <i className="ion-ios-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib.com</a>
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </>

  )
}


export default Footer;