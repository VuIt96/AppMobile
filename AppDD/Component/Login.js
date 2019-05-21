import React, { component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert,Image } from 'react-native';
import { Header, Left, Right, Icon } from 'native-base';
class Login extends React.Component {
  //   static navigationOptions = {
  //     title: "Login",
  //     header: null,
  //   };
  static navigationOptions = {
    drawerIcon: ({ tintcolor }) => (
      <Icon name="log-out" style={{ fontSize: 24, color: tintcolor }} />
    )
  };
  state = {
    user: 'admin',
    password: 'admin',
    user1: '',
    password1: '',
  };
  onLogin() {
    const { user1, password1, user, password } = this.state;
    //Alert.alert('Tài khoản vừa đăng nhập', `user: ${user1}: ${user}và pass: ${password1}`)
    if ((this.state.user === user1) && (this.state.password === password1)) {
      // chuyen trang khi nhap dung
      this.props.navigation.navigate('Trang chủ')
    }
    else {
      if (this.props.user !== user1)
        Alert.alert("Thông báo!", "Tài khoản sai");
      else
        Alert.alert("Thông báo!", "Mật khẩu sai");
    }
  }
  render() {
    return (
      <View style={styles.container}>
      <Image style={{width:100, height: 90, top:-30}} source={require('./img/iconhdu.jpg')}/>
        <Text style={styles.headerText}>Đăng Nhập</Text>
        {/* <View style={{ flexDirection: 'row' }}>
          <Icon name="lock" /> */}
          <TextInput style={styles.input}
            value={this.state.user1}
            //   keyboardType = 'email-address'
            onChangeText={(user1) => this.setState({ user1 })}
            placeholder='username'
          />
        {/* <View style={{ flexDirection: 'row', backgroundColor: 'rgba(215,125,115,0.2)' }}>
          <Icon name="key" /> */}
          <TextInput style={styles.input}
            // gán giá trị vào state.password
            value={this.state.password1}
            onChangeText={(password1) => this.setState({ password1 })}
            placeholder={'password'}
            secureTextEntry={true}
          />
        <Button style={styles.buttonText}
          title="LOGIN"
          onPress={this.onLogin.bind(this)}
        >
        </Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 220,
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    color: 'green',
    top: -20,
    backgroundColor: 'rgba(215,125,115,0.2)'
  },
  button: {
    backgroundColor: '#2980b6',
    paddingVertical: 15
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    height: 20,
    width: 60,
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold', 
    color: 'midnightblue',
    top: -30
  },
});
export default (Login)