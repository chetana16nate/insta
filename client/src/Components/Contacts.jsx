import React from 'react'
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




const Contacts = () => {
  return (
    <div>

 <Stack gap={5}>

  <div className="p-2"> <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <i class="bi bi-geo-alt-fill">Delivered To</i>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <i class="bi bi-house-dash-fill">Home</i>
            
            <Nav.Link href="#link">Link</Nav.Link>
            <i class="bi bi-cart">Cart</i>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar></div>

      <div className="p-2"> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></div>
      <div className="p-2"> <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown></div>
      <div className="p-2"> <Offcanvas >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className="mb-0">
            This is content within an <code>.offcanvas-lg</code>.
          </p>
        </Offcanvas.Body>
      </Offcanvas></div>
    </Stack>
    </div>
  )
}

export default Contacts
