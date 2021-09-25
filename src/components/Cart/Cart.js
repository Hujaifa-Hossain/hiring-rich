import React from 'react';
import './Cart.css'

const Cart = (props) => {
  return (
    <div>
      <h3>Item added: {props.cart.length}</h3>
    </div>
  );
};

export default Cart;