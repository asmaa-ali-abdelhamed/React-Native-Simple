import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, ScrollView, Icon, Button, Card } from 'react-native';
import Style from "./Style";
import axios from "axios";
import Details from "./Details";

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const Prodact = ({navigation}) =>{

  const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then((res) => setProducts(res.data))
        .catch((err) => alert(err) )
    }, [])
  
  return(
    <ScrollView>
      <Text style={Style.myFont}> Products Page  </Text>

      {products.map((product) => {
        return  (
          <Card> 
            <Card.Title  onPress=
              {() => navigation.navigate("details", {id: product.id})}>
              {product.title} 
            </Card.Title> 
          <Image
            style={{width:"100%",height:100}}
            resizeMode="contain"
            source={{ uri: product.image }}
            />  
          </Card>
           )
        })}

    </ScrollView>
  )}

  
  export default Prodact;


// import { Card, Image } from "@rneui/themed";


