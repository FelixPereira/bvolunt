interface CardsListProps {
  children: React.ReactNode;
  cols: number;
}

const CardsList: React.FC<CardsListProps> = ({ children, cols }) => {
  const mdCols = cols === 4 ? 3 : 2;
  const cols2 = 3
  return (
    <div
      className={`
        grid 
        md:grid-cols-3
        lg:grid-cols-${cols}
        2xl:grid-cols-${cols}
        gap-[50px_20px]
        mt-5
      `}
      // className='
      //   grid
      //   md:grid-cols-2
      //   lg:grid-cols-3
      //   2xl:grid-cols-4
      //   gap-[50px_20px]
      //   mt-5
      // '
    >
      {children}
    </div>
  );
};

export default CardsList;
