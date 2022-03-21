import React from 'react';
import { render, screen } from '@testing-library/react';
import {within} from '@testing-library/dom'
import MenuSummary from './MenuSummary';

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

describe('Menu Summary', () => {
  it('should correctly display total number of items', () => {
    render(<MenuSummary selectedItems={items} />);
    expect(screen.queryByText('2 items')).toBeInTheDocument();
  });
  it('should correctly display total dietary', () => {
    render(<MenuSummary selectedItems={items} />);
    const element = screen.queryAllByText('2x');
    expect(within(element[0]).getByText('gf'))
    expect(within(element[1]).getByText('df'))
  });
});
