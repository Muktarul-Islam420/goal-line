import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.css';

const Header = () => {
    return (
        <div className="header">
           <div className="title-container">
           <h1 className="title-text">GOAL LINE</h1>
           </div>
           <nav>
               <a href="/GOAL-LINE">GOAL LINE</a>
               <a href="/Categories">Categories</a>
               <a href="/GOAL-LINE-for-Business">GOAL LINE for Business</a>
               <a href="Teach-on-GOAL-LINE">Teach on GOAL LINE</a>
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
           </nav>
        </div>
    );
};

export default Header;