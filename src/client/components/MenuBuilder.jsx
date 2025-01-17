import React from 'react';
import MenuItem from './MenuItem';
import MenuPreview from './MenuPreview';
import Search from './Search';

const MenuBuilder = ({
  foodItems,
  selectedItems,
  setSelectedItems,
  search,
  setSearch,
}) => {
  const addItem = (item) => {
    let newSelectedItemsList = [...selectedItems];
    const exists = selectedItems.some((element) => element.id === item.id);
    if (!exists) newSelectedItemsList = [...selectedItems, item];
    setSelectedItems(newSelectedItemsList);
  };
  console.log('foodItems', foodItems)

  const removeItem = (item) => {
    const newSelectedItemsList = selectedItems.filter((filterItem) => {
      return filterItem.id !== item.id;
    });
    setSelectedItems(newSelectedItemsList);
  };
  return (
    <div className='container menu-builder'>
      <div className='row'>
        <div className='col-4'>
          <Search search={search} setSearch={setSearch} />
          <ul data-testid='menu-wrapper' className='item-picker'>
            {Object.values(foodItems)?.map((foodItem) => {
              return (
                <MenuItem
                  key={`menu-builder-${foodItem.id}`}
                  foodItem={foodItem}
                  updateItem={addItem}
                />
              );
            })}
          </ul>
        </div>
        <MenuPreview selectedItems={selectedItems} removeItem={removeItem} />
      </div>
    </div>
  );
};

export default MenuBuilder;
