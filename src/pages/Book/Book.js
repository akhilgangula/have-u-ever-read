import React, { useEffect, useState } from "react";
import MainBookSection from "../../components/MainBookSection";
import { getBook } from "../../service/getBook";
import CommentSection from "../../components/CommentSection";
import { Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom";
// view https://dribbble.com/shots/4115958-Goodreads-Book-Page/attachments/966021?mode=media
const BookView = () => {
    const [bookData, setBookData] = useState({ volumeInfo: { title: "", authors: [], imageLinks: { thumbnail: "", smallThumbnail: "" } } });
    const { bookId } = useParams();
    useEffect(() => {
        const getData = async () => {
            const data = await getBook({ selfLink: `https://www.googleapis.com/books/v1/volumes/${bookId}` });
            if (data.error) {
                alert("Failed to Fetch book data");
            }
            setBookData(data);
        };
        getData();
    }, []);
    return (<>
        <Container fluid>
            <Row>
                <Col xs={1} />
                <Col xs={8}>
                    <MainBookSection {...bookData} />
                    <CommentSection></CommentSection>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    </>)
};

export default BookView;