import React from 'react';
import './Course.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'


const Course = (props) => {
    console.log(props);
    const {name,img,owner,rating,price} = props.course;
    const handleEnrollCourse =props.handleEnrollCourse;
    return (
        <div className="course-cart">
            <img src={img} alt="" className="course-img" />
           <h3 className="course-name">{name}</h3>
            <h5 className="owner">{owner}</h5>
            <p className="rating">{rating}</p>
            <h4 className="price"> ${price}</h4>
            <button className="btn"
            onClick={() =>handleEnrollCourse(props.course)}
            ><FontAwesomeIcon icon={faShoppingCart}/>Enroll Now</button>
        </div>
    );
};

export default Course;