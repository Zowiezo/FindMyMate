import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
// import MapScreen from './screens/MapScreen';
// import MapListScreen from './screens/MapListScreen';

// import UserToMeet from './components/UserToMeet';

export default class App extends Component {
  render() {
    return (
    <MapView
      style={{...StyleSheet.absoluteFillObject}}
      initialRegion={{
        latitude: -26.1874,
        longitude: 28.0938,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}>
        
    <Marker
        coordinate={{latitude: -26.1874, longitude: 28.0938,}}
        title="Your current location"
        description="Lets meet up"
    />

    <Marker 
        coordinate={{
        latitude: -26.1863,
        longitude: 28.0958,}}
        title="Stacy"
        description="Loves pets, jogging and Pizza"
    />    

    <Marker 
        coordinate={{
        latitude: -26.1889,
        longitude: 28.0926,
      }}
        title="Mary"
        description="Loves petss and pizza"
    />

    <Marker 
        coordinate={{
        latitude: -26.1861,
        longitude: 28.0939,
      }}
        title="Ty"
        description="Loves jogging"
    />

    <Marker 
        coordinate={{
        latitude: -26.1873,
        longitude: 28.0953,
       }}
        title="Peter"
        description=" Loves pizze and pets"
    />   

    <Marker 
        coordinate={{
        latitude: -26.1889,
        longitude: 28.0970,
      }}
        title="John"
        description="Loves Jogging" 
      />           
        </MapView>
    )
  }}
