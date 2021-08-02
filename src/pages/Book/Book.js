import React, { useEffect, useState } from "react";
import MainBookSection from "../../components/MainBookSection";
import { getBook } from "../../service/getBook";
import getComment from "../../service/getComments";
import CommentSection from "../../components/CommentSection";
import { Col, Container, FloatingLabel, Form, Row, Button } from "react-bootstrap"
import { useParams } from "react-router-dom";
import EditableRatings from "../../components/EditableRatings";
// view https://dribbble.com/shots/4115958-Goodreads-Book-Page/attachments/966021?mode=media
const BookView = () => {
    const [bookData, setBookData] = useState({ volumeInfo: { title: "", authors: [], imageLinks: { thumbnail: "", smallThumbnail: "" } } });
    const [comments, setComments] = useState([]);
    const { bookId } = useParams();
    useEffect(() => {
        const getData = async () => {
            const data = await getBook({ selfLink: `https://www.googleapis.com/books/v1/volumes/${bookId}` });
            if (data.error) {
                alert("Failed to Fetch book data");
            }
            setBookData(data);
        };

        const loadComment = async () => {
            const { data, error } = await getComment({ id: bookId });
            if (error) {
                alert("Failed to load comments");
            }
            setComments(data);
        }
        getData();
        loadComment();
    }, []);
    const [score, updateScore] = useState(0);
    return (<>
        <Container fluid>
            <Row>
                <Col xs={1} />
                <Col xs={8}>
                    <MainBookSection {...bookData} />
                    <Container style={{ marginTop: "20px" }}>
                        <Row className="justify-content-md-end">
                            <Col xs={2}>Posting as: <div><b>Akhil Reddy Gangula</b></div>
                                <div><EditableRatings score={score} updateScore={updateScore} /></div></Col>
                            <Col xs={6}>

                                <Row className="justify-content-md-end">
                                    <Col ><h3>Comments</h3></Col>
                                </Row>
                                <Row className="justify-content-md-end">
                                    <Col >
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Title"
                                            className="mb-3"
                                        >
                                            <Form.Control type="text" placeholder="Title" />
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                                <Row className="justify-content-md-end">
                                    <Col >

                                        <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                            <Form.Control
                                                as="textarea"
                                                placeholder="Leave a comment here"
                                                style={{ height: '100px' }}
                                            />
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                                <Row className="justify-content-md-end">
                                    <Col >
                                        <Button variant="primary" style={{ width: "100%", marginTop: "15px", marginBottom: "15px" }}>Post</Button>
                                    </Col>

                                </Row>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-end">
                            <Col xs={8}>
                                <CommentSection comments={comments} />
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    </>)
};

export default BookView;