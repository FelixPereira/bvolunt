'use client';

// import { Search } from '@mui/icons-material';

const SearchInput = () => {
  return (
    <div
      className='
        hidden
        w-[300px]
        h-[45px]
        rounded
        relative
        bg-neutralGray
        pl-4
        lg:flex
        items-center
      '
    >
      {/* <Search fontSize='medium' className='cursor-pointer' /> */}
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
