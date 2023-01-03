import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SearchLogo from "../assets/SVG/search.svg";
import loginLogo from "../assets/SVG/profile.svg";
import BagLogo from "../assets/SVG/bag.svg";
import AppleLogo from "../assets/SVG/apple.svg";
import { Link } from "react-router-dom";

function NavBar() {
  const links = ["mac","ipad","iphone","watch","tv","Accessories","Offers","|","Support","Services","location"]
  return (
    <Navbar bg="black" expand="lg" variant="dark" collapseOnSelect>
      <Container >
        <Navbar.Brand>
          <Link  to = "/">
          <img
            src={AppleLogo}
            alt="React Logo"
            className="navbar__apple-logo"
          />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarToggle" />
        <Navbar.Collapse id="navbarToggle" > 
          <Nav className="justify-content-center flex-grow-1">
         { links.map((link,index) => (
      
      <Nav.Link href="#" key={index}>{link}</Nav.Link>
     ))}
          </Nav>
          <Form className="d-flex align-items-center">
            <Nav.Link href="#Search">
              <img
                src={SearchLogo}
                alt="search Logo"
                className="navbar__logo"
              />
            </Nav.Link>
            <Nav.Link href="#Login">
              <img
                src={loginLogo}
                alt="login Logo"
                className="navbar__logo"
              />
            </Nav.Link>
            <Nav.Link href="#Cart">
              <img src={BagLogo} alt="cart Logo" className="navbar__logo" />
            </Nav.Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
