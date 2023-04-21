'use client';

import { Search } from '@mui/icons-material'

const SearchInput = () => {
  return (
    <div
      className='
        w-[400px]
        h-[50px]
        rounded
        relative
        bg-neutralGray
        pl-4
        flex
        items-center
      '
    >
      <Search fontSize='small' />
      <input
        placeholder='Pesquisar...'
        className='
          w-full
          h-full
          bg-neutralGray
          border-none
          outline-none
          rounded
          text-textBody
          px-4
        '
        type='search'
      />
    </div>
  );
};

export default SearchInput;