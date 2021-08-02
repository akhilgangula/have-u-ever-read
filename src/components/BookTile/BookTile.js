import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BookTile = ({ title, imageLinks: { thumbnail = "", smallThumbnail = "" } = {}, id }) => {
    return (<>
        <Col>
            <Link to={`/book/${id}`}><img src={thumbnail} alt={smallThumbnail} title={title} /></Link>
        </Col>
    </>);
}

export default BookTile;