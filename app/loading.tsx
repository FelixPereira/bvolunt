import Spinner from './components/spinner';

export default function Loading() {
  return (
    <div className='
      flex
      items-center
      justify-center
      w-full
      h-[100vh]
    '>
      <Spinner color='#26449B' size={20} />
    </div>
  );
}
