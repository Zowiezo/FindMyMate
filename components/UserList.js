import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const UserList = () => {

    const users = [
        {
           name: 'Meagan',
           avatar: 'https://tlc.sndimg.com/content/dam/images/tlc/tlcme/legacy/2018/Pawternity%20Leave.jpg.rend.hgtvcom.406.271.suffix/1539643845290.jpeg',
           interest: 'pet Lover also Loves Jogging and pizza' 
        },
        {
          name: 'Mike',
          avatar: 'https://storage.googleapis.com/afs-prod/media/media:6ec7fe360a6249ed9d9726dd2ba1380f/3000.jpeg',
          interest: 'pet Lover also Loves pizza'
       },
       {
        name: 'Cindy',
        avatar: 'https://images.takeshape.io/f1ba446a-c0cf-4882-b0c9-50298f143ec2/dev/cbc9dc32-ba26-436d-842c-19aa667fa335/619134?auto=compress%2Cformat&crop=center',
        interest: 'Loves pizza and pets'
      },
      {
        name: 'Bob',
        avatar: 'https://images-prod.healthline.com/hlcmsresource/images/topic_centers/2018-9/Jogging_Male_Road-732x549-Thumbnail.jpg',
        interest: 'Loves Jogging'
      },
      {
        name: 'Lucy',
        avatar: 'https://cf.ltkcdn.net/exercise/images/std/248860-699x450-jogging-beginners.jpg',
        interest: 'Loves Joggin'
      } 

        
       ]

    return (
      <Card title="USERS">
      {
        users.map((u, i) => {
          return (
            <View key={i} style={styles.user}>
              <Image
                style={styles.image}
                resizeMode="cover"
                source={{ uri: u.avatar }}
              />
              <Text style={styles.name}>{u.name}</Text>
              <Text style={styles.interest}>{u.interest}</Text>
            </View>
          );
        })
      }
    </Card>
)}

const styles = StyleSheet.create({
  image:{
    width: 60,
    height: 30,
    borderRadius: 20
},
  users:{
    fontSize: 39,
  },
  name:{
    fontSize: 16,
    marginBottom:5
},
interest:{
  fontSize: 16,
  marginBottom:5
},
})

export default UserList