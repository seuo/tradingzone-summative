import React, {Component} from 'react';
import { Router, Link, navigate } from '@reach/router'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { fab } from '@fortawesome/free-brands-svg-icons';
import Modal from 'react-responsive-modal';
import { Media,Col,Accordion,Card,Button,Form,Nav,NavDropdown,Navbar,Image,FormControl,InputGroup } from 'react-bootstrap';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };


render() {

  const { open } = this.state;

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
        <div className="section">

        <div className="catagories">    
        <Accordion className="FilterCat">
              <Card>
                <Card.Header>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    <h5>Filter by Catagories</h5>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Nav variant="pills" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link eventKey="cat-1">Clothing & Fashion</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="cat-2">Vehicles</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="cat-3">Tech</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="cat-4">Sport</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="cat-5">Outdoors</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="cat-6">Home & Garden</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="cat-7">Baby Gear</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="cat-8">Cooking</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="cat-9">Toys</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="cat-10">Books</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="cat-11">Mobile Phones</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="cat-12">Gaming</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="cat-13">Music & Instruments</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="cat-14">Random</Nav.Link>
              </Nav.Item>
            </Nav>
                </Accordion.Collapse>
              </Card>
            </Accordion>      
       </div>
                <div className="items">
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="item4.jpg"/>
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                      <Button variant="primary">BUY</Button>
                    </Card.Body>
                  </Card>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="item4.jpg"/>
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                      <Button variant="primary">BUY</Button>
                    </Card.Body>
                  </Card>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="item4.jpg"/>
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                      <Button variant="primary">BUY</Button>
                    </Card.Body>
                  </Card>
                </div>
            <div className="LoginGrp">
            <button className="LoginButton" onClick={this.onOpenModal}><h4>Login or Register</h4></button>
        <Modal className="LoginModal" 
        open={open} onClose={this.onCloseModal} center styles={'modal'}>
            <Form className="loginForm">
              <Form.Row>
                <Form.Group  controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                </Form.Row>
                <Form.Row>
                <Form.Group  controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
              </Form.Group>

              <Form.Row>
                <Form.Group controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Form.Row>

              <Button variant="primary" type="submit">
                Register
              </Button>
           </Form>
        </Modal>
        </div>        
      </div>
    </div>
  );
}
}
export default App;
