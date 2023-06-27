import { SocialOrganization, SocialProject } from '@prisma/client';
import QueryDetails from './fetchQueryDetails';

interface PagesContainerProps {
  data: SocialProject[] | SocialOrganization[];
  typeOfData: string;
  children: React.ReactNode;
}

const PagesContainer: React.FC<PagesContainerProps> = ({
  data,
  typeOfData,
  children,
}) => {
  return (
    <section className='lg:w-[80%]'>
      <QueryDetails data={data} typeOfData={typeOfData} />

      {children}
    </section>
  );
};

export default PagesContainer;
