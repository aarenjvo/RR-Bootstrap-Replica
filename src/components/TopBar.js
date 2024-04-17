import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Navi() {
    return (
        <header>
            <Navbar bg="light" expand="lg" id='NavBar'>
                <div className='d-flex' id='logoPlusDropdown'>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Brand style={{ margin: "5px 0 0 20px" }} href="#home">
                        <img src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg" alt='logo' />
                    </Navbar.Brand>
                </div>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <div id='logInSignUpBtn'>
                        <Nav>
                            <Nav.Item id='logIn'>
                                <Nav.Link href="#LogIn">Log In</Nav.Link>
                            </Nav.Item>
                            <Nav.Item id='signUp'>
                                <Button variant="success" className='rounded-pill'>
                                    Sign Up
                                </Button>{' '}
                            </Nav.Item>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}