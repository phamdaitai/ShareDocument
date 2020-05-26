import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screen/Home/index';
import Categories from '../screen/Categories/index';
import Lesson from '../screen/Lesson/index';
import { TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const Stack = createStackNavigator();

const StackNavigator = ({navigation }) => {
  
  return (
    // <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}
        options={{
          headerTitle: "Home",
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            // alignSelf: 'center',
          },
          headerLeft: () => (
            <TouchableOpacity style={styles.headerButtonContainer}  onPress={() => navigation.openDrawer()}>
              <Image
                style={styles.headerButtonImage}
                source={require('../public/image/menu.png')}
              />
            </TouchableOpacity>
          ),
        }}
        />
      <Stack.Screen name="Categories" component={Categories}
      options={{
          headerTitle: "Các bài học",
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            // alignSelf: 'center',
          },
          headerLeft: () => (
            <TouchableOpacity style={styles.headerButtonContainer}  onPress={() => navigation.goBack()}>
              <Image
                style={styles.headerButtonImage}
                source={require('../public/image/back.png')}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="Lesson" component={Lesson}
      options={{
          headerTitle: "Bài giảng",
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            // alignSelf: 'center',
          },
          headerLeft: () => (
            <TouchableOpacity style={styles.headerButtonContainer}  onPress={() => navigation.goBack()}>
              <Image
                style={styles.headerButtonImage}
                source={require('../public/image/back.png')}
              />
            </TouchableOpacity>
          ),
        }}
      />
      </Stack.Navigator>
    //  </NavigationContainer>
  );
}

export default StackNavigator;