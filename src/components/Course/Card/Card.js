import React from 'react';
import { Button } from 'react-bootstrap';
import './Card.css';

const Card = (props) => {
    console.log(props);
   
    return (
        <div className="menu-bar">
            <h2>Enroll course : {props.addCourse.length}</h2>
            <Button>Home</Button>
            <Button>Catagory</Button>
            <Button>Enroll</Button>
           
        </div>
    );
};

export default Card;