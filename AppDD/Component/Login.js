import React, { component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { Header, Left, Right, Icon } from 'native-base';
class Login extends React.Component {
//   static navigationOptions = {
//     title: "Login",
//     header: null,
//   };
static navigationOptions = {
    drawerIcon: ({ tintcolor }) => (
      <Icon name="analytics" style={{ fontSize: 24, color: tintcolor }} />
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
        <Text style={styles.headerText}>LOGIN</Text>
        <TextInput style={styles.input}
          value={this.state.user1}
        //   keyboardType = 'email-address'
          onChangeText={(user1) => this.setState({ user1 })}
          placeholder='username'
        />
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
    backgroundColor: 'rgba(215,125,115,0.2)',
    marginBottom: 10,
    padding: 10,
    color: 'green',
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
    fontWeight: 'bold'
  },
});

export default (Login)