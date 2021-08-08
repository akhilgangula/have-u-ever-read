import React, { useContext } from "react";
import { Container, Navbar, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css"
import { UserContext } from "../../context/userContext";

import LoginModal from "../Login/Login";
const NavBar = () => {
    const logOut = (id) => {
        alert(`Logging out ${id}`);
    }
    const userContext = useContext(UserContext);
    const [modalShow, setModalShow] = React.useState(false);
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

                    {userContext.isLoggedIn && <NavDropdown title={<><img className="avatar avatar-32 bg-light rounded-circle text-white p-1"
                        src="https://raw.githubusercontent.com/twbs/icons/main/icons/person-fill.svg" /></>} id="collasible-nav-dropdown">
                        <NavDropdown.Item>Signed In as: <b>{userContext.firstName}</b></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => logOut(userContext.id)}>Logout</NavDropdown.Item>
                    </NavDropdown>}
                    {
                        !userContext.isLoggedIn && <Button variant="link" onClick={() => setModalShow(true)}>
                            Login / Sign up
                        </Button>
                    }
                </Navbar.Collapse>
            </Container>
            <LoginModal show={modalShow}
                onHide={() => setModalShow(false)} />
        </Navbar></>)
}
export default NavBar;