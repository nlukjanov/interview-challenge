import React from 'react';

const MenuItem = (foodItem) => {
  console.log('foodItem', foodItem);
  return (
    <li className='item'>
      <h2>{foodItem.name}</h2>
      <p>
        {foodItem.dietaries?.map((dietary) => {
          return <span className='dietary'>{dietary}</span>;
        })}
      </p>
    </li>
  );
};

export default MenuItem;
