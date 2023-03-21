import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { faker } from '@faker-js/faker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Organization } from '.';

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate,
}));

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

    for (const org of organizations) {
      expect(org).toHaveTextContent(mockOganization.responsible);
    }
  });

  it('should render cover image', () => {
    renderComponent();

    const coverImage = screen.getByRole('banner');
    
    expect(coverImage).toBeInTheDocument();
  })

  it('should go to organization detail page when clicking on the name', () => {
    const { mockOganization } = renderComponent();

    const organizationName = screen.getByRole('heading', {
      name: mockOganization.name,
    });

    fireEvent.click(organizationName);

    expect(mockedNavigate).toHaveBeenCalledWith(
      `/organizacoes/${mockOganization._id}`
    );
  });

  it('should go to organization detial page when clicking on the cover image', () => {
    const { mockOganization } = renderComponent();

    const coverImage = screen.getByRole('banner');
    fireEvent.click(coverImage);

    expect(mockedNavigate).toHaveBeenCalledWith(
      `/organizacoes/${mockOganization._id}`
    );
  });
});

// Card renders correctly; *
// Render organization's name; *
// Render organization's description; *
// Render responsible's name; *
// Render cover image;
// Goes to organization details page when clicks on the image; *
// Goes to organization details page when clicks on the title; *
