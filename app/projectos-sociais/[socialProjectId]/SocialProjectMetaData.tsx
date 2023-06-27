interface SocialProjectDetailProps {
  label: string;
  description?: string | number | null;
}

const SocialProjectMetaData: React.FC<SocialProjectDetailProps> = ({
  label,
  description
}) => {
  return (
    <div className='mb-2 flex flex-col'>
      <strong className='text-[18px] text-textBody'>{label}</strong>
      <p className='text-textBody'>{description}</p>
    </div>
  );
};

export default SocialProjectMetaData;