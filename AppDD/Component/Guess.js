import React, { Component } from 'react';
import { StyleSheet, View, ListView, Image, TouchableOpacity, Text, Button, Picker, ImageBackground, ScrollView, Alert, FlatList, TextInput } from 'react-native';
import { Header, Left, Right, Icon } from 'native-base';
import { getAllStudents } from './Services';
import { cntt } from './Data'
// import {datafake} from './data'
var DecisionTree = require('decision-tree');

export default class DuDoan extends React.Component {
  static navigationOptions = {
    drawerIcon: () => (
      <Icon name="analytics" style={{ color: 'mediumseagreen' }} />
    )
  };
  constructor() {
    super();
    this.state = {
      result: "",
      training_data: [],
      class_name: "result",
      features: ["sex", "nation", "address", "area", "block", "test_score", "key_testscore", "faculty", "education_program"],
      sex: "Nam",
      nation: "Kinh",
      address: "Thọ Xuân",
      area: "2NT",
      block: "A",
      test_score: '',
      key_testscore: '',//
      faculty: "CNTT-TT",
      education_program: "Khối kiến thức giáo dục đại cương(42),Khối kiến thức giáo dục chuyên nghiệp(88)",
      lotrinh: " ",
      tennganh: " ",
      HK1: " ",
      HK2: " ",
      HK3: " ",
      HK4: " ",
      Diem2: '',
      Diem3: '',
    }
  }
  async componentWillMount() {
    let students = await getAllStudents()
    this.setState({ training_data: students })
  }
  submitAndClear = () => {
    // this.props.writeText(this.state.key_testscore)
    this.setState({ key_testscore: '' })
    this.setState({ Diem2: '' })
    this.setState({ Diem3: '' })
    this.setState({ result: '' })
    this.setState({ tennganh: '' })
    this.setState({ lotrinh: '' })
    this.setState({ HK1: '' })
    this.setState({ HK2: '' })
    this.setState({ HK3: '' })
    this.setState({ HK4: '' })
  }
  onDudoan = () => {
    let { training_data, class_name, features, Diem2, Diem3 } = this.state
    var dt = new DecisionTree(training_data, class_name, features);
    var predicted_class = dt.predict({
      sex: this.state.sex,
      nation: this.state.nation,
      address: this.state.address,
      area: this.state.area,
      block: this.state.block,
      test_score: this.state.test_score,
      key_testscore: this.state.key_testscore,
      faculty: this.state.faculty,
      education_program: this.state.education_program
    });
    var d1 = this.state.key_testscore;
    var d2 = Diem2;
    var d3 = Diem3;
    var tongdiem = (Number(d1) + Number(d2) + Number(d3));
    if (this.state.key_testscore === "" || this.state.Diem2 === "" || this.state.Diem3 === "") {
      Alert.alert("Thông báo!", "Vui lòng nhập đầy đủ thông tin")
    } else {
      if ((this.state.key_testscore < 1) || (this.state.key_testscore > 10) || this.state.Diem2 < 1 || this.state.Diem2 > 10 || this.state.Diem3 < 1 || this.state.Diem3 > 10|| tongdiem <15){
        Alert.alert("Thông báo!", "Vui lòng nhập lại điểm")
      } else {
        if (this.state.faculty === "CNTT-TT") {
          var lt = "Khối kiến thức giáo dục đại cương(42),Khối kiến thức giáo dục chuyên nghiệp(84)"
          var lt1 = " HK1: Giải tích(4TC), Đại số tuyến tính(2TC), TA1(4TC), LT_C cơ bản(3TC), Tin cơ sở(3TC), GDTC1(2TC), Mác 1(2TC) - HK2: TA2(3TC), Vật lí 1(3TC), LT_C nâng cao(2TC), Toán rời rạc (2TC), CSDL(2TC), GDTC(2TC), Mác2(2TC) "
          var lt2 = " HK1: Xác suất(3TC), TA3(3TC), Kiến trúc MT(3TC), LT đồ thị(2TC), CTDL và GT(3TC), PL đại cương(2TC), Tư tưởng HCM(2TC) - HK2: HĐH(32C), LT mật mã(2TC), PPNCKH(2TC), TK CSDL(2TC), TK WEB(2TC), LT HĐT(3), Đường lối(3TC)"
          var lt3 = "HK1: Mạng MT(3TC), CT dịch(3TC), XL ảnh(3TC), Trí tuệ nhân tạo(3TC), HQT CSDL(3TC), PTTK HĐT(3TC) - HK2: CN Java(3TC), LT mạng(3TC), TKQT Mạng(3TC), CNPM(3TC), TKPM(2TC), LT WEB(2TC)"
          var lt4 = "HK1: Mạng MT(3TC), CT dịch(3TC), XL ảnh(3TC), Trí tuệ nhân tạo(3TC), HQT CSDL(3TC), PTTK HĐT(3TC) - HK2: CN Java(3TC), LT mạng(3TC), TKQT Mạng(3TC), CNPM(3TC), TKPM(2TC), LT WEB(2TC)"
          var tn = "CNTT-TT"
          if (this.state.block === "C" || this.state.block === "M") {
            Alert.alert("Thông báo!", "Khối bạn chọn không phù hợp với ngành xét tuyển")
          } else {
            this.setState({ lotrinh: lt })
            this.setState({ education_program: lt })
            this.setState({ HK1: lt1 })
            this.setState({ HK2: lt2 })
            this.setState({ HK3: lt3 })
            this.setState({ HK4: lt4 })
            this.setState({ tennganh: tn })
            this.setState({ test_score: tongdiem })
            this.setState({ result: predicted_class })
          }
        } else {
          if (this.state.faculty === "Xã hội") {
            var lt = "Khối kiến thức giáo dục đại cương(42),Khối kiến thức giáo dục chuyên nghiệp(88)"
            var tn = "Xã hội"
            if (this.state.block === "A" || this.state.block === "B" || this.state.block === "A1" || this.state.block === "M") {
              Alert.alert("Thông báo!", "Khối bạn chọn không phù hợp với ngành xét tuyển")
            } else {
              this.setState({ lotrinh: lt })
              this.setState({ education_program: lt })
              this.setState({ tennganh: tn })
              this.setState({ result: predicted_class })
            }
          } else {
            if (this.state.faculty === "Tiểu học") {
              var lt = "Khối kiến thức giáo dục đại cương(40),Khối kiến thức giáo dục chuyên nghiệp(86)"
              var tn = "Tiểu học"
              this.setState({ education_program: lt })
              this.setState({ lotrinh: lt })
              this.setState({ tennganh: tn })
              this.setState({ result: predicted_class })
            } else {
              if (this.state.faculty === "Mầm non") {
                var lt = "Khối kiến thức giáo dục đại cương(34),Khối kiến thức giáo dục chuyên nghiệp(80)"
                var tn = "Mầm non"
                if (this.state.block === "M") {
                  this.setState({ lotrinh: lt })
                  this.setState({ education_program: lt })
                  this.setState({ tennganh: tn })
                  this.setState({ result: predicted_class })
                } else {
                  Alert.alert("Thông báo!", "Khối bạn chọn không phù hợp với ngành xét tuyển")
                }
              } else {
                if (this.state.faculty === "GDTC") {
                  var lt = "Khối kiến thức giáo dục đại cương(40),Khối kiến thức giáo dục chuyên nghiệp(73)"
                  var tn = "GDTC"
                  if (this.state.block === "M") {
                    this.setState({ lotrinh: lt })
                    this.setState({ education_program: lt })
                    this.setState({ tennganh: tn })
                    this.setState({ result: predicted_class })
                  } else {
                    Alert.alert("Thông báo!", "Khối bạn chọn không phù hợp với ngành xét tuyển")
                  }
                } else {
                  if (this.state.faculty === "KTCN") {
                    var lt = "Khối kiến thức giáo dục đại cương(36),Khối kiến thức giáo dục chuyên nghiệp(90)"
                    var tn = "KTCN"
                    if (this.state.block === "C" || this.state.block === "M") {
                      Alert.alert("Thông báo!", "Khối bạn chọn không phù hợp với ngành xét tuyển")
                    } else {
                      this.setState({ lotrinh: lt })
                      this.setState({ education_program: lt })
                      this.setState({ tennganh: tn })
                      this.setState({ result: predicted_class })
                    }
                  } else {
                    if (this.state.faculty === "Luật") {
                      var lt = "Khối kiến thức giáo dục đại cương(45),Khối kiến thức giáo dục chuyên nghiệp(68)"
                      var tn = "Luật"
                      if (this.state.block === "A" || this.state.block === "A1") {
                        Alert.alert("Thông báo!", "Khối bạn chọn không phù hợp với ngành xét tuyển")
                      } else {
                        this.setState({ lotrinh: lt })
                        this.setState({ education_program: lt })
                        this.setState({ tennganh: tn })
                        this.setState({ result: predicted_class })
                      }
                    } else {
                      if (this.state.faculty === "Ngoại ngữ") {
                        var lt = "Khối kiến thức giáo dục đại cương(26),Khối kiến thức giáo dục chuyên nghiệp(90)"
                        var tn = "Ngoại ngữ"
                        if (this.state.block === "A" || this.state.block === "M" || this.state.block === "B") {
                          Alert.alert("Thông báo!", "Khối bạn chọn không phù hợp với ngành xét tuyển")
                        } else {
                          this.setState({ lotrinh: lt })
                          this.setState({ education_program: lt })
                          this.setState({ tennganh: tn })
                          this.setState({ result: predicted_class })
                        }
                      } else {
                        if (this.state.faculty === "KT-QTKD") {
                          var lt = "Khối kiến thức giáo dục đại cương(26),Khối kiến thức giáo dục chuyên nghiệp(90)"
                          var tn = "KT-QTKD"
                          if (this.state.block === "C" || this.state.block === "M") {
                            Alert.alert("Thông báo!", "Khối bạn chọn không phù hợp với ngành xét tuyển")
                          } else {
                            this.setState({ lotrinh: lt })
                            this.setState({ education_program: lt })
                            this.setState({ tennganh: tn })
                            this.setState({ result: predicted_class })
                          }
                        } else {
                          if (this.state.faculty === "N-L-N Nghiệp") {
                            var lt = "Khối kiến thức giáo dục đại cương(44),Khối kiến thức giáo dục chuyên nghiệp(82)"
                            var tn = "N-L-N Nghiệp"
                            if (this.state.block === "C" || this.state.block === "M") {
                              Alert.alert("Thông báo!", "Khối bạn chọn không phù hợp với ngành xét tuyển")
                            } else {
                              this.setState({ lotrinh: lt })
                              this.setState({ education_program: lt })
                              this.setState({ tennganh: tn })
                              this.setState({ result: predicted_class })
                            }
                          } else {
                            if (this.state.faculty === "TL-GD") {
                              var lt = "Khối kiến thức giáo dục đại cương(46),Khối kiến thức giáo dục chuyên nghiệp(67)"
                              var tn = "TL-GD"
                              if (this.state.block === "A" || this.state.block === "B" || this.state.block === "A1" || this.state.block === "M") {
                                Alert.alert("Thông báo!", "Khối bạn chọn không phù hợp với ngành xét tuyển")
                              } else {
                                this.setState({ lotrinh: lt })
                                this.setState({ education_program: lt })
                                this.setState({ tennganh: tn })
                                this.setState({ result: predicted_class })
                              }
                            } else {
                              if (this.state.faculty === "Tự nhiên") {
                                var lt = "Khối kiến thức giáo dục đại cương(37),Khối kiến thức giáo dục chuyên nghiệp(89)"
                                var tn = "Tự nhiên"
                                if (this.state.block === "C" || this.state.block === "M") {
                                  Alert.alert("Thông báo!", "Khối bạn chọn không phù hợp với ngành xét tuyển")
                                } else {
                                  this.setState({ lotrinh: lt })
                                  this.setState({ education_program: lt })
                                  this.setState({ tennganh: tn })
                                  this.setState({ result: predicted_class })
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 24, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
        </View>
        <Header style={{ backgroundColor: '#bdc3c7', height: 50 }}>
          <Left style={{ left: -75 }}>
            <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
          </Left>
          <Text style={{ fontSize: 20, left: -40, top: 10, color: 'seagreen' }}>Dự đoán</Text>
        </Header>
        <View>
          <ImageBackground style={{ width: 360, height: 150 }} source={require('./img/logo.jpg')}>
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
              <Text style={{ width: 100, left: 20, top: 10, color: 'navy' }}>Khối thi</Text>
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
              <Text style={{ width: 100, left: 20, top: 10, color: 'navy' }}>Điểm Môn 1</Text>
              <View>
                <TextInput
                  style={styles.textinputs}
                  keyboardType='numeric'
                  placeholder='1=< Điểm =<10'
                  maxLength={4}
                  value={this.state.key_testscore}
                  onChangeText={(value) => this.setState({ key_testscore: value })}
                />
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ width: 100, left: 20, top: 10, color: 'navy' }}>Điểm Môn 2</Text>
              <View>
                <TextInput
                  style={styles.textinputs}
                  keyboardType='numeric'
                  placeholder='1=< Điểm =<10'
                  maxLength={4}
                  value={this.state.Diem2}
                  onChangeText={(value) => this.setState({ Diem2: value })}
                />
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ width: 100, left: 20, top: 10, color: 'navy' }}>Điểm Môn 3</Text>
              <View>
                <TextInput
                  style={styles.textinputs}
                  keyboardType='numeric'
                  placeholder='1=< Điểm =<10'
                  maxLength={4}
                  value={this.state.Diem3}
                  onChangeText={(value) => this.setState({ Diem3: value })}
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
                  title='Reset'
                  onPress={this.submitAndClear}
                />
              </View>
            </View>
          </View>
          <Text></Text>
          <Text style={{ left: 2, fontSize: 17, borderRadius: 3, backgroundColor: 'dodgerblue', color: 'white', width: 140 }}>Kết quả dự đoán</Text>
          <Text style={{ borderBottomWidth: 1, top: -5 }}></Text>
          <View style={styles.viewdudoan}>
            <View style={{ flexDirection: 'column' }}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'midnightblue', top: 10 }}> KQ học tập: </Text>
                <Text style={styles.input}>{this.state.result}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'midnightblue', top: 10 }}> Tên ngành:  </Text>
                <Text style={styles.input}>{this.state.tennganh}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'midnightblue', top: 10 }}> Lộ trình:       </Text>
                <Text style={styles.input}>{this.state.lotrinh}</Text>
              </View>
              <View>
                <Text style={{ color: 'midnightblue', top: 10, textAlign: 'center' }}>LT chi tiết     </Text>
                {/* <Text style={styles.input}>{this.state.chitiet}</Text> */}
                <View style={{ flexDirection: 'column' }}>
                  <Text style={{ color: 'midnightblue', top: 10 }}> Năm 1:  </Text>
                  <Text style={styles.output}>{this.state.HK1}</Text>
                </View>
                <View style={{ flexDirection: 'column' }}>
                  <Text style={{ color: 'midnightblue', top: 10 }}> Năm 2:  </Text>
                  <Text style={styles.output}>{this.state.HK2}</Text>
                </View>
                <View style={{ flexDirection: 'column' }}>
                  <Text style={{ color: 'midnightblue', top: 10 }}> Năm 3:  </Text>
                  <Text style={styles.output}>{this.state.HK3}</Text>
                </View>
                <View style={{ flexDirection: 'column' }}>
                  <Text style={{ color: 'midnightblue', top: 10 }}> Năm 4:  </Text>
                  <Text style={styles.output}>{this.state.HK4}</Text>
                </View>
              </View>
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
    margin: 5,
    fontWeight: 'bold'
  },
  pickers: {
    margin: 5,
    borderColor: 'midnightblue',
    borderWidth: 1,
    left: 1,
    top: -10,
    height: 50,
    width: 180,
    borderRadius: 20,
    alignItems: 'center',
    textAlign: 'center'
  },
  textinputs: {
    margin: 5,
    borderColor: 'midnightblue',
    left: 1,
    borderWidth: 1,
    top: -10,
    height: 50,
    width: 180,
    borderRadius: 20,
    alignItems: 'center',
    textAlign: 'center'
  },
  input: {
    margin: 5,
    borderColor: 'black',
    width: 150,
    borderWidth: 1,
    padding: 8,
    alignItems: 'center',
    textAlign: 'center'
  },
  output: {
    margin: 3,
    borderColor: 'black',
    width: 250,
    borderWidth: 1,
    padding: 8,
    top: 5
  },
  viewpicker: {
    margin: 5,
    borderColor: 'midnightblue',
    borderWidth: 1,
    left: 10,
    width: 330,
    padding: 8,
    alignItems: 'center',
    top: -5,
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