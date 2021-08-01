import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Ratings from "../Ratings";
import "./CommentSection.css";

const CommentSection = ({score, id}) => {
    return (<Container className="comment-section-wrapper">
        <Row>
            <Col xs={3}>
                <Image src="/profile.png" roundedCircle style={{width:"60px"}} />
                <Ratings index={id} score={score}/>
            </Col>
            <Col>
                <Row>
                    <h4>Comment Title</h4>
                    <p>Some random comment goes here!!!</p>
                </Row>
            </Col>
        </Row>
    </Container>);
}

export default CommentSection;