import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { OrganizationDetail } from '.';
import 'whatwg-fetch';

describe('Organization detail', () => {
  test('render list of detail', async () => {
    render(<OrganizationDetail />);

    const detailsList = await screen.findByRole('list', {
      name: /project detail/i
    });
  
    expect(detailsList).toBeInTheDocument();
  });
});

// Render list of details;
// Render list of address;
// Rendered list item has the correct data;
