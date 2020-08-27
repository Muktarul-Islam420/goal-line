import React from 'react';
import './Cart.css';
import ReactDOM from 'react-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import Review from '../Review/Review';

const Cart = (props) => {
const cart = props.cart;

const handleReview =  cart;
console.log('Clicked items',cart); 

console.log(cart);
const total = cart.reduce((total, item) => total + item.price, 0);

const formatNumber = num => {
    const precision = num.toFixed(2);
    return Number(precision);
}
// let total = 0;
// for (let i = 0; i < cart.length; i++) {
//     const course = cart[i];
//     total = total + course.price;
    
// }
    return (
        <div className="cart-box">
            <div>
            <h3 className="order-summary-text">Order Summary</h3>
            </div>
            <br/>
            <br/>
            <div>
            <h3 className="cart-length"><FontAwesomeIcon icon={faShoppingCart}/> {cart.length}</h3>
            </div>
            <br/>
            <br/>
            <div>
            <p className="cart-price">Price:  ${formatNumber(total)}</p>
            </div>
            <br/>
            <br/>
            <div>
            <button className="btn"
            ><FontAwesomeIcon icon={faShoppingCart}/>Review Order</button>
            </div>
             
           
            
           
        </div>
    );
};

export default Cart;