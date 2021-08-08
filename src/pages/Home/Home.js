import React, { useState } from 'react';
import { Container, FormControl, InputGroup, Row, Col } from 'react-bootstrap';
import BookTile from '../../components/BookTile';
import searchService from '../../service/search';

const HomePage = () => {
    const [searchResult, setSearchResult] = useState([]);
    const search = async (value) => {
        const { data: { items }, error } = await searchService({ title: value });
        if (error) {
            alert("Error");
            return;
        }
        setSearchResult(items?.slice(0,5));

    }
    return (<>
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={6}><h3 style={{textAlign: "center"}}>Have You Ever Read</h3></Col>
            </Row>
            <Row className="justify-content-md-center" style={{ marginTop: "120px" }}>
                <Col xs={6}>
                    <InputGroup className="mb-3" >
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder="Start typing..."
                            onChange={({ target: { value } }) => search(value)}
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Container>
                        <Row>
                            {searchResult && searchResult.map((book, index) => <Col><BookTile key={index} title={book.volumeInfo.title} imageLinks={book.volumeInfo.imageLinks} id={book.id} /></Col>)}
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    </>)
}
export default HomePage;
