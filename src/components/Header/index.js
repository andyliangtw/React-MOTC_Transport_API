import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

import { CITYS } from '../../constants';

import './index.scss';
import Logo from '../../images/Dcard_Favicon_x520.png';

export default function Header() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="/">
        <img src={Logo} alt="Logo" className="header-logo" />{' '}
        <b>2021 Web Frontend Intern Homework</b>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav>
          <Nav.Link href={`${process.env.PUBLIC_URL}/scenicSpot`}>
            全部景點
          </Nav.Link>
          <NavDropdown title="各縣市景點" id="navbar-citys">
            {Object.entries(CITYS).map(([cityEnName, cityZhName], i) => {
              return (
                <NavDropdown.Item
                  key={i}
                  href={`${process.env.PUBLIC_URL}/scenicSpot/${cityEnName}`}>
                  {cityZhName}
                </NavDropdown.Item>
              );
            })}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
