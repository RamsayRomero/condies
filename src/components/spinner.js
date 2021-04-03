import PuffLoader from 'react-spinners/PuffLoader';

export default function Spinner({ loading = true, color = 'blue', size }) {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <PuffLoader loading={loading} color={color} size={size} />
    </div>
  );
}
