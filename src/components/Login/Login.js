import React, { useState, useContext } from 'react';
import { Modal, Button, Form, Container, Col, Row } from "react-bootstrap";
import { GoogleLogin } from 'react-google-login';
import { UserContext } from '../../context/userContext';
import { createUser, getUser, validate } from '../../service/userService';
import { createRandomId } from '../../utils/utilityFunctions';
function LoginModal(props) {
    const userContext = useContext(UserContext);
    const [key, setKey] = useState(false); // false = login page / otherwise signup
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [reTypePassword, setReTypePassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const login = async () => {
        const { data, error } = await validate(userName, password);
        if (error) {
            alert("login Failed");
            return;
        }
        userContext.logIn(data);
        props.onHide();
    }
    const responseGoogle = async ({ profileObj: { email, familyName, givenName, imageUrl, name, googleId } }) => {
        const { error } = await getUser(googleId);
        if (error) {
            const { error: userCreationError } = await createUser({ email, lastName: familyName, firstName: givenName, imageUrl, userId: googleId });
            if (userCreationError) {
                alert("User Not found and creation of user failed");
            }
            return;
        }
        userContext.logIn({ email, lastName: familyName, firstName: givenName, imageUrl, name, userId: googleId });
        props.onHide();
    }
    const signUp = async () => {
        const { data, error } = await createUser({ email: userName, lastName, firstName, imageUrl: undefined, userId: createRandomId() });
        if (error) {
            alert("Signup Failed");
            return;
        }
        userContext.logIn(data);
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
                            <Form.Control type="email" placeholder="Enter email" onChange={({ target: { value } }) => setUserName(value)} value={userName} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={({ target: { value } }) => setPassword(value)} value={password} />
                        </Form.Group>
                        <Button variant="primary" onClick={login}>
                            Submit
                        </Button>
                        <Button variant="link" onClick={() => setKey(true)}>Don't have an account?</Button>
                    </Form>}
                    {
                        key && <Form>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="firstName">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control placeholder="First name" onChange={({ target: { value } }) => setFirstName(value)} value={firstName} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="lastName">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control placeholder="Last name" onChange={({ target: { value } }) => setLastName(value)} value={lastName} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={({ target: { value } }) => setUserName(value)} value={userName} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={({ target: { value } }) => setPassword(value)} value={password} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Retype Password</Form.Label>
                                <Form.Control type="password" placeholder="Re-type Password" onChange={({ target: { value } }) => setReTypePassword(value)} value={reTypePassword} />
                            </Form.Group>
                            <Button variant="primary" onClick={signUp}>
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