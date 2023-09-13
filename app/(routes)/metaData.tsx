interface MetaDataProps {
  label: string;
  data?: string | number | null;
}

const MetaData: React.FC<MetaDataProps> = ({ label, data }) => {
  return (
    <div className='mb-2 flex flex-col'>
      <strong className='text-[18px] text-textBody'>{label}</strong>
      <p className='text-textBody'>{data}</p>
    </div>
  );
};

export default MetaData;
