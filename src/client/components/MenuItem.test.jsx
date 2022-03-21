import React from 'react';
import { render, screen } from '@testing-library/react';
import MenuItem from './MenuItem';

const item = {
  id: 1009,
  name: 'Mackerel Salad Box',
  dietaries: ['gf', 'df'],
};

describe('Menu Item', () => {
  const updateItem = jest.fn();
  it('should correctly display item', async () => {
    render(<MenuItem foodItem={item} updateItem={updateItem} />);
    const element1 = await screen.findByText(/Mackerel Salad Box/i);
    expect(element1).toBeInTheDocument();
  });
  it('should correctly display dietaries', async () => {
    render(<MenuItem foodItem={item} updateItem={updateItem} />);
    const element1 = await screen.findByText(/gf/i);
    const element2 = await screen.findByText(/df/i);
    expect(element1).toBeInTheDocument();
    expect(element2).toBeInTheDocument();
  });
});
