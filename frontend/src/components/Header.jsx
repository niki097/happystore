import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { Nav } from "react-bootstrap";
import logo from "../assets/logo.jpg";
import {LinkContainer} from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg='light' varient='dark' expand='lg' collapseOnSelect>
        <Container className=''>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img src={logo} height='30px' alt='happystore' />
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link><FaUser />Cart</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link><FaUser />Login</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
