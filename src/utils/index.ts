import { OrganizationType } from '../components/organization/type';

export function renderQueryDescription(
  type: string,
  data: OrganizationType[]
) {
  let message: string = '';

  if (data?.length > 1) {
    message = `${
      type === 'organizations'
        ? 'organizações encontradas'
        : 'projectos encontrados'
    }`;
  } else if (data?.length === 1) {
    message = `${
      type === 'organizations'
        ? 'organização encontrada'
        : 'projecto encontrado'
    }`;
  } else if (data?.length === 0) {
    message = `${
      type === 'organizations'
        ? 'Nenhuma organização encontrada'
        : 'Nenhum projecto encontrado'
    }`;
  }

  return message;
}
