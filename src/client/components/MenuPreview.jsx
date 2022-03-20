import React from 'react';
import MenuItem from './MenuItem';

const MenuPreview = ({ selectedItems }) => {
  return (
    <div className='col-8'>
      <h2>Menu preview</h2>
      <ul className='menu-preview'>
        {selectedItems?.map((item) => {
          return <MenuItem key={item.id} foodItem={item} updateItem={() => {}} />;
        })}
      </ul>
    </div>
  );
};

export default MenuPreview;
