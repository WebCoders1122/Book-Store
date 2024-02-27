import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button } from "react-bootstrap";
import { useFirebase } from "../context/Firebase";
const BookNavBar = () => {
  const firebase = useFirebase();
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
          {firebase.isSignedin ? (
            <Button
              className='m-2'
              variant='danger'
              onClick={firebase.signOutUser}>
              Sign Out
            </Button>
          ) : null}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BookNavBar;
