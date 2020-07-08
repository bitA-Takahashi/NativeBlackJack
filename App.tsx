import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { DefaultLayout } from './src/components/templates/DefaultLayout';

export default function App() {
  return (
    <Provider store={store}>
      <DefaultLayout />
    </Provider>
  );
}
