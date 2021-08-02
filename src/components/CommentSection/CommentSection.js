import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Ratings from "../Ratings";
import "./CommentSection.css";
const Comment = ({ score, id, comment: { header = "title", body = "Some random comment goes here!!!" } }) => {
    return (<Container className="comment-section-wrapper">
        <Row>
            <Col xs={3}>
            <script src="https://www.avatarapi.com/js.aspx?email=peter.smith@gmail.com&size=128">
</script>
                <Image src="/profile.png" roundedCircle style={{ width: "60px" }} />
                <Ratings index={id} score={score} />
            </Col>
            <Col>
                <Row>
                    <h4>{header}</h4>
                    <p>{body}</p>
                </Row>
            </Col>
        </Row>
    </Container>);
}

const CommentSection = ({ comments }) => {
    return (<>{comments && comments.map((entry, index) => <Comment key={index} {...entry} />)}</>);
}

export default CommentSection;