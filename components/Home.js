import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Icon, Button } from 'react-native';
import { Card, Image } from "@rneui/themed";

const Home = ({navigation}) =>{
  const users = [
        {
          name: 'brynn',
          avatar: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
        },
        {
          name: 'thot leader',
          avatar:
            'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
        },
        {
          name: 'jsa',
          avatar: 'https://uifaces.co/our-content/donated/bUkmHPKs.jpg',
        },
        {
          name: 'talhaconcepts',
          avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
        },
        {
          name: 'andy vitale',
          avatar: 'https://uifaces.co/our-content/donated/NY9hnAbp.jpg',
        },
        {
          name: 'katy friedson',
          avatar:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg',
        },
        ];
  return(
    <ScrollView>
      <Button title="Go To Product click here" 
                onPress={() =>      navigation.navigate("Product")} /> 
      
      <Text> Home Page </Text>
      <Button color={"error"} title={"ClickMe"} />
      {users.map((user, index) => {
        return (
          <Card> 
            <Card.Title> {user.name} 
            </Card.Title> 
            <Image 
            style={{width:"100%",height:100}}
            resizeMode="contain"
            source={{ uri:user.avatar }}/>
          </Card>
        )
      })
      }
      <Card> 
        <Card.Title> Hello Card </Card.Title> 
      <Image
        style={{width:"100%",height:100}}
        resizeMode="contain"
        source={{ uri: "https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4" }} />
      </Card>

    </ScrollView>
  )
};


export default Home;
