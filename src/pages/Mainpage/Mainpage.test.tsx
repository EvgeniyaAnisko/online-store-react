import { render, screen } from '@testing-library/react';
import React from 'react';
import { Mainpage } from '.';

test('Render Main page', () => {
  render(<Mainpage />);
  const mainElement = screen.getByText(/Найти книгу:/i);
  expect(mainElement).toBeInTheDocument();
});
