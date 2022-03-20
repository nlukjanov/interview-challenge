import React from 'react';
import MenuItem from './MenuItem';

const MenuPreview = () => {
  return (
    <div className='col-8'>
      <h2>Menu preview</h2>
      <ul className='menu-preview'>
        <MenuItem />
      </ul>
    </div>
  );
};

export default MenuPreview;
