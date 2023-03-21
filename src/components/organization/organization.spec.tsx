import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { faker } from '@faker-js/faker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Organization } from '.';

const renderComponent = () => {
  const mockOganization = {
    _id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    coverImage: faker.image.imageUrl(),
    responsible: faker.name.fullName(),
    totalVolunteers: faker.datatype.number(100),
    telephone: faker.phone.number(),
    email: faker.internet.email(),
    description: faker.random.alpha(50),
    province: faker.address.state(),
    county: faker.address.county(),
    street: faker.address.street(),
  };

  render(
    <Router>
      <Organization organization={mockOganization} />
    </Router>
  );

  return {
    mockOganization,
  };
};

describe('Organization Card', () => {
  it('should render organization', () => {
    renderComponent();

    const organizations = screen.getAllByRole('article');

    expect(organizations.length).toBeGreaterThan(0);
  });

  it('should have correct title', () => {
    const { mockOganization } = renderComponent();

    const organizaions = screen.getAllByRole('article');

    for (let org of organizaions) {
      expect(org).toHaveTextContent(mockOganization.name);
    }
  });

  it('should render project description', () => {
    const { mockOganization } = renderComponent();

    const organizations = screen.getAllByRole('article');

    for (const org of organizations) {
      expect(org).toHaveTextContent(mockOganization.description);
    }
  });

  it('should render responsible name', () => {
    const { mockOganization } = renderComponent();

    const organizations = screen.getAllByRole('article');
    
  })
});

// Card renders correctly; *
// Render organization's name; *
// Render organization's description; *
// Render responsible's name;
// Render cover image;
// Goes to organization details page when clicks on the image;
// Goes to organization details page when clicks on the title;
