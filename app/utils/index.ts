import { SocialProject } from '@prisma/client';
import { OrganizationType } from '../types-old/Organization';

export const getQueryDescription = (
  type: string,
  data: OrganizationType[] | SocialProject[]
) => {
  let message: string = '';

  if (data.length > 1) {
    message = `${
      type === 'organizations'
        ? `#${data.length} organizações encontradas`
        : `#${data.length} projectos sociais encontrados`
    }`;
  } else if (data.length === 1) {
    message = `${
      type === 'organizations'
        ? `#${data.length} organização encontrada`
        : `#${data.length} projecto social encontrado`
    }`;
  } else if (data.length === 0) {
    message = `${
      type === 'organizations'
        ? 'Nenhuma organização encontrada'
        : 'Nenhum projecto encontrado'
    }`;
  }

  return message;
}

export const formatToLowerCased = (provinceName: string) => {
  return provinceName.split(' ').join('-').toLowerCase();
};

export const formatToCapitalized = (provinceName: string) => {
  const newName = provinceName
    .split('-')
    .map((name) => {
      const upperCasedLetter = name.split('')[0].toUpperCase();
      return upperCasedLetter + name.slice(1);
    })
    .join(' ');

  return newName;
};