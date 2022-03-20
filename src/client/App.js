import React, { useEffect, useState } from 'react';
import './App.css';
import MenuBuilder from './components/MenuBuilder';
import MenuSummary from './components/MenuSummary';

const url = 'http://localhost:3000/api/items';

export default () => {
  const [foodItems, setFoodItems] = useState([]);
  useEffect(() => {
    const fetchItems = async function () {
      const response = await fetch(url);
      const data = await response.json();
      setFoodItems(data.items);
    };
    fetchItems();
  }, []);

  return (
    <div className='wrapper'>
      <MenuSummary />
      <MenuBuilder {...foodItems} />
    </div>
  );
};
