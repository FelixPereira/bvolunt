'use client';

interface HeadingProps {
  title: string;
  subtitle?: string | React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle }) => {
  return (
    <div>
      <h2 className='text-textTitle text-[30px] mb-1 font-semibold'>{title}</h2>
      <h3 className='text-[20px] text-textBody'>{subtitle}</h3>
    </div>
  );
};

export default Heading;
