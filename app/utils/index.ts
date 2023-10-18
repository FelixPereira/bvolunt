import { UserName } from '@/types';

export const getQueryDescription = (type: string, data?: unknown[]) => {
  let message = '';

  if (!data) return;

  if (data?.length > 1 && type === 'socialOrganizations') {
    message = `${data?.length} organizações encontradas`;
  } else if (data?.length === 1 && type === 'socialOrganizations') {
    message = `1 organização encontrada`;
  } else if (data?.length === 0 && type === 'socialOrganizations') {
    message = `Nenhuma organização encontrada`;
  } else if (data?.length > 1 && type === 'socialProjects') {
    message = `${data?.length} projectos sociais encontrados`;
  } else if (data?.length === 1 && type === 'socialProjects') {
    message = `1 projecto social encontrado`;
  } else if (data?.length === 0 && type === 'socialProjects') {
    message = `Nenhum projecto social encontrado`;
  } else if (data?.length > 1 && type === 'events') {
    message = `${data?.length} eventos encontrados`;
  } else if (data?.length === 1 && type === 'events') {
    message = `1 evento encontrado`;
  } else {
    message = `Nenhum evento encontrado`;
  }

  return message;
};

export const formatToLowerCased = (provinceName: string) => {
  return provinceName.split(' ').join('-').toLowerCase();
};

export const formatToCapitalized = (provinceName?: string) => {
  if (!provinceName) return;

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

export const getUserName = (name?: string | null): UserName | undefined => {
  if (!name) return;

  const splittedNames = name.split(' ');
  const initials = `${splittedNames[0][0]}${
    splittedNames[splittedNames.length - 1][0]
  }`;
  const firstLastName = `${splittedNames[0]} ${
    splittedNames[splittedNames.length - 1]
  }`;

  return {
    initials,
    firstLastName,
  };
};

export const formatDate = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${day < 10 ? '0' + day : day}/${
    month < 10 ? '0' + month : month
  }/${year}`;
};

export const formatDateForInput = (date?: Date | null) => {
  if (!date) return;

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${year}-${month < 10 ? '0' + month : month}-${
    day < 10 ? '0' + day : day
  }`;
};
