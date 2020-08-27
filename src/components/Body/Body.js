import React, { useState } from 'react';
import './Body.css';
import 'bootstrap/dist/css/bootstrap.css';
import fakeData from '../../fakeData';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';

const Body = () => {
    const course15= fakeData.slice(0,15);
    const[courses,setCourses]= useState(course15);
    const[cart,setCart]= useState([]);


    const handleEnrollCourse = (course) => {
        console.log('Course Enrolled',course);
    const newCart = [...cart,course] ;
    setCart(newCart);  
    }
    return (
        <div className="body-container">
           <div className="course-container">

                    {
                        courses.map(course =><Course
                            handleEnrollCourse = {handleEnrollCourse}    
                            course={course}></Course>)
                    }

           </div>
           <div className="cart-container">
                <Cart cart={cart}></Cart>   
           </div>
        </div>
    );
};

export default Body;