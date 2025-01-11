'use client';

import RiseLoader from 'react-spinners/RiseLoader';

interface SpinnerProps {
  color: string;
  size: number;
}

const Spinner: React.FC<SpinnerProps> = ({ color, size }) => {
  return <RiseLoader color={color} size={size} speedMultiplier={0.7} />;
};

export default Spinner;
