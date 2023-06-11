import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import brandLogo from 'assets/images/21.png';
import '../index.css';
import "styles/MainMenu.css";

const MainMenu = () => {
  return ( 
    <Navbar collapseOnSelect expand="lg" variant="dark" className="mainmenu--bg">
    <Container>
      <Navbar.Brand><img src={ brandLogo } alt="21" className="mainmenu__brandlogo--size"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link>
            {' '}
            <Link className="text-decoration-none text-white" to="/">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            {' '}
            <Link className="text-decoration-none text-white" to="/about">
              About
            </Link>
          </Nav.Link>
          <Nav.Link>
            {' '}
            <Link className="text-decoration-none text-white" to="/music">
              Music
            </Link>
          </Nav.Link>
          <Nav.Link>
            {' '}
            <Link className="text-decoration-none text-white" to="/projects">
              Project
            </Link>
          </Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
   );
}
 
export default MainMenu;