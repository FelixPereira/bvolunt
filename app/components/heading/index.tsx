'use client';

interface HeadingProps {
  title: string;
  subtitle: string;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle }) => {
  return (
    <div className='mb-4'>
      <h2 className='text-textTitle text-[35px] mb-2 font-semibold'>{title}</h2>
      <h3 className='text-[25px] text-textBody'>{subtitle}</h3>
    </div>
  );
};

export default Heading;
