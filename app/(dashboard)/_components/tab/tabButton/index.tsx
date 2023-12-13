'use client';

import { Dispatch, SetStateAction } from 'react';

interface TabButtonProps {
  activeTab: number;
  tabNumber: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
  label: string;
}

const TabButton: React.FC<TabButtonProps> = ({
  activeTab,
  tabNumber,
  setActiveTab,
  label,
}) => {
  return (
    <button
      className={`
        p-3 
        rounded 
        text-textTitle
        bg-neutralLight
        rounded-b-none
      ${
        activeTab === tabNumber
          ? 'border border-borderColor border-b-0 mb-[-1px] font-bold'
          : 'border-none'
      }
    `}
      onClick={() => setActiveTab(tabNumber)}
    >
      {label}
    </button>
  );
};

export default TabButton;
