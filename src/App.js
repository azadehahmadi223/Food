import React, { useState } from 'react';

import pizzaImage from './assets/images/pizza.png';
import sushiImage from './assets/images/sushi.png';
import iceCreamImage from './assets/images/ice-cream.png';

const dishes = [
  {
    title: 'Pizza',
    image: pizzaImage,
    description:
      'Savor the cheesy goodness and mouthwatering toppings of delicious pizzas. Perfect for sharing with family and friends.',
  },
  {
    title: 'Sushi',
    image: sushiImage,
    description:
      'Indulge in the delicate and flavorful bites of sushi. Experience a delightful blend of tastes and textures. and friends.',
  },
  {
    title: 'Ice Cream',
    image: iceCreamImage,
    description:
      'Cool down with a delightful variety of ice cream flavors. Treat yourself to sweet and creamy delights. and friends.',
  },
];

function App() {
  const [state, setState] = new useState({query: '',
  list: []});
  const handleSearch = (event) => {
    const results = dishes.filter(dish => {
      if (event.target.value === "") return dishes
      return dish.title.toLowerCase().includes(event.target.value.toLowerCase())
  })
  setState({
      query: event.target.value,
      list: results
  })
  };

  return (
    <div>
      <header>
        <img className='headimg' src={pizzaImage} alt="Delicious pizza" />
        <h1>Food Delights</h1>
        <p>Explore mouthwatering dishes from around the world</p>
        <input type="search" onChange={handleSearch} value={state.query} placeholder="Search dishes" />
      </header>
      <hr/>
      <ul id="dishes">
      {state.list.map(dish => {
        return (
          <li className="dish" >
          <img src={dish.image} alt="dish title" />
          <h2>{dish.title}</h2>
          <p>{dish.description}</p>
        </li>
        ) 
        })}   
      </ul>
    </div>
  );
}

export default App;
