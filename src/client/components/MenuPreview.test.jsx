import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import MenuPreview from './MenuPreview';

const items = [
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

describe('Menu Preview', () => {
  const removeItem = jest.fn();
  it('should correctly display selected items', async () => {
    render(<MenuPreview selectedItems={items} removeItem={removeItem} />);
    const element1 = await screen.findByText(/Mackerel Salad Box/i);
    const element2 = await screen.findByText(/Cuban Beef/i);
    expect(element1).toBeInTheDocument();
    expect(element2).toBeInTheDocument();
  });
  it('should call removeItem on item click', async () => {
    render(<MenuPreview selectedItems={items} removeItem={removeItem} />);
    const element = await screen.findByText(/Cuban Beef/i);
    fireEvent.click(element);
    expect(removeItem).toHaveBeenCalledTimes(1);
  });
});
