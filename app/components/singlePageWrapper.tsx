import Container from "./Container";

interface SinglePageWrapper {
  children: React.ReactNode;
}

const SinglePageWrapper: React.FC<SinglePageWrapper> = ({ children }) => {
  return (
    <main>
      <Container>
        <div
          className='
            lg:w-[1000px]
            mx-auto
            flex
            flex-col-reverse
            lg:flex-row
            lg:items-start
          '
        >
          {children}
        </div>
      </Container>
    </main>
  );
};

export default SinglePageWrapper;