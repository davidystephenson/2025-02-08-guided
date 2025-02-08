import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));

  const handleSignOut = (event) => {
    event.preventDefault();
    sessionStorage.removeItem("loggedInUser");
    window.location.reload();
  };

  return (
    <header>
      <Navbar
        bg="primary"
        navbar="light"
        variant="dark"
        expand="lg"
        collapseOnSelect
      >
        <Container>
          <Nav.Link>
            <Navbar.Brand>ECart</Navbar.Brand>
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {loggedInUser && !loggedInUser.isAdmin && (<Nav.Link>
                <i className="bi bi-cart"> Cart</i>
              </Nav.Link>
              )}
              {loggedInUser && !loggedInUser.isAdmin && (
                <Nav.Link>
                  <i className="bi bi-bag-check-fill"> Orders</i>
                </Nav.Link>
              )}

              {loggedInUser && (
                <Nav.Link>
                  <i className="bi bi-person-badge"> Profile</i>
                </Nav.Link>
              )}

              {loggedInUser && loggedInUser.isAdmin && (
                <NavDropdown title="Admin" id="adminmenu">
                  <NavDropdown.Item>Users</NavDropdown.Item>

                  <NavDropdown.Item>Products</NavDropdown.Item>

                  <NavDropdown.Item>Categories</NavDropdown.Item>

                  <NavDropdown.Item>Orders</NavDropdown.Item>
                </NavDropdown>
              )}

              {loggedInUser && (
                <Nav.Link onClick={(e) => handleSignOut(e)}>
                  <i className="bi bi-box-arrow-in-right"> Sign Out</i>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;