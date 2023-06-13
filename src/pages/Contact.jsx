import "styles/Contact.css"

const Contact = () => {
  return ( 
    <div className="Contact">
      <div className="container">
        <div className="row">
          <div className="cardContainer col-lg-4 col-md-4 col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Instagram</h5>
                <i className="fab fa-instagram"></i>
                <a className="footer-anchor" href="http://instagram.com/releasethekitten" target="_blank" rel="noreferrer">@releasethekitten</a>
              </div>
            </div>
          </div>
          <div className="cardContainer col-lg-4 col-md-4 col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">LinkedIn</h5>
                <i className="fab fa-linkedin"></i>
                <a className="footer-anchor" href="https://www.linkedin.com/in/laszlo-somogyi/" target="_blank" rel="noreferrer">LinkedIn link to LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="cardContainer col-lg-4 col-md-4 col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">GitHub</h5>
                <i className="fab fa-github"></i>
                <a className="footer-anchor footer-anchor" href="https://github.com/laszlosomogyimusic" target="_blank" rel="noreferrer">https://github.com/laszlosomogyimusic</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Contact;