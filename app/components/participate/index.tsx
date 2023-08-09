import { SafeUser } from '@/types/safeUser';
import ParticipateOnProjectBtn from '../participateBtns/participateOnProjectBtn';
import ParticipateOnOrgBtn from '../participateBtns/participateOnOrgBtn';

interface ParticipateProps {
  currentUser: SafeUser | null;
  id?: string;
  typeOfData: string;
}

const Participate: React.FC<ParticipateProps> = ({
  currentUser,
  id,
  typeOfData,
}) => {
  const callToAction =
    typeOfData === 'socialOrg'
      ? 'desta organização social'
      : 'deste projecto social';
  return (
    <div
      className='
        flex
        flex-col
        gap-y-5
        md:w-[30%]
        md:border-b-0
        lg:w-full
        border-b-[10px]
        border-borderColor
        lg:border-b-[10px]
        mb-10
        pb-10
      '
    >
      <strong className='text-textBody text-[20px]'>
        Faça parte {callToAction}, e contribua com o que for possível!
      </strong>
      {typeOfData === 'socialOrg' ? (
        <ParticipateOnOrgBtn currentUser={currentUser} socialOrgId={id} />
      ) : (
        <ParticipateOnProjectBtn
          currentUser={currentUser}
          socialProjectId={id}
        />
      )}
    </div>
  );
};

export default Participate;
