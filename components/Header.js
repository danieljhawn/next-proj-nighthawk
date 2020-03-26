import { Navbar, Nav } from "react-bootstrap"
import Router from 'next/router'

const layoutStyle = {
  fontFamily: 'Arial, Helvetica, sans-serif',
  fontSize: '15px',
  color: '#FFFFFF',
  textDecoration: 'none',
  fontStyle: 'normal',
  textTransform: 'uppercase',
  width: '100%'
}

const linkStyle = {
  fontFamily: 'Arial, Helvetica, sans-serif',
  fontSize: '15px',
  letterSpacing: '7px',
  wordSpacing: '2px',
  color: '#FFFFFF',
  textDecoration: 'none',
  fontStyle: 'normal',
  textTransform: 'uppercase',
}

const logout = function() {
  localStorage.clear();
  Router.replace("/login");
}

const Header = () => (
  <div style={layoutStyle}>
    <Navbar fixed="top" bg="dark" variant="dark">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/pricing">Order</Nav.Link>
      </Nav>
      <Nav.Link href="/Register">Sign Up</Nav.Link> | <Nav.Link href="/login">Log In</Nav.Link> | <Nav.Link onClick={logout}> Log Out</Nav.Link> | <Nav.Link href="/profile"> Profile</Nav.Link>
    </Navbar>
  </div>
);

export default Header;