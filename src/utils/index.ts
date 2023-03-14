export interface FilterDetailType {
  province: string;
  quantity: number;
  type: string;
}

export function renderFilterDescription(filterDetails: FilterDetailType): string {
  let message: string = '';

  if (filterDetails.quantity > 1 && filterDetails.type === 'project') {
    message = 'projectos sociais encontrados';
  } else if (filterDetails.quantity === 1 && filterDetails.type === 'project') {
    message = 'projecto social encontrado';
  } else if (filterDetails.quantity === 0 && filterDetails.type === 'project') {
    message = 'Nenhum projecto social encontrado';
  } else if (
    filterDetails.quantity > 1 &&
    filterDetails.type === 'organization'
  ) {
    message = 'organizações encontradas';
  } else if (
    filterDetails.quantity === 1 &&
    filterDetails.type === 'organization'
  ) {
    message = 'organização encontrada';
  } else if (
    filterDetails.quantity === 0 &&
    filterDetails.type === 'organization'
  ) {
    message = 'Nenhuma organização encontrada';
  }

  return message;
}