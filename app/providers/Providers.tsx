'use client';

import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { store } from '@/app/redux/store';
import React from 'react';

interface ReactReduxProviderProps {
  children: React.ReactNode;
}

const Providers: React.FC<ReactReduxProviderProps> = ({
  children,
}) => {
  return (
    <>
      <Toaster />
      <Provider store={store}>{children}</Provider>
    </>
  );
};

export default Providers;
