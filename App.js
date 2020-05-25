import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import Navigator from './src/navigator/index';
import DrawerNavigator from './src/navigator/drawer';

function App(){
  return (
    <DrawerNavigator/>
  );
};

export default App;
