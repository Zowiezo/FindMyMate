import React from 'react'
import {SafeAreaView} from 'react-navigation'
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import UserList from '../components/UserList'


const MapListScreen = ({ navigation }) => {
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <UserList />
        </SafeAreaView>

    )
}

export default MapListScreen