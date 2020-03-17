import React from 'react'
import { Navbar, Nav } from "react-bootstrap"

function myNavbar() {
    return (
        <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Project Nighthawk</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/pricing">Pricing</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav>
    <Nav.Link href="/Register">Sign Up</Nav.Link> | <Nav.Link href="/Login">Log In</Nav.Link>

  </Navbar>
      </>
    )
}

export default myNavbar
