import { render, screen } from '@testing-library/react';
import { server } from '../../mocks/server';
import '@testing-library/jest-dom';
import 'whatwg-fetch';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { OrganizationDetail } from '.';
import { ORGANIZATIONS } from '../../store/organizations';

const mockOrganization = ORGANIZATIONS[0];

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const renderComponent = () => {
  render(
    <Provider store={store}>
      <OrganizationDetail />
    </Provider>
  );
}

describe('Organization detail', () => {
  test('render list of detail', async () => {
    renderComponent();

    screen.debug();

    const detailsList = await screen.findByRole('list', {
      name: /organization details list/i,
    });

    screen.debug();

    expect(detailsList).toBeInTheDocument();
  });

  test('render list of address', async () => {
    renderComponent();

    const street = screen.getByText(mockOrganization.street);
    const county = screen.getByText(mockOrganization.county);
    const province = screen.getByText(mockOrganization.province);

    expect(street).toBeInTheDocument();
    expect(county).toBeInTheDocument();
    expect(province).toBeInTheDocument();

  });

  test('render correct organization details', () => {
    renderComponent();

    const orgDescritpion = screen.getByText(mockOrganization.description);
    // const details = screen.getAllByRole(/organization detail/i)
    expect(orgDescritpion).toBeInTheDocument();
  });
});

// Render list of details; *
// Render list of address; *
// Rendered list item has the correct data;
