import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Login.css';
import { useState } from 'react';

function NavbarPage() {
  return (
    <>
      <div className="bg-light d-flex home justify-content-center p-2 position-fixed w-100">
        <Navbar className="bg-body-tertiory fs-5">
          <Container className="">
            <Navbar.Brand href="/" className="me-5">
              REACT WEBSITE
            </Navbar.Brand>
            <Nav className="me-auto ms-5">
              {/* <Nav.Link href="/">Home</Nav.Link> */}
              <Nav.Link href="features">Features</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/gallery">Gallery</Nav.Link>
              <Nav.Link href="/testimonials">Testimonials</Nav.Link>
              <Nav.Link href="/team">Team</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
}
export default NavbarPage;
