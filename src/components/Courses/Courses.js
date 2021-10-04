import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './Courses.css'

const Courses = (props) => {
    const { title, img, lession, price, rating, description } = props.course
    return (
        <div>
            <Col>
                <Card className="courses-card">
                    <Card.Img className="cd-img" variant="top" src={img} />
                    <Card.Body>
                        <h1 className="course-title">{title}</h1>
                        <Card.Text>
                            {description.slice(0, 150)}
                        </Card.Text>
                        <div className="d-flex">
                            <p className="me-4"><i class="fas fa-play-circle play-icon"></i>Lession: {lession}</p>
                            <p className="me-4">Price: <span className="price">${price}</span> </p>

                            <Rating className="rating me-1"
                                initialRating={rating}
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                                readonly
                            >
                            </Rating>
                            (<p>{rating}</p>)
                        </div>
                        <button className="btn-enroll mt-3">Enroll Now</button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Courses;