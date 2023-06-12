import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import brandLogo from 'assets/images/21.png';
//import 'index.css';
import "styles/MainMenu.css";

const MainMenu = () => {
  return ( 
    <Navbar collapseOnSelect expand="lg" variant="dark" className="mainmenu--bg">
    <Container>
      <Navbar.Brand><img src={ brandLogo } alt="21" className="mainmenu__brandlogo--size"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Link className="nav-link me-auto text-decoration-none text-white" to="/">
            Home
          </Link>
          <Link className="nav-link text-decoration-none text-white" to="/about">
            About
          </Link>
          <Link className="nav-link text-decoration-none text-white" to="/music">
            Music
          </Link>
          <Link className="nav-link text-decoration-none text-white" to="/projects">
            Project
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
   );
}
 
export default MainMenu;