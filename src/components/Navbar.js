import React from "react";
// import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

function NavbarComp() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <div>
            {/* <p>Murat Can Yüksel</p> */}
            {/* <p>React.js developer</p> */}
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="https://www.linkedin.com/in/murat-can-y%C3%BCksel-2b1347119/"
              target="_blank"
            >
              LinkedIn
            </Nav.Link>
            <Nav.Link href="https://github.com/muratcan-yuksel" target="_blank">
              GitHub
            </Nav.Link>
            <Nav.Link
              href="https://muratcanyuksel.hashnode.dev/"
              target="_blank"
            >
              Blog
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
