import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';


describe('App', () => {
  it('should not display header', () => {
    render(<App />);

    const header = screen.queryByRole('banner');

    expect(header).not.toEqual(null);
  });



  it('', () => {

  });
});