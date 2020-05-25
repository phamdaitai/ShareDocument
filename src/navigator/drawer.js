import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screen/Home/index';
import Categories from '../screen/Categories/index';
import { TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './index';

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ }) => {
  
  return (
    <NavigationContainer>
      <Drawer.Navigator>
              {/* <Drawer.Screen name="Home" component={Home}/> */}
              <Drawer.Screen name="Stack" component={StackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNavigator;