import * as React from 'react';
import { Text, View, StyleSheet , Icons } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// You can import from local files
import AssetExample from './components/AssetExample';
import Home from './components/Home';
import Product from './components/Product';
import Form from './components/Form';
import RandomText from './components/RandomText';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
     <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Main Home" component={Home} options={{title: "Home Page" }}/>

          <Tab.Screen name="Product" component={Product} 
        options={{title: "Product Page"}}
        />

          <Tab.Screen name="form" component={Form} 
        options={{title: "Form Page"}}
        />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  
});
