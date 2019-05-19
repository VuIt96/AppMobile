import React, { Component } from 'react';
import { StyleSheet, View, Image, TextInput, Text, Button, Picker, ImageBackground, ScrollView, Alert } from 'react-native';
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
      <Icon name="analytics" style={{ fontSize: 24, color: tintcolor }} />
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
      test_score: '',
      faculty: "Tiểu học",
      education_program: "Khối kiến thức giáo dục đại cương(40),Khối kiến thức giáo dục chuyên nghiệp(86)"
      // sex: "",
      // nation: "",
      // address: "",
      // area: "",
      // block: "",
      // test_score: '',
      // faculty: "",
      // education_program: ""
    }
  }
  async componentWillMount() {
    let students = await getAllStudents()
    this.setState({ training_data: students })
  }
  onDudoan = () => {
    let { training_data, class_name, features } = this.state
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
    // console.log(this.state.sex, this.state.nation,this.state.address, this.state.area, predicted_class)

    if (this.state.test_score === "") {
      Alert.alert("Thông báo!", "Vui lòng nhập đầy đủ thông tin")
    } else {
      if ((this.state.test_score < 15) | (this.state.test_score > 33)) {
        Alert.alert("Thông báo!", "Vui lòng nhập lại điểm")
        // } else {
        //   if(this.state.faculty==="CNTT-TT"){
        //     var lt = "Khối kiến thức giáo dục đại cương(40),Khối kiến thức giáo dục chuyên nghiệp(86)"
        //     var llt = this.setState({education_program:lt})
        //     var tk = "CNTT-TT"
      } else {
        this.setState({ result: predicted_class })
      }
    }

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
        <Text style={{ fontSize: 17, borderRadius: 3, backgroundColor: 'dodgerblue', color: 'white', width: 150 }}>Thông tin sinh viên</Text>
        <Text style={{ top: -5, borderBottomWidth: 1 }}></Text>
        <ScrollView>
          <View style={styles.viewpicker}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ width: 100, left: 20, top: 10, color: 'navy' }}>Giới Tính</Text>
              <View style={styles.pickers}>
                <Picker
                  style={{ width: 180 }}
                  selectedValue={this.state.sex}
                  onValueChange={(value) => this.setState({ sex: value })}>
                  <Picker.Item label="Nam" value="Nam" />
                  <Picker.Item label="Nữ" value="Nữ" />
                </Picker>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ width: 100, left: 20, top: 10, color: 'navy' }}>Dân Tộc</Text>
              <View style={styles.pickers}>
                <Picker
                  style={{ width: 180 }}
                  selectedValue={this.state.nation}
                  onValueChange={(value) => this.setState({ nation: value })}>
                  <Picker.Item label="Kinh" value="Kinh" />
                  <Picker.Item label="Khác" value="Khác" />
                </Picker>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ width: 100, left: 20, top: 10, color: 'navy' }}>Địa Chỉ</Text>
              <View style={styles.pickers}>
                <Picker
                  style={{ width: 180 }}
                  selectedValue={this.state.address}
                  onValueChange={(value) => this.setState({ address: value })}>
                  <Picker.Item label="TP Thanh Hóa" value="TP Thanh Hóa" />
                  <Picker.Item label="TP Sầm Sơn" value="TP Sầm Sơn" />
                  <Picker.Item label="Bỉm Sơn" value="Bỉm Sơn" />
                  <Picker.Item label="Đông Sơn" value="Đông Sơn" />
                  <Picker.Item label="Quảng Xương" value="Quảng Xương" />
                  <Picker.Item label="Hoằng Hóa" value="Hoằng Hóa" />
                  <Picker.Item label="Hậu Lộc" value="Hậu Lộc" />
                  <Picker.Item label="Hà Trung" value="Hà Trung" />
                  <Picker.Item label="Nga Sơn" value="Nga Sơn" />
                  <Picker.Item label="Yên Định" value="Yên Định" />
                  <Picker.Item label="Đông Sơn" value="Đông Sơn" />
                  <Picker.Item label="Quảng Xương" value="Quảng Xương" />
                  <Picker.Item label="Thiệu Hóa" value="Thiệu Hóa" />
                  <Picker.Item label="Hậu Lộc" value="Hậu Lộc" />
                  <Picker.Item label="Triệu Sơn" value="Triệu Sơn" />
                  <Picker.Item label="Tĩnh Gia" value="Tĩnh Gia" />
                  <Picker.Item label="Nông Cống" value="Nông Cống" />
                  <Picker.Item label="Ngọc Lặc" value="Ngọc Lặc" />
                  <Picker.Item label="Cẩm Thủy" value="Cẩm Thủy" />
                  <Picker.Item label="Thạch Thành" value="Thạch Thành" />
                  <Picker.Item label="Vĩnh Lộc" value="Vĩnh Lộc" />
                  <Picker.Item label="Thọ Xuân" value="Thọ Xuân" />
                  <Picker.Item label="Như Thanh" value="Như Thanh" />
                  <Picker.Item label="Như Xuân" value="Như Xuân" />
                  <Picker.Item label="Thường Xuân" value="Thường Xuân" />
                  <Picker.Item label="Lang Chánh" value="Lang Chánh" />
                  <Picker.Item label="Bá Thước" value="Bá Thước" />
                  <Picker.Item label="Quan Hóa" value="Quan Hóa" />
                  <Picker.Item label="Quan Sơn" value="Quan Sơn" />
                  <Picker.Item label="Mường Lát" value="Mường Lát" />
                  <Picker.Item label="Khác" value="Khác" />
                </Picker>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ width: 100, left: 20, top: 10, color: 'navy' }}>Khu Vực</Text>
              <View style={styles.pickers}>
                <Picker
                  style={{ width: 180 }}
                  selectedValue={this.state.area}
                  onValueChange={(value) => this.setState({ area: value })}>
                  <Picker.Item label="KV1" value="KV1" />
                  <Picker.Item label="KV2" value="KV2" />
                  <Picker.Item label="2NT" value="2NT" />
                  <Picker.Item label="KV3" value="KV3" />
                </Picker>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ width: 100, left: 20, top: 10, color: 'navy' }}>Khu Vực</Text>
              <View style={styles.pickers}>
                <Picker
                  style={{ width: 180 }}
                  selectedValue={this.state.block}
                  onValueChange={(value) => this.setState({ block: value })}>
                  <Picker.Item label="A" value="A" />
                  <Picker.Item label="A1" value="A1" />
                  <Picker.Item label="B" value="B" />
                  <Picker.Item label="C" value="C" />
                  <Picker.Item label="D" value="D" />
                  <Picker.Item label="M" value="M" />
                </Picker>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ width: 100, left: 20, top: 10, color: 'navy' }}>Điểm Thi</Text>
              <View>
                <TextInput
                  style={styles.textinputs}
                  keyboardType='numeric'
                  placeholder='15<Điểm<33'
                  maxLength={4}
                  value={this.state.test_score}
                  onChangeText={(value) => this.setState({ test_score: value })}
                />
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ width: 100, left: 20, top: 10, color: 'navy' }}>Tên Ngành</Text>
              <View style={styles.pickers}>
                <Picker
                  style={{ width: 180 }}
                  selectedValue={this.state.faculty}
                  onValueChange={(value) => this.setState({ faculty: value })}>
                  <Picker.Item label="CNTT-TT" value="CNTT-TT" />
                  <Picker.Item label="Xã Hội" value="Xã hội" />
                  <Picker.Item label="Tiểu Học" value="Tiểu học" />
                  <Picker.Item label="Tự Nhiên" value="Tự nhiên" />
                  <Picker.Item label="GDTC" value="GDTC" />
                  <Picker.Item label="Mầm Non" value="Mầm non" />
                  <Picker.Item label="KT-QTKD" value="KT-QTKD" />
                  <Picker.Item label="Tâm Lý-Giáo Dục" value="TL-GD" />
                  <Picker.Item label="Luật" value="Luật" />
                  <Picker.Item label="Ngoại Ngữ" value="Ngoại ngữ" />
                  <Picker.Item label="N-L-N Nghiệp" value="N-L-N Nghiệp" />
                  <Picker.Item label="KTCN" value="KTCN" />
                </Picker>
              </View>
            </View>
            <View style={{ width: 250, flexDirection: 'row' }}>
              <View style={{ left: 10, width: 100 }}>
                <Button
                title='Dự đoán'
                  onPress={this.onDudoan}
                />
              </View>
              <View style={{ left: 70, width: 100 }}>
                <Button
                  title='Thoát'
                  onPress={() => this.props.navigation.navigate('Trang chủ')}
                />
              </View>
            </View>
          </View>
          <Text></Text>
          <Text style={{ left: 2, fontSize: 17, borderRadius: 3, backgroundColor: 'dodgerblue', color: 'white', width: 140 }}>Kết quả dự đoán</Text>
          <Text style={{ borderBottomWidth: 1, top: -5 }}></Text>
          <View style={styles.viewdudoan}>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ top: 6, marginBottom: 10, fontSize: 15 }}>Kết quả dự đoán:</Text>
              <Text style={styles.input}>{this.state.result}</Text>
              <Text style={styles.input}></Text>
              <Text style={styles.input}></Text>
            </View>
            <View style={{ width: 200 }}>
              <Text></Text>
            </View>
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
  pickers: {
    margin: 15,
    borderColor: 'midnightblue',
    borderWidth: 1,
    left: 1,
    top: -20,
    height: 50,
    width: 180,
    borderRadius: 20,
    alignItems: 'center',
    textAlign:'center'
  },
  textinputs: {
    margin: 15,
    borderColor: 'midnightblue',
    left: 1,
    borderWidth: 1,
    top: -20,
    height: 50,
    width: 180,
    borderRadius: 20,
    alignItems: 'center',
    textAlign: 'center'
  },
  input: {
    margin: 15,
    borderColor: 'black',
    width: 150,
    borderWidth: 1,
    padding: 8,
    alignItems: 'center',
    textAlign: 'center'
  },
  viewpicker: {
    margin: 15,
    borderColor: 'midnightblue',
    borderWidth: 1,
    left: 1,
    width: 330,
    padding: 8,
    alignItems: 'center',
    top: -15,
    borderRadius: 30
  },
  viewdudoan: {
    margin: 5,
    borderColor: 'midnightblue',
    borderWidth: 1,
    left: 35,
    width: 280,
    padding: 8,
    alignItems: 'center',
    borderRadius: 30,
  }
});