'use client';

import { Provider } from 'react-redux';
import { store } from '@/app/redux/store';
import React from 'react';

interface ReactReduxProviderProps {
  children: React.ReactNode;
}

const ReactReduxProvider: React.FC<ReactReduxProviderProps> = ({
  children,
}) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReactReduxProvider;