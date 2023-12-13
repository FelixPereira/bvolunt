'use client';

import React, { useState } from 'react';
import Tab from '../tab';

interface UpdateProfileFormProps {
  children: React.ReactElement;
}

const UpdateProfileForm: React.FC<UpdateProfileFormProps> = (props) => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className='w-full xl:max-w-[50%] mt-5'>
      <Tab activeTab={activeTab} setActiveTab={setActiveTab} />

      <div
        className='
          p-5 
          border
          border-t-0
          border-borderColor
          rounded
          rounded-t-none
        '
      >
        {React.cloneElement(props.children, { activeTab })}
      </div>
    </div>
  );
};

export default UpdateProfileForm;
