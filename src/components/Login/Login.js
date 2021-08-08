import React, { useState, useContext } from 'react';
import { Modal, Button, Form, Container } from "react-bootstrap";
import { GoogleLogin } from 'react-google-login';
import { UserContext } from '../../context/userContext';
function LoginModal(props) {
    const userContext = useContext(UserContext);
    const [key, setKey] = useState(false); // false = login page / otherwise signup
    const responseGoogle = ({ profileObj: { email, familyName, givenName, imageUrl, name, googleId } }) => {
        userContext.logIn({ email, lastName: familyName, firstName: givenName, imageUrl, name, id: googleId });
        props.onHide();
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <GoogleLogin
                        clientId="511787337324-mcb2odp3shk267pimpovqda27aibjdgm.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />

                    <hr />
                    {!key && <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <Button variant="link" onClick={() => setKey(true)}>Don't have an account?</Button>
                    </Form>}
                    {
                        key && <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Retype Password</Form.Label>
                                <Form.Control type="password" placeholder="Re-type Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            <Button variant="link" onClick={() => setKey(false)}>Already a member?</Button>
                        </Form>
                    }
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default LoginModal;