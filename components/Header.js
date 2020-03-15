import Link from 'next/link';
import { Navbar, Nav } from "react-bootstrap"

const layoutStyle = {
  fontFamily: 'Arial, Helvetica, sans-serif',
  color: '#FFFFFF',
  textDecoration: 'none',
  fontStyle: 'normal',
  textTransform: 'uppercase',
} 

const linkStyle = {
  fontFamily: 'Arial, Helvetica, sans-serif',
  fontSize: '15px',
  letterSpacing:  '7px',
  wordSpacing: '2px',
  color: '#FFFFFF',
  textDecoration: 'none',
  fontStyle: 'normal',
  textTransform: 'uppercase',
}

const Header = () => (
  <div style={layoutStyle}>
    <Navbar fixed="top" bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/pricing">Pricing</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
        <Nav.Link href="/Signup">Sign Up</Nav.Link> | <Nav.Link href="/Login">Log In</Nav.Link>
      </Navbar>
  </div>
);

export default Header;