import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Col, Form, Container, Row } from 'react-bootstrap';  


function TopBar() {
    return (
<Navbar bg='light' expand='lg'>
    <Navbar.Brand style={{margin: '5px 0 0 20px'}} href='#home'>
    <img alt='instacart logo'src='https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg' />{' '}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Nav className='mr-auto'> 
        </Nav>
        <Container className='mt-5'>
      <Row>
        <Col xs='auto'>
          <Form>
            <Form.Control
              type='search'
              placeholder='Search'
              className='mr-small-2'
              aria-label='Search'
            />
            <Button>
              Search products and stores
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
        <Nav>
            <Nav.Link href='#LogIn'>Log In</Nav.Link>
            <Button variant='success'>Sign Up</Button>{' '}
        </Nav>
</Navbar>
);
}

export default TopBar;