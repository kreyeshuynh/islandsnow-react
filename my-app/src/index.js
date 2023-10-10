import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Button, Col, Container, Dropdown, Form, Image, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { Cart, Facebook, HouseFill, Instagram, PersonFill, Pinterest, Search, Twitter } from 'react-bootstrap-icons';
import logo from './experience-islandsnow-bootstrap-logo.png'
import main from './experience-islandsnow-bootstrap-main.png'

const TopMenu = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Nav className="me-auto">
        <Nav.Link><Facebook/></Nav.Link>
        <Nav.Link><Twitter/></Nav.Link>
        <Nav.Link><Pinterest/></Nav.Link>
        <Nav.Link><Instagram/></Nav.Link>
      </Nav>
      <Nav className="justify-content-end">
        <Nav.Link><HouseFill/> </Nav.Link>
        <Nav.Link><Search/> </Nav.Link>
        <Nav.Link><PersonFill/> </Nav.Link>
        <NavDropdown title={<Cart/>}>
          <NavDropdown.Item></NavDropdown.Item>
          <NavDropdown.ItemText>Your cart is currently empty.</NavDropdown.ItemText>
        </NavDropdown>
      </Nav>
    </Container>
  </Navbar>
);

const IslandSnowLogo = () => (
  <Image src={logo} className="rounded mx-auto d-block"/>
);

const MiddleMenu = () => (
  <Container className="row justify-content-center pt-4">
    <div className="col-1">
      <Dropdown className="custom-dropdown">
        <Dropdown.Toggle className="custom-dropdown-toggle">
          <strong>MEN</strong>
        </Dropdown.Toggle>
        <Dropdown.Menu className="custom-dropdown-menu">
          {/* Dropdown content for MEN */}
        </Dropdown.Menu>
      </Dropdown>
    </div>
    <div className="col-1">
      <Dropdown className="custom-dropdown">
        <Dropdown.Toggle className="custom-dropdown-toggle">
          <strong>WOMEN</strong>
        </Dropdown.Toggle>
        <Dropdown.Menu className="custom-dropdown-menu">
          {/* Dropdown content for WOMEN */}
        </Dropdown.Menu>
      </Dropdown>
    </div>
    <div className="col-1">
      <Dropdown className="custom-dropdown">
        <Dropdown.Toggle className="custom-dropdown-toggle">
          <strong>KIDS</strong>
        </Dropdown.Toggle>
        <Dropdown.Menu className="custom-dropdown-menu">
          {/* Dropdown content for KIDS */}
        </Dropdown.Menu>
      </Dropdown>
    </div>
    <div className="col-1 mt-2">
      <strong>SEARCH</strong>
    </div>
  </Container>
);

const FullWidthImage = () => (
  <Image src={main} className="img-fluid pt-3"/>
);

const FooterMenu = () => (
  <Container className="footer">
    <Container>
      <Row>
        <Col>
          <h5>NAVIGATION</h5>
          <hr />
          <div>About Us</div>
          <div>Employment</div>
          <div>Videos</div>
        </Col>
        <Col>
          <h5>MAIN MENU</h5>
          <hr />
          <div>MEN</div>
          <div>WOMEN</div>
          <div>KIDS</div>
        </Col>
        <Col>
          <h5>CONNECT</h5>
          <hr />
          <div>Sign up for the latest updates</div>
          <Form.Group>
            <Form.Control type="text" placeholder="Enter Email Address" />
            <Button variant="dark" className="mt-2">Join</Button>
          </Form.Group>
        </Col>
      </Row>
    </Container>
  </Container>
);

const IslandSnow = () => (
  <Container>
    <TopMenu/>
    <IslandSnowLogo/>
    <MiddleMenu/>
    <FullWidthImage/>
    <FooterMenu/>
  </Container>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<IslandSnow />);