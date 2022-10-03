import { render, screen } from '@testing-library/react';
import React from 'react';
import { Notfoundpage } from '.';

test('Render 404 page', () => {
  render(<Notfoundpage />);
  const mainElement = screen.getByText(/404/i);
  expect(mainElement).toBeInTheDocument();
});
