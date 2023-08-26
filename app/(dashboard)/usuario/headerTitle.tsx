import React from 'react';

interface HeaderTitleProps {
  children: React.ReactNode;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({ children }) => {
  return (
    <h3 className='text-[25px] text-textTitle font-bold border-b-4 border-b-primary'>
      {children}
    </h3>
  );
};

export default HeaderTitle;
