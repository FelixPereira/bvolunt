interface ContentWrapperProps {
  children: React.ReactNode;
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {
  return (
    <div className='mt-8'>
      <div
        className='
          mt-10
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-5
        '
      >
        {children}
      </div>
    </div>
  );
};

export default ContentWrapper;
