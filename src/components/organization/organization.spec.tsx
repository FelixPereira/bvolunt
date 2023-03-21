import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { faker } from '@faker-js/faker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Organization } from '.';

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

const renderComponent = () => {
  render(
    <Router>
      <Organization organization={mockOganization} />
    </Router>
  );
};

describe('Organization Card', () => {
  it('should render organization', () => {
    renderComponent();

    const organizations = screen.getAllByRole('article');

    expect(organizations.length).toBeGreaterThan(0);
  });
});

// Card renders correctly;
// Render organization name;
// Render sponsors logos;
// Render promoting organization;
// Render province
// Render cover image;
// Goes to organization details page when clicks on the image;
// Goes to organization details page when clicks on the title;
