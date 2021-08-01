import React from "react";
import { Container, Navbar, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css"
const NavBar = () => {
    return (<>
        <Navbar>
            <Container>
                <Navbar.Brand><Link to="/"><img src="/book-logo.jpeg" className="logo" title="Have You Ever Read" /></Link></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                    </Form>
                    
                    <NavDropdown title={<>Hello Div</>} id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar></>)
}
export default NavBar;