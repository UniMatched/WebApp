import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the header containing UniMatched!', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/UniMatched!/i);
  expect(linkElement).toBeInTheDocument();
});
