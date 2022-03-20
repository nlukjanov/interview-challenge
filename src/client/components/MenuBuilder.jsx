import React from 'react';
import MenuItem from './MenuItem';
import MenuPreview from './MenuPreview';
import Search from './Search';

const MenuBuilder = () => {
  return (
    <div className='container menu-builder'>
      <div className='row'>
        <div className='col-4'>
          <Search />
          <ul className='item-picker'>
            <MenuItem />
          </ul>
        </div>
        <MenuPreview />
      </div>
    </div>
  );
};

export default MenuBuilder;
