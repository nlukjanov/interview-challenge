import React from 'react';

const MenuItem = ({ foodItem, updateItem }) => {
  return (
    <li
      onClick={() => {
        updateItem(foodItem);
      }}
      className='item'
    >
      <h2>{foodItem?.name}</h2>
      <p>
        {foodItem?.dietaries?.map((dietary) => {
          return (
            <span key={dietary} className='dietary'>
              {dietary}
            </span>
          );
        })}
      </p>
    </li>
  );
};

export default MenuItem;
