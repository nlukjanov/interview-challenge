import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from './Search';

describe('Search test', () => {
  const setSearch = jest.fn();
  it('updates the search field', () => {
    render(<Search setSearch={setSearch} />);
    expect(screen.getByTestId('search-input')).toBeInTheDocument();
    userEvent.type(screen.getByTestId('search-input'), 'hake')
    expect(screen.getByTestId('search-input')).toHaveValue('hake');
  });
});
