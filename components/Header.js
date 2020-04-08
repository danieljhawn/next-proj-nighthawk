import { Navbar, Nav, Dropdown, DropdownButton } from "react-bootstrap"
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

const logout = function () {
  localStorage.clear();
  Router.replace("/login");
}

const Header = () => (
  <div style={layoutStyle}>
    <Navbar fixed="top" bg="dark" variant="dark">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/Pricing">Order</Nav.Link>
      </Nav>
        <DropdownButton id="dropdown-basic-button" title="My Account" variant="secondary">
          <Dropdown.Item href="/Register">Sign Up</Dropdown.Item>
          <Dropdown.Item href="/Login">Login</Dropdown.Item>
          <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
          <Dropdown.Item href="/Profile">Profile</Dropdown.Item>
        </DropdownButton>
    </Navbar>
  </div>
);

export default Header;