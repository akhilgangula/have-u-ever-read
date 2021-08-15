import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Ratings from "../Ratings";
import "./CommentSection.css";
const Comment = ({ rating, id, title = "title", comment = "Some random comment goes here!!!" }) => {
    return (<Container className="comment-section-wrapper">
        <Row>
            <Col xs={3}>
                <script src="https://www.avatarapi.com/js.aspx?email=peter.smith@gmail.com&size=128">
                </script>
                <Image src="/profile.png" roundedCircle style={{ width: "60px" }} />
                <Ratings index={id} score={rating} />
            </Col>
            <Col>
                <Row>
                    <h4>{title}</h4>
                    <p>{comment}</p>
                </Row>
            </Col>
        </Row>
    </Container>);
}

const CommentSection = ({ comments }) => {
    return (<>{comments && comments.map((entry, index) => <Comment key={index} {...entry} />)}</>);
}

export default CommentSection;