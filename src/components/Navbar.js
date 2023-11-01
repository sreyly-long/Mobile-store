import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Navbars() {
    return (
        <section>
            <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
            <Navbar.Brand to="#">
                <Link to="/"className='logo'>Mobile-Store</Link>
            </Navbar.Brand>
                
            <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link to="/" className='head'> Home</Link>
                        <Link to="/smart_phone" className='head'>Smartphone</Link>
                        <Link to="/tabplet" className='head'>Tablet</Link>
                        <Link to="/Laptop" className='head'>Laptop</Link>
                        <Link to="/smart_watch" className='head'>Smartwatch</Link>
                    </Nav>
                    <Nav>
                    <i class="fa-solid fa-user"></i>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        </section>
        
    );

}
export default Navbars;