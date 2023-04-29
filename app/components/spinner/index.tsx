'use client';

import RiseLoader from 'react-spinners/RiseLoader';

interface SpinnerProps {
  color: string;
  size: number;
  speedMultiplier: number;
}

const Spinner: React.FC<SpinnerProps> = ({ color, size, speedMultiplier }) => {
  return (
    <RiseLoader color={color} size={size} speedMultiplier={speedMultiplier} />
  );
};

export default Spinner;
