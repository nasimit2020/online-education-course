import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './Course.css';

const Course = (props) => {
    const {title, name, currency} = props.course;
    const enrollCourse = props.enrollCourse;
    return (
        <div id="course">
            <h2>{title}</h2>
            <h5><small>Instructor </small>: {name}</h5>
            <h4>Price: ${currency}</h4>
            <Button onClick={() => enrollCourse(props.course)}>Enroll Now</Button>
        </div>
    );
};

export default Course;