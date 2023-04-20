import { SocialProjectType } from '../types';
import { OrganizationType } from '../types/Organization';

export function renderQueryDescription(
  type: string,
  data: OrganizationType[] | SocialProjectType[]
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
