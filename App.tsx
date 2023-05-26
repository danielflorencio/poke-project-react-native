import React from 'react';
import { NativeBaseProvider } from 'native-base';
import MyStack from './src/routes/MyStack';

export default function App() {
  return (
    <NativeBaseProvider>
      <MyStack/>
    </NativeBaseProvider>
  );
}