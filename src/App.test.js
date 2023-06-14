import { render, screen } from '@testing-library/react';
// import App from './App';
import Home from './Home';

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText("Top Ratings");
  console.log(linkElement); 
  expect(linkElement).toBeInTheDocument();
});

