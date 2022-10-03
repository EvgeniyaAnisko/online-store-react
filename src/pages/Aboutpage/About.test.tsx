import { render, screen } from '@testing-library/react';
import React from 'react';
import { Aboutpage } from '.';

test('Render About page', () => {
  render(<Aboutpage />);
  const AboutElement = screen.getByText(/About/i);
  expect(AboutElement).toBeInTheDocument();
});
