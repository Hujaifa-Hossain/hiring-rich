import React from 'react';
import './Scientist.css';

const Scientist = (props) => {
  const {img, name, aged, father, city, country} = props.scientist;
  return (
    <div className="scientist">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <p><small>{aged}</small></p>
      <p><small>Father of '{father}'</small></p>
      <p><small>From{city}</small></p>
      <p><small>Country: {country}</small></p>
      <button onClick={()=> props.handleAddToCart(props.scientist)} className="regular-btn">add to cart</button>
    </div>
  );
};

export default Scientist;