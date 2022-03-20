import React, { useEffect, useState } from 'react';
import './App.css';
import MenuBuilder from './components/MenuBuilder';
import MenuSummary from './components/MenuSummary';

const url = 'http://localhost:3000/api/items';

export default () => {
  const [foodItems, setFoodItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    const fetchItems = async function () {
      const response = await fetch(`${url}?search=${search}`);
      const data = await response.json();
      setFoodItems(data.items);
    };
    fetchItems();
  }, [search]);

  return (
    <div className='wrapper'>
      <MenuSummary />
      <MenuBuilder
        foodItems={foodItems}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
};
