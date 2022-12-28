import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SearchLogo from "../assets/SVG/search.svg";
import loginLogo from "../assets/SVG/profile.svg";
import BagLogo from "../assets/SVG/bag.svg";
import AppleLogo from "../assets/SVG/apple.svg";

function NavBar() {
  return (
    <Navbar bg="black" expand="lg" variant="dark" collapseOnSelect>
      <Container >
        <Navbar.Brand href="/">
         <img
            src={AppleLogo}
            alt="React Logo"
            className="navbar__apple-logo"
          />
         
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarToggle" />
        <Navbar.Collapse id="navbarToggle" > 
          <Nav className="justify-content-center flex-grow-1">
            <Nav.Link href="#">Mac</Nav.Link>
            <Nav.Link href="#">iPad</Nav.Link>
            <Nav.Link href="#">iPhone</Nav.Link>
            <Nav.Link href="#">Watch</Nav.Link>
            <Nav.Link href="#">TV</Nav.Link>
            <Nav.Link href="#">Accessories</Nav.Link>
            <Nav.Link href="#">Offers</Nav.Link>
            <Nav.Link href="#">|</Nav.Link>
            <Nav.Link href="#">Support</Nav.Link>
            <Nav.Link href="#">Services</Nav.Link>
            <Nav.Link href="#">Locations</Nav.Link>
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
