import { SocialOrganization, SocialProject } from '@prisma/client';
import QueryDetails from './queryDescription';

interface PageWrapperProps {
  data: SocialProject[] | SocialOrganization[];
  typeOfData: string;
  children: React.ReactNode;
  totalStoredData: number;
}

const PageWrapper: React.FC<PageWrapperProps> = ({
  data,
  typeOfData,
  children,
  totalStoredData,
}) => {
  return (
    <section className='lg:w-[80%]'>
      <QueryDetails
        data={data}
        typeOfData={typeOfData}
        totalStoredData={totalStoredData}
      />

      {children}
    </section>
  );
};

export default PageWrapper;
