import { Component } from "react";
import "styles/Contact.css"

class Contact extends Component {

  state = {
    firstName: "",
    lastName: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    this.setState({
      firstName: "",
      lastName: ""
    });
  };  

  render() {
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
                  <h5 className="card-title">CV</h5>
                  <i className="fab fa-instagram"></i>
                  <a className="footer-anchor" href="assets/cv/CV_Laszlo_Somogyi.pdf" target="_blank" rel="noreferrer">CV</a>
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

        <div>
          <p>
            Hello {this.state.firstName} {this.state.lastName}
          </p>
          <form className="form">
            <input
              value={this.state.firstName}
              name="firstName"
              onChange={this.handleInputChange}
              type="text"
              placeholder="First Name"
            />
            <input
              value={this.state.lastName}
              name="lastName"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Last Name"
            />
            <button className="btn btn-success" onClick={this.handleFormSubmit}>Submit</button>
          </form>
        </div>      
      </div>
    );
  };
}
 
export default Contact;