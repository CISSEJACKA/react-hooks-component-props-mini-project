import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';

describe('App component', () => {
  test('renders without crashing', () => {
    render(<App />);
  });

  // Add more tests as needed
});

