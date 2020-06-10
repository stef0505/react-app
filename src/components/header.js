import React from 'react'
import Link from 'gatsby-link'
import { Navbar, Nav, NavDropdown, NavItem } from 'react-bootstrap';

const Header = ({ siteTitle }) => (
  <header>
          {/* {siteTitle} */}
          <Navbar>
  <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarResponsive" />
  <Navbar.Collapse id="navbarResponsive">
    <Nav as="ul">
      <Nav.Item as="li">
        <Link to="/page-2" className="nav-link" activeClassName="active">Page 2</Link>
      </Nav.Item>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  </header>
  
)

export default Header
