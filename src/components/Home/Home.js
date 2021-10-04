import React from 'react';
import './Home.css'
import bannerImg from '../../images/hero-img-01.png'
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';
import { Row } from 'react-bootstrap';

const Home = () => {
    const [courses, setCourses] = useState([])

    // Load data
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div>
            {/* Banner section */}
            <section className="hero-section">
                <div className="row d-flex align-items-center mx-4">
                    <div className="col-md-6">
                        <h1 className="title">Learn New Languages  And Move Forward</h1>
                        <div className="line"></div>
                        <p className="sub-text">When it comes to learning anything, it's all about time. The US Foreign Service Institute (FSI) says that if you can study for ten hours a day, lower grouped languages take 48 days for basic fluency. Meanwhile, difficult languages should take you 72 days</p>
                    </div>
                    <div className="col-md-6">
                        <img className="banner-img" src={bannerImg} alt="" />
                    </div>
                </div>
            </section>
            {/* Services */}
            <section className="service-container m-4">
                <h1 className="choose-title">Our Courses</h1>
                <div className="line2 mb-3"></div>

                <Row xs={1} md={2} className="g-4">

                    {
                        courses.slice(0, 4).map(course => <Course
                            key={course.cId}
                            course={course}
                        />)
                    }

                </Row>


            </section>
        </div>
    );
};

export default Home;