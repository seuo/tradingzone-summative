import React, {Component} from 'react';
import { Router, Link, navigate } from '@reach/router'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { fab } from '@fortawesome/free-brands-svg-icons'
import { Media,Accordion,Card,Button,Form,Nav,NavDropdown,Navbar,Image,FormControl,InputGroup } from 'react-bootstrap';

import './App.css';

class App extends Component {
  
render() {

  return (
    <div className="wrap">
      <div className="Header">
        <Navbar className="Navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Image className="Logo" src="TradingZone.png" fluid />
        <div className="navBarbot">
        <InputGroup className="mb-3">
            <FormControl className="searchBar"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="outline-secondary"><i class="fas fa-search"/></Button>
            </InputGroup.Append>
          </InputGroup>
          <Navbar.Toggle className="userControl" aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">User Profile</Nav.Link>
              <Nav.Link href="#pricing">Watch List</Nav.Link>
            
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Sell an Item</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                My Reviews
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </div>
        </Navbar>
        </div>
        <div className="login">

          <div className="hero">
          </div>
        <div className="container">
        {/* <Image className="Logo" src="TradingZone.png" fluid /> */}

            </div>
            <Accordion className="LoginGrp" defaultActiveKey="0">
              <Card>
                <Card.Header>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    <h5>Login or Sign Up</h5>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Form className="loginForm">
                          <Form.Group controlId="formBasicEmail">
                              <Form.Control type="email" placeholder="Enter email" />

                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                              <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                              <h3>Login</h3>
                            </Button>
                      </Form>
                </Accordion.Collapse>
              </Card>
            </Accordion>

      </div>
    </div>
  );
}
}
export default App;
