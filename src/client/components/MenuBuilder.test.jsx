import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import MenuBuilder from './MenuBuilder';

const foodItems = [
  {
    id: 1009,
    name: 'Mackerel Salad Box',
    dietaries: ['gf', 'df'],
  },
  {
    id: 1005,
    name: 'Cuban Beef, Brown Rice & Quinoa, Green Pepper & Butterbean Salad',
    dietaries: ['gf', 'df'],
  },
];

const selectedItems = [];

const setSelectedItems = jest.fn().mockImplementation(() => {
  return selectedItems.push(foodItems[0]);
});
const search = '';
const setSearch = jest.fn();

describe('Menu Builder', () => {
  it('should correctly display items', async () => {
    render(
      <MenuBuilder
        foodItems={foodItems}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        search={search}
        setSearch={setSearch}
      />,
    );
    const menuWrapper = screen.getByTestId('menu-wrapper');
    const element1 = within(menuWrapper).getByText(/Mackerel/i);
    const element2 = within(menuWrapper).getByText(/Cuban Beef/i);
    expect(element1).toBeInTheDocument();
    expect(element2).toBeInTheDocument();
  });

  it('should correctly add item to menu preview', async () => {
    render(
      <MenuBuilder
        foodItems={foodItems}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        search={search}
        setSearch={setSearch}
      />,
    );
    const menuWrapper = screen.getByTestId('menu-wrapper');
    const element1 = within(menuWrapper).getByText(/Mackerel/i);
    fireEvent.click(element1);
    expect(setSelectedItems).toHaveBeenCalledTimes(1);
  });
});
