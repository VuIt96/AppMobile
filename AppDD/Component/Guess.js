import React, { Component } from 'react';
import { StyleSheet, View, Image, TextInput, Text, Button, ListView, ImageBackground, ScrollView } from 'react-native';
import { Header, Left, Right, Icon } from 'native-base';
import { Dropdown } from 'react-native-material-dropdown';
import { GT, DanToc, QueQuan, TenK, KhoiThi, Diem, KetQua, KhuVuc } from './DataFake';
import { Data } from './Data';
import { getAllStudents } from './Services';
// import {datafake} from './data'
var DecisionTree = require('decision-tree');

export default class DuDoan extends React.Component {
  static navigationOptions = {
    drawerIcon: ({ tintcolor }) => (
      <Icon name="home" style={{ fontSize: 24, color: tintcolor }} />
    )
  };
  constructor() {
    super();
    this.state = {
      result: "",
      training_data: [],
      class_name: "result",
      features: ["sex", "nation", "address", "area", "block", "test_score", "faculty", "education_program"],
      // data mẫu để test. e chỉ cần bắt sự kiện thay đổi giá trị của picker và gán lại state tương ứng là đc.
      sex: "Nam",
      nation: "Khác",
      address: "Vĩnh Lộc",
      area: "KV2",
      block: "A1",
      test_score: 16.5,
      faculty: "Tiểu học",
      education_program: "Khối kiến thức giáo dục đại cương(40),Khối kiến thức giáo dục chuyên nghiệp(86)"
    }
  }
  async componentWillMount() {
    let students = await getAllStudents()
    this.setState({ training_data: students })
  }

  onDudoan = () => {
    let {training_data, class_name, features} = this.state
    var dt = new DecisionTree(training_data, class_name, features);
    var predicted_class = dt.predict({
      sex: this.state.sex,
      nation: this.state.nation,
      address: this.state.address,
      area: this.state.area,
      block: this.state.block,
      test_score: this.state.test_score,
      faculty: this.state.faculty,
      education_program: this.state.education_program
    });
    this.setState({ result: predicted_class })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 24, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
        </View>
        <Header style={{ backgroundColor: '#bdc3c7', height: 50 }}>
          <Right>
            <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
          </Right>
        </Header>
        <View>
          <ImageBackground style={{ width: 355, height: 150 }} source={require('./img/logo.jpg')}>
            <Text style={{ color: 'blue', textAlign: 'center', fontSize: 18 }}>HỆ THỐNG DỰ ĐOÁN KẾT QUẢ HỌC TẬP</Text>
            <Text style={{ color: 'blue', textAlign: 'center', fontSize: 18 }}>CỦA SINH VIÊN</Text>
          </ImageBackground>
        </View>
        <Text></Text>
        <Text style={{ borderBottomWidth: 1, borderRadius: 3, backgroundColor: 'dodgerblue', color: 'white', width: 120 }}>Thông tin sinh viên</Text>
        <ScrollView>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ left: 10, width: 100 }}>
              <Dropdown
                label='Giới Tính'
                data={GT}
              />
            </View>
            <View style={{ left: 30, width: 100 }}>
              <Dropdown
                label='Dân tộc'
                data={DanToc}
              />
            </View>
            <View style={{ left: 45, width: 100 }}>
              <Dropdown
                label='Khu Vực'
                data={KhuVuc}
              />
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ left: 10, width: 150 }}>
              <Dropdown
                label='Địa Chỉ'
                data={QueQuan}
              />
            </View>
            <View style={{ left: 50, width: 150 }}>
              <Dropdown
                label='Khối Thi'
                data={KhoiThi}
              />
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ left: 10, width: 150 }}>
              <Dropdown
                label='Tên Khoa'
                data={TenK}
              />
            </View>
            <View style={{ left: 50, width: 150 }}>
              <Dropdown
                label='Điểm Thi'
                data={Diem}
              />
            </View>
          </View>
          <Text></Text>
          <View style={{ width: 150, flexDirection: 'row' }}>
            <View style={{ left: 70, borderRadius: 20 }}>
              <Button
                title='Dự Đoán'
                onPress={this.onDudoan}
              />
            </View>
            <View style={{ left: 100, borderRadius: 20 }}>
              <Button
                title='Thoát'
                onPress={() => this.props.navigation.navigate('Home')}
              />
            </View>
          </View>
          <Text></Text>
          <Text style={{ borderRadius: 3, backgroundColor: 'dodgerblue', color: 'white', width: 120 }}>Kết quả dự đoán</Text>
          <Text></Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ marginBottom: 10, fontSize: 15 }}>Kết quả dự đoán:</Text>
            <Text style={{ left: 30, backgroundColor: 'aqua', width: 150, textAlign: 'center', alignItems: 'center' }}>{this.state.result}</Text>
          </View>
        </ScrollView>
      </View >

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold'
  },
  imgnam: {
    width: 230,
    height: 130,
  },
  imgpnam: {
    width: 130,
    height: 130,
  }
});