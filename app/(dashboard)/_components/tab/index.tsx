import { Dispatch, SetStateAction } from 'react';
import TabButton from './tabButton';

const Tab = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className='flex border-b border-borderColor'>
      <TabButton
        tabNumber={1}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        label='Dados Pessoais'
      />
      <TabButton
        tabNumber={2}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        label='Morada'
      />
      <TabButton
        tabNumber={3}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        label='Alterar Senha'
      />
    </div>
  );
};

export default Tab;
