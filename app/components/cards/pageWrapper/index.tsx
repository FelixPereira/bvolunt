import Sidebar from "../../sidebar";

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
}) => {
  return <div className='flex flex-col lg:flex-row gap-x-5'>
    <Sidebar />
    {children}
  </div>;
};

export default PageWrapper;
