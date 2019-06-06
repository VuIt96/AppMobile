import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';
import { createDrawerNavigator, DrawerItems, createStackNavigator } from 'react-navigation';
import Home from './Component/Home';
import DuDoan from './Component/Guess';
import Login from './Component/Login';
import ChiTiet from './Component/ChiTiet';
import GioiThieu from './Component/GioiThieu'
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
      <Image style={{ width: 50, height: 50, alignItems: 'center', borderRadius: 10, top: 3 }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnX6Itr__T6FZa7qxoQn4K0umbjeCemLady3pTVDX24JwIz8lctg' }} />
      <Text style={{ alignItems: 'center', color: 'blue', top: 10 }}>Đỗ Viết Vũ</Text>
      <Text style={{ alignItems: 'center', color: 'blue', top: 10 }}>MSV: 1561030049</Text>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)
// const AppDrawerNavigator = createDrawerNavigator(
//   {
//     "Đăng xuất": Login,
//     "Trang chủ": Home,
//     "Dự đoán": DuDoan,
//     "Giới thiệu": GioiThieu,
//     " ": ChiTiet,
//   },
//   {
//     contentComponent: customDrawerComponent,
//     contentOptions: {
//       activeTintColor: 'green'
//     }
//   }
// );
const Drawer = createDrawerNavigator(
  {
    "Trang chủ": Home,
    "Dự đoán": DuDoan,
    "Giới thiệu": GioiThieu,
    "Đăng xuất": Login,
    " ": ChiTiet,
  },
  {
    initialRouteName: "Trang chủ",
    contentOptions: {
      activeTintColor: "#db3839"
    }
    // contentComponent: props => <SideBar {...props} />
  }
);
const AppDrawerNavigator = createStackNavigator(
  {
    "Login": Login,
    Drawer
  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  },
  {
    contentComponent: customDrawerComponent,
    contentOptions: {
      activeTintColor: 'green'
    }
  }
)