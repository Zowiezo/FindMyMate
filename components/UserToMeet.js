import React from 'react';
import MapView, { Callout } from 'react-native-maps';
import { StyleSheet, Dimensions, View, Text, } from 'react-native';

const height = Dimensions.get('window').height

const Map = () => {
    return (
        <MapView  
            style={styles.map}
            loadingEnabled={true}
            region={{
                latitude: 37.78520,
                longitude: -122.4224, 
                latitudeDelta: 0.025,
                longitudeDelta: 0.021
            }}
        >
            <MapView.Marker 
                coordinate={{
                    latitude: 37.78035,
                    longitude: -122.4224,
                }}
                image={require('../images/markers/marker.png')} 
            >
                 <Callout tooltip>
                    <View>
                        <View style={styles.bubble}>
                            <Text style={styles.name}> Meagan </Text>
                            <Text>Loves pets</Text>
                            <Text>Loves jogging</Text>
                            <Text>Loves Pizza</Text>
                        </View>
                        <View style={styles.arrowBorder}/>
                        <View style={styles.arrow}/>
                    </View>
                </Callout>
            </MapView.Marker>

             
             
             <MapView.Marker 
                coordinate={{
                    latitude: 37.78335,
                    longitude: -122.4124,
                }}
                image={require('../images/markers/marker.png')}
            >
                <Callout tooltip>
                    <View>
                        <View style={styles.bubble}>
                        <Text style={styles.name}> Mike </Text>
                            <Text>Loves pets</Text>
                            <Text>Loves Pizza</Text>
                        </View>
                        <View style={styles.arrowBorder}/>
                        <View style={styles.arrow}/>
                    </View>
                </Callout>
            </MapView.Marker>


              <MapView.Marker 
                coordinate={{
                    latitude: 37.78435,
                    longitude: -122.4224,
                }}
                image={require('../images/markers/marker.png')} 
                >
                <Callout tooltip>
                        <View>
                        <View style={styles.bubble}>
                        <Text style={styles.name}> Cindy </Text>
                            <Text>Loves Pizza</Text>
                            <Text>Loves pets</Text>
                        </View>
                            <View style={styles.arrowBorder}/>
                            <View style={styles.arrow}/>
                        </View>
                    </Callout>
                </MapView.Marker>

            <MapView.Marker 
                coordinate={{
                    latitude: 37.78535,
                    longitude: -122.4024,
                }}
                image={require('../images/markers/marker.png')} 
                >
                     <Callout tooltip>
                        <View>
                            <View style={styles.bubble}>
                            <Text style={styles.name}> BOB </Text>
                            <Text>Loves jogging</Text>
                            </View>
                            <View style={styles.arrowBorder}/>
                            <View style={styles.arrow}/>
                        </View>
                    </Callout>
                </MapView.Marker>

            <MapView.Marker 
                coordinate={{
                    latitude: 37.78635,
                    longitude: -122.4324,
                }}
                image={require('../images/markers/marker.png')} 
                >
                     <Callout tooltip>
                        <View>
                            <View style={styles.bubble}>
                            <Text style={styles.name}> Lucy </Text>
                            <Text>Loves jogging</Text>
                            </View>
                            <View style={styles.arrowBorder}/>
                            <View style={styles.arrow}/>
                        </View>
                    </Callout>
                </MapView.Marker> 

        </MapView>
    )
}

const styles = StyleSheet.create({
    map:{
        height
    },

    //bubble of the callout
    bubble:{
        flexDirection: 'column',
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 6,
        borderColor: '#ccc',
        borderWidth: 0.5,
        padding: 15,
        width: 150
    },

    //arrow of the bubble

    arrow:{
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#fff',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -32
    },

    arrowBorder:{
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#007a87',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -0.5
    },

    name:{
        fontSize: 16,
        marginBottom:5
    },

    image:{
        width: 12,
        height: 19
    }

})



export default Map