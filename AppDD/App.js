import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import Home from './Component/Home';
import DuDoan from './Component/Guess';
 const { width } = Dimensions.get('window')
export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator />
    );
  }
}
const customDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ height: 150, backgroundColor: '#bdc3c7', alignItems: 'center', justifyContent: 'center' }}>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)
const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: Home,
    Guess: DuDoan,
  },
  {
    contentComponent: customDrawerComponent,
    contentOptions: {
      activeTintColor: 'green'
    }
  }
);