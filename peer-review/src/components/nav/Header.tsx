import { Menu } from 'antd';
import { useState } from 'react';
import { Outlet, Link, Navigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to={""}>Company Name</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={""}>Home</Nav.Link>
            <Nav.Link as={Link} to={"my-reviews"}>My Reviews</Nav.Link>
            <Nav.Link as={Link} to={"given-reviews"}>Given Reviews</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
};
export default Header;
