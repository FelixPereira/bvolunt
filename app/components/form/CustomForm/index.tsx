'use client';

const CustomForm = ({ children }: { children: React.ReactNode }) => {
  return <form className='flex flex-col gap-y-4'>{children}</form>;
};

export default CustomForm;
