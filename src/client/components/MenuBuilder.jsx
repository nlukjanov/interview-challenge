import React from 'react';
import MenuItem from './MenuItem';
import MenuPreview from './MenuPreview';
import Search from './Search';

const MenuBuilder = ({ foodItems, selectedItems, setSelectedItems }) => {
  console.log('selectedItems', selectedItems);
  const addItem = (item) => {
    const newSelectedItemsList = [...selectedItems, item];
    setSelectedItems(newSelectedItemsList);
  };
  return (
    <div className='container menu-builder'>
      <div className='row'>
        <div className='col-4'>
          <Search />
          <ul className='item-picker'>
            {Object.values(foodItems)?.map((foodItem) => {
              return (
                <MenuItem
                  key={foodItem.id}
                  foodItem={foodItem}
                  updateItem={addItem}
                />
              );
            })}
          </ul>
        </div>
        <MenuPreview selectedItems={selectedItems} />
      </div>
    </div>
  );
};

export default MenuBuilder;
