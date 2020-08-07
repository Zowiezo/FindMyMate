import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import MapScreen from './screens/MapScreen';
import MapListScreen from '.screens/MapListScreen';
import { setNavigator } from './screens/navigationRef';
import UserToMeet from './components/UserToMeet';

export default class App extends Component {
  render() {
    return (
    <MapView
      style={{...StyleSheet.absoluteFillObject}}
      initialRegion={{
        latitude: 33.7872131,
        longitude: -84.381931,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}>
      <Marker
        coordinate={{latitude: 33.7872131, longitude: -84.381931}}
        title="Flatiron School Atlanta"
        description="This is where the magic happens!"
      />
    </MapView>
    )
  }

  

}
