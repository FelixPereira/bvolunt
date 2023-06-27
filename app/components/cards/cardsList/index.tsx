interface CardsListProps {
  children: React.ReactNode;
}

const CardsList: React.FC<CardsListProps> = ({ children }) => {
  return (
    <div
      className='
        grid 
        md:grid-cols-2
        lg:grid-cols-3
        2xl:grid-cols-4
        gap-[50px_20px]
        mt-5
      '
    >
      {children}
    </div>
  );
};

export default CardsList;
