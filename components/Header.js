import Link from 'next/link';
import { Navbar, Nav } from "react-bootstrap"

const Header = () => (
    <div>
<Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Project Nighthawk</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/pricing">Pricing</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav>
    <Nav.Link href="/Signup">Sign Up</Nav.Link> | <Nav.Link href="/Login">Log</Nav.Link>

  </Navbar>
    </div>
);

export default Header;