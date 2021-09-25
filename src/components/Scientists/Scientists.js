import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Scientist from '../Scientist/Scientist';
import './Scientists.css'

const Scientists = () => {
  // console.log(props)
  const [scientists, setScientists] = useState([])

  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch('./scientists.JSON')
      .then(res => res.json())
      .then(data => setScientists(data))
  }, [])

  const handleAddToCart = product => {
    const newCart = [...cart, product]
    setCart(newCart)
  }

  return (
    <div className="scientists-container">
      <div className="scientists">
        {
          scientists.map(scientist => <Scientist
            key={scientist.father}
            scientist={scientist}
            handleAddToCart={handleAddToCart}
          ></Scientist>)
        }
      </div>
      <div className="achivement">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Scientists;