interface UserName {
  initials: string;
  firstLastName: string;
}

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
