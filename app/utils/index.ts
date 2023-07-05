import { SocialProject, SocialOrganization } from '@prisma/client';

export const getQueryDescription = (
  type: string,
  data: SocialOrganization[] | SocialProject[]
) => {
  let message: string = '';

  if (data.length > 1) {
    message = `${
      type === 'socialOrganizations'
        ? `#${data.length} organizações encontradas`
        : `#${data.length} projectos sociais encontrados`
    }`;
  } else if (data.length === 1) {
    message = `${
      type === 'socialOrganizations'
        ? `#${data.length} organização encontrada`
        : `#${data.length} projecto social encontrado`
    }`;
  } else if (data.length === 0) {
    message = `${
      type === 'socialOrganizations'
        ? 'Nenhuma organização encontrada'
        : 'Nenhum projecto encontrado'
    }`;
  }

  return message;
};

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

export const formatOwnerName = (description: string | null) => {
  if (!description) return;

  const splitedName = description.split(' ');

  const newDescription =
    splitedName.length > 3
      ? `${splitedName[0]} ${splitedName[1]} ${splitedName[2][0]}. ${
          splitedName[splitedName.length - 1]
        }`
      : description;

  return newDescription;
};
