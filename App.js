import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// You can import from local files
import AssetExample from './components/AssetExample';
import Home from './components/Home';
import Todo from './components/Todo/Todo';
import AddTodo from './components/Todo/AddTodo';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="todo" component={Todo} options={{title: "Todo" }}/>        
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({

});
