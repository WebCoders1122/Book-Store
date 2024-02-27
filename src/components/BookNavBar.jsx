import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const BookNavBar = () => {
  return (
    <Navbar
      expand='lg'
      className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand href='/'>Book Store</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='/book/list'>List</Nav.Link>
            <NavDropdown
              title='User Area'
              id='basic-nav-dropdown'>
              <NavDropdown.Item href='/signin'>Sign In</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/register'>Register</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BookNavBar;
