import React from "react";
import "./MainBookSection.css";
import { Col, Container, Row } from "react-bootstrap";
import { map } from "lodash";
import Rating from "../Ratings/Rating";
const MainBookSection = ({ volumeInfo: { authors, title,

    imageLinks: { thumbnail = "", smallThumbnail = "" },
    averageRating,
    description,
    industryIdentifiers,
    language,
    publishedDate,
    categories,
    publisher,
    pageCount
},
}) => <section>
        <Container className="main-book-section-wrapper">
            <Row>
                <Col xs={4}>
                    <div className="book-img-wrapper">
                        <div className="circle-bg">

                            <img src={thumbnail} alt={smallThumbnail} title={title} className="book-img" />
                        </div>
                    </div>
                </Col>
                <Col xs={8}>
                    <div className="main-book-wrapper">
                        <Container className="book-title-wrapper">
                            <div className="title-rating-wrapper">
                                <div className="book-title">{title}</div>
                                <div className="ratings"><Rating score={averageRating} /></div>
                            </div>
                            {/* <div className="book-sub-title">{subtitle}</div> */}
                            <div className="author">by <b>{authors.map((name) => `${name},`)}</b></div>
                        </Container>
                        <Container fluid >
                            {description}
                        </Container>
                        <Container className="additional-info" fluid>
                            <Row className="row-item">
                                <Col xs={3}>Original</Col>
                                <Col>{title}</Col>
                            </Row>
                            <Row className="row-item">
                                <Col xs={3}>ISBN</Col>
                                <Col>{map(industryIdentifiers, ({ identifier }, index) => index === 0 ? identifier : `, ${identifier}`)}</Col>
                            </Row>
                            <Row className="row-item">
                                <Col xs={3}>Edition Language</Col>
                                <Col>{language}</Col>
                            </Row>
                            <Row className="row-item">
                                <Col xs={3}>Published by</Col>
                                <Col>{publisher} @{publishedDate}</Col>
                            </Row>
                            <Row className="row-item">
                                <Col xs={3}>Number of Pages</Col>
                                <Col>{pageCount}</Col>
                            </Row>
                            <Row className="row-item">
                                <Col xs={3}>Category</Col>
                                <Col>{map(categories, (identifier, index) => index === 0 ? identifier : `, ${identifier}`)}</Col>
                            </Row>
                        </Container>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>;

export default MainBookSection;