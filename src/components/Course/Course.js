import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import Rating from 'react-rating';
import './Course.css'

const Course = (props) => {
    const { title, img, lession, price, rating } = props.course
    return (
        <div>
            <Col>
                <Card className="service-card">
                    <Card.Img className="cd-img" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        <div className="d-flex">
                            <p className="me-4"><i class="fas fa-play-circle play-icon"></i>Lession: {lession}</p>
                            <p className="me-4">Price: ${price}</p>

                            <Rating className="rating me-1"
                                initialRating={rating}
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                                readonly
                            >
                            </Rating>
                            (<p>{rating}</p>)
                        </div>
                        <Button className="btn btn-danger mt-3">Enroll Now</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Course;