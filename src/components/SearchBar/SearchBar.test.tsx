import { render, screen } from '@testing-library/react';
import React from 'react';
import { SearchBar } from '.';

describe('SearchBar components', () => {
  it('SearchBar renders', () => {
    render(<SearchBar />);
    expect(screen.getByText(/Найти книгу/i)).toBeInTheDocument();
  });
});
