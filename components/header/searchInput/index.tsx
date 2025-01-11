import { Search } from 'lucide-react';

const SearchInput = () => {
  return (
    <div
      className='
        w-[400px]
        h-[30px]
        rounded
        relative
        bg-neutralGray
        pl-4
        flex
        items-center
      '
    >
      <Search color='#5f6368' className='cursor-pointer' />
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
