import React from 'react';
import { Row } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses/useCourses';
import Courses from '../Courses/Courses';
import './Services.css'

const Services = () => {
    const [courses] = useCourses()
    return (
        <div className="overflow-hidden p-4 bg-courses">
            <h2 className="mb-3 courses">Our Courses</h2>
            {/* <div className="line2 mb-2"></div> */}

            <Row xs={1} md={3} className="g-4">

                {
                    courses.map(course => <Courses
                        key={course.cId}
                        course={course}
                    />)
                }

            </Row>

        </div>
    );
};

export default Services;