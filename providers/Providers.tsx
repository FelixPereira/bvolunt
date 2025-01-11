'use client';

import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import React from 'react';
import { store } from '@/redux/store';

interface ReactReduxProviderProps {
  children: React.ReactNode;
}

const Providers: React.FC<ReactReduxProviderProps> = ({ children }) => {
  return (
    <>
      <Toaster />
      <Provider store={store}>{children}</Provider>
    </>
  );
};

export default Providers;
