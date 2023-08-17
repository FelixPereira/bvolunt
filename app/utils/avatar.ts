export const getNameInitials = (name?: string | null) => {
  if (!name) return;

  const splittedNames = name.split(' ');

  return splittedNames[0][0] + splittedNames[splittedNames.length - 1][0];
};
