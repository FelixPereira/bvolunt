import styled from 'styled-components';
import { theme } from '../../theme';

export const Container = styled.aside`
  width: 275px;
  height: 100%;

  & h3 {
    margin-bottom: 25px;
    color: ${theme.color.neutralLight};
    font-size: 22px;
  }

  & li {
    list-style: none;
    border-left: 3px solid ${theme.color.primary};
    margin-bottom: 15px;
    color: ${theme.color.neutralLight};
    cursor: pointer;
    width: fit-content;
    padding: 5px 20px 5px 10px;
    border-radius: ${theme.borderRadius};

    &:hover {
      background-color: ${theme.color.primary};
      transition: 0.3s;
      border-left-color: ${theme.color.neutralLight};
    }
  }
`;

const provinces = [
  {
    name: 'Benguela',
    slug: 'benguela',
    oraganizations: [],
    socialProjects: ['', '', '', ''],
  },
  {
    name: 'Cabinda',
    slug: 'cabinda',
    oraganizations: [],
    socialProjects: [],
  },
  {
    name: 'Huambo',
    slug: 'huambo',
    oraganizations: [],
    socialProjects: [],
  },
  {
    name: 'Huíla',
    slug: 'huila',
    oraganizations: [],
    socialProjects: [],
  },
  {
    name: 'Kwanza Norte',
    slug: 'kwanza-norte',
    oraganizations: [],
    socialProjects: [],
  },
  {
    name: 'Kwanza sul',
    slug: 'kwanza-sul',
    oraganizations: [],
    socialProjects: [],
  },
  {
    name: 'Luanda',
    slug: 'luanda',
    oraganizations: [],
    socialProjects: [],
  },
  {
    name: 'Lunda Sul',
    slug: 'lunda sul',
    oraganizations: [],
    socialProjects: [],
  },
  {
    name: 'Moxico',
    slug: 'moxico',
    oraganizations: [],
    socialProjects: [],
  },
  {
    name: 'Uíge',
    slug: 'uige',
    oraganizations: [],
    socialProjects: [],
  },
  {
    name: 'Zaire',
    slug: 'zaire',
    oraganizations: [],
    socialProjects: [],
  },
];

export function Sidebar() {
  return (
    <Container>
      <h3>Pesquisar por província</h3>
      <ul>
        {provinces.map((province) => (
          <li key={province.slug}>{province.name} ({province.socialProjects.length})</li>
        ))}
      </ul>
    </Container>
  );
}
