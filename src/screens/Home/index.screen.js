import React from 'react';
import {
  View,
  SafeAreaView,
  StatusBar
} from 'react-native';

import {
  ContainerView,
  TextView
} from './styles';

export default function Home(){
  return (
    <>
      <StatusBar 
          barStyle="light-content" 
          backgroundColor="#000"/>
      <SafeAreaView>
        <ContainerView>
          <TextView>Home</TextView>
        </ContainerView>
      </SafeAreaView>
    </>
  );
};
