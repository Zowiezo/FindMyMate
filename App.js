import React, {Component} from 'react';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {StyleSheet, Text, View, Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import AppNavigator from './src/navigation/AppNavigator';

import MapScreen from './src/screens/MapScreen';
import MapListScreen from './src/screens/MapListScreen';
import {setNavigator} from './src/screens/navigationRef';
import UserToMeet from './src/components/UserToMeet';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Find My Mate</Text>
      <Button title="Enter App" onPress={() => navigation.navigate('Map')} />
    </View>
  );
}

function ProfileScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile</Text>
      <Button
        title="Go to Map List"
        onPress={() => navigation.navigate('MapList')}
      />
    </View>
  );
}

// function MapListScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Map lists</Text>
//       <Button
//         title="Go to Map"
//         onPress={() => navigation.navigate('./src/screens/UserLocation.js')}
//       />
//     </View>
//   );
// }

// function MapScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Current location Screen</Text>
//       <Button
//         title="Go to Map List"
//         onPress={() => navigation.navigate('MapList')}
//       />
//     </View>
//   );
// }

/* function UserLocation({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Current location Screen</Text>
      <Button
        title="Go to Map List"
        onPress={() => navigation.navigate('User')}
      />
    </View>
  );
} */

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'My home',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
          }}
        />

        <Stack.Screen name="MapList" component={MapListScreen} />

        <Stack.Screen name="Map" component={MapScreen} />

        {/* <Stack.Screen name="User" component={UserLocation} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
