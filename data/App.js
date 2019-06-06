import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, ScrollView } from 'react-native';
import { Data } from './Data';
import { FileSystem } from 'expo';
import axios from 'axios'
export default class MyProject extends Component {
  constructor() {
    super();
    this.state = {
      // This is our Default number value
      Sex: [],//gt
      Nation: [],//dt
      Address: [],//qq
      Area: [],//kv
      Block: [],//khoi
      Faculty: [],//Khoa
      Test_score: [],//điểm
      Key_testscore: [],//điểm môn chính
      Education_program: [],//ctrinh
      Result: [],//kq
    }
  }
  GenerateRandomNumber = () => {
    let students = [];
    const GT = ["Nam", "Nữ"];
    const DanToc = ["Kinh", "Khác"]
    const QQ = ["TP Thanh Hóa", "Bỉm Sơn", "TP Sầm Sơn", "Đông Sơn", "Quảng Xương", "Hoằng Hóa", "Hậu Lộc", "Hà Trung",
      "Nga Sơn", "Thiệu Hóa", "Triệu Sơn", "Yên Định", "Tĩnh Gia", "Nông Cống", "Ngọc Lặc", "Khác", "Cẩm Thủy", "Thạch Thành",
      "Vĩnh Lộc", "Thọ Xuân", "Như Thanh", "Như Xuân", "Thường Xuân", "Lang Chánh", "Bá Thước", "Quan Hóa", "Quan Sơn",
      "Mường Lát"];
    const KhuVuc = ["KV1", "KV2", "2NT", "KV3"];
    const KhoiThi = ["A", "B", "C", "A1", "D", "M"];
    const TenK = ["GDTC", "Tự nhiên", "Xã hội", "Ngoại ngữ", "Tiểu học", "Mầm non", "KT-QTKD", "N-L-N Nghiệp", "CNTT-TT",
      "Luật", "KTCN", "TL-GD"];
    const LoTrinh = ["Khối kiến thức giáo dục đại cương(34),Khối kiến thức giáo dục chuyên nghiệp(80)"
      , "Khối kiến thức giáo dục đại cương(42),Khối kiến thức giáo dục chuyên nghiệp(84)"
      , "Khối kiến thức giáo dục đại cương(42),Khối kiến thức giáo dục chuyên nghiệp(88)"
      , "Khối kiến thức giáo dục đại cương(37),Khối kiến thức giáo dục chuyên nghiệp(89)"
      , "Khối kiến thức giáo dục đại cương(44),Khối kiến thức giáo dục chuyên nghiệp(82)"
      , "Khối kiến thức giáo dục đại cương(36),Khối kiến thức giáo dục chuyên nghiệp(90)"
      , "Khối kiến thức giáo dục đại cương(45),Khối kiến thức giáo dục chuyên nghiệp(68)"
      , "Khối kiến thức giáo dục đại cương(44),Khối kiến thức giáo dục chuyên nghiệp(62)"
      , "Khối kiến thức giáo dục đại cương(26),Khối kiến thức giáo dục chuyên nghiệp(90)"
      , "Khối kiến thức giáo dục đại cương(40),Khối kiến thức giáo dục chuyên nghiệp(86)"
      , "Khối kiến thức giáo dục đại cương(46),Khối kiến thức giáo dục chuyên nghiệp(67)"
      , "Khối kiến thức giáo dục đại cương(40),Khối kiến thức giáo dục chuyên nghiệp(73)"
    ];
    const KetQua = ["TB", "Khá", "Giỏi", "Xuất sắc"];
    // var RandomNumber = GT[Math.floor(Math.random(0, 1) * GT.length)];
    // var RandomNumber1 = DanToc[Math.floor(Math.random(0, 1) * DanToc.length)];
    // var RandomNumber2 = QQ[Math.floor(Math.random(0, 27) * QQ.length)];
    // var RandomNumber3 = KhuVuc[Math.floor(Math.random(0, 3) * KhuVuc.length)];
    // var RandomNumber4 = KhoiThi[Math.floor(Math.random(0, 6) * KhoiThi.length)];
    // var RandomNumber5 = DiemThi[Math.floor(Math.random(0, 68) * DiemThi.length)];
    // var RandomNumber6 = TenN[Math.floor(Math.random(0, 68) * TenN.length)];
    // var RandomNumber7 = LoTrinh[Math.floor(Math.random(0, 2) * LoTrinh.length)];
    // var RandomNumber8 = KetQua[Math.floor(Math.random(0, 3) * KetQua.length)]; 
    for (let i = 0; i < 200; i++) {
      var RandomNumber = GT[Math.floor(Math.random(0, 1) * GT.length)];
      var RandomNumber1 = DanToc[Math.floor(Math.random(0, 1) * DanToc.length)];
      var RandomNumber2 = QQ[Math.floor(Math.random(0, 27) * QQ.length)];
      var RandomNumber3 = KhuVuc[Math.floor(Math.random(0, 3) * KhuVuc.length)];
      var RandomNumber4 = KhoiThi[Math.floor(Math.random(0, 6) * KhoiThi.length)];
      //var RandomNumber5 = DiemThi[Math.floor(Math.random(0, 68) * DiemThi.length)];
      if (RandomNumber4 === "M") {
        const TenK3 = ["GDTC", "Mầm non", "Tiểu học"];
        var RandomNumber6 = TenK3[Math.floor(Math.random(0, 2) * TenK3.length)];
      } else {
        if (RandomNumber4 === "A" | RandomNumber4 === "A1" | RandomNumber4 === "B") {
          const TenK1 = ["CNTT-TT", "KTCN", "N-L-N Nghiệp", "KT-QTKD", "Tự nhiên", "Tiểu học", "Luật"];
          var RandomNumber6 = TenK1[Math.floor(Math.random(0, 6) * TenK1.length)];
        } else {
          if (RandomNumber4 === "C") {
            const TenK2 = ["Xã hội", "TL-GD", "Tiểu học"];
            var RandomNumber6 = TenK2[Math.floor(Math.random(0, 2) * TenK2.length)];
          } else {
            if (RandomNumber4 === "D" | RandomNumber4 === "A1") {
              RandomNumber6 = "Ngoại ngữ", "Tiểu học";
            }
            // else {
            //   var RandomNumber6 = TenK[Math.floor(Math.random(0, 11) * TenK.length)];
            // }
          }
        }
      }
      ///ràng buộc lộ trình
      if (RandomNumber6 === "Tự nhiên") {
        RandomNumber7 = "Khối kiến thức giáo dục đại cương(37),Khối kiến thức giáo dục chuyên nghiệp(89)";
      } else {
        if (RandomNumber6 === "Xã hội") {
          RandomNumber7 = "Khối kiến thức giáo dục đại cương(42),Khối kiến thức giáo dục chuyên nghiệp(84)";
        }
        else {
          if (RandomNumber6 === "CNTT-TT") {
            var RandomNumber7 = "Khối kiến thức giáo dục đại cương(42),Khối kiến thức giáo dục chuyên nghiệp(88)";
          } else {
            if (RandomNumber6 === "KTCN") {
              var RandomNumber7 = "Khối kiến thức giáo dục đại cương(36),Khối kiến thức giáo dục chuyên nghiệp(90)";
            } else {
              if (RandomNumber6 === "TL-GD") {
                var RandomNumber7 = "Khối kiến thức giáo dục đại cương(46),Khối kiến thức giáo dục chuyên nghiệp(67)";
              } else {
                if (RandomNumber6 === "Mầm Non") {
                  var RandomNumber7 = "Khối kiến thức giáo dục đại cương(34),Khối kiến thức giáo dục chuyên nghiệp(80)"
                } else {
                  if (RandomNumber6 === "N-L-N Nghiệp") {
                    var RandomNumber7 = "Khối kiến thức giáo dục đại cương(44),Khối kiến thức giáo dục chuyên nghiệp(82)";
                  } else {
                    if (RandomNumber6 === "KT-QTKD") {
                      var RandomNumber7 = "Khối kiến thức giáo dục đại cương(26),Khối kiến thức giáo dục chuyên nghiệp(90)";
                    } else {
                      if (RandomNumber6 === "GDTC") {
                        var RandomNumber7 = "Khối kiến thức giáo dục đại cương(40),Khối kiến thức giáo dục chuyên nghiệp(73)";
                      } else {
                        if (RandomNumber6 === "Ngoại Ngữ") {
                          var RandomNumber7 = "Khối kiến thức giáo dục đại cương(26),Khối kiến thức giáo dục chuyên nghiệp(90)";
                        } else {
                          if (RandomNumber6 === "Luật") {
                            var RandomNumber7 = "Khối kiến thức giáo dục đại cương(45),Khối kiến thức giáo dục chuyên nghiệp(68)";
                          } else {
                            if (RandomNumber6 === "Tiểu học") {
                              var RandomNumber7 = "Khối kiến thức giáo dục đại cương(40),Khối kiến thức giáo dục chuyên nghiệp(86)";
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
      // var RandomNumber7 = LoTrinh[Math.floor(Math.random(0, 2) * LoTrinh.length)];
      var RandomNumber8 = KetQua[Math.floor(Math.random(0, 3) * KetQua.length)];
      if (RandomNumber8 === "TB" || RandomNumber8 === "Khá") {
        const keydiem = ["2", "2.5", "3", "3.5", "4", "4.5", "5", "5.5", "6", "6.5"];
        const dt1 = ["15", "15.5", "16", "16.5", "17", "17.5", "18", "18.5", "19", "19.5", "20", "20.5"];
        var RandomNumber5 = dt1[Math.floor(Math.random(0, 11) * dt1.length)];
        var RandomNumber0 = keydiem[Math.floor(Math.random(0, 9) * keydiem.length)];
      } else {
        if (RandomNumber8 === "Khá" || RandomNumber8 === "Giỏi") {
          const dt2 = ["20", "20.5", "21", "21.5", "22", "22.5", "23", "23.5", "24", "24.5", "25", "25.5", "26", "26.5", "27"];
          const keydiem = ["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5"];
          var RandomNumber5 = dt2[Math.floor(Math.random(0, 14) * dt2.length)];
          var RandomNumber0 = keydiem[Math.floor(Math.random(0, 7) * keydiem.length)];
        } else {
          if (RandomNumber8 === "Giỏi" || RandomNumber8 === "Xuất sắc") {
            const keydiem = ["8", "8.5", "9", "9.5", "10"];
            const dt3 = ["24", "24.5", "25", "25.5", "26", "26.5", "27", "27.5", "28", "28.5", "29", "29.5", "30"];
            var RandomNumber5 = dt3[Math.floor(Math.random(0, 12) * dt3.length)];
            var RandomNumber0 = keydiem[Math.floor(Math.random(0, 4) * keydiem.length)];
          }
        }
      }
      students.push({
        Sex: RandomNumber,
        Nation: RandomNumber1,
        Address: RandomNumber2,
        Area: RandomNumber3,
        Block: RandomNumber4,
        Test_score: RandomNumber5,
        Key_testscore: RandomNumber0,
        Faculty: RandomNumber6,
        Education_program: RandomNumber7,
        Result: RandomNumber8
      })
      // // console.log(students)
      // axios.post('https://backend-students-vudo.herokuapp.com/student', {
      //   Sex: RandomNumber,
      //   Nation: RandomNumber1,
      //   Address: RandomNumber2,
      //   Area: RandomNumber3,
      //   Block: RandomNumber4,
      //   Test_score: RandomNumber5,
      //   Key_testscore: RandomNumber0,
      //   Faculty: RandomNumber6,
      //   Education_program: RandomNumber7,
      //   Result: RandomNumber8
      // }).then(function (response) {
      //   console.log(response);
      // })
      //   .catch(function (error) {
      //     console.log(error);
      //   })

    }
    // axios.post('https://backend-students-vudo.herokuapp.com/student', students).then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // })

    // axios.post('http://127.0.0.1:3001/student-multi', students)
    // console.log(1)
    // console.log(students)
    // FileSystem.writeAsStringAsync(Data,students)
    // console.log(JSON.stringify(students))
    // console.log(JSON.stringify(students[999]))
    this.setState({
      Sex: RandomNumber,
      Nation: RandomNumber1,
      Address: RandomNumber2,
      Area: RandomNumber3,
      Block: RandomNumber4,
      Test_score: RandomNumber5,
      Key_testscore: RandomNumber0,
      Faculty: RandomNumber6,
      Education_program: RandomNumber7,
      Result: RandomNumber8
    })
    console.log(students)
    console.log(JSON.stringify(students[999]))
  }
  // tempFunction() {
  //   let temp = [1, 2, 3, 4, 5, 6]
  //   temp.map((item, index) => {
  //     // làm gì thì làm
  //     console.log(item)
  //   })
  //   temp.map((item) => {
  //     // làm gì thì làm
  //     console.log(item)
  //   })
  //   for (let i = 0; i < temp.length; i++) {
  //     let item = temp[i]
  //     let index = i
  //     console.log(item)
  //   }
  // }
  render() {
    return (
      <View style={styles.MainContainer} >
        <ScrollView>
          <Text style={{ marginBottom: 10, fontSize: 20 }}>GT: {this.state.Sex}</Text>
          <Text style={{ marginBottom: 10, fontSize: 20 }}>DT: {this.state.Nation}</Text>
          <Text style={{ marginBottom: 10, fontSize: 20 }}>QQ: {this.state.Address}</Text>
          <Text style={{ marginBottom: 10, fontSize: 20 }}>KV: {this.state.Area}</Text>
          <Text style={{ marginBottom: 10, fontSize: 20 }}>KT: {this.state.Block}</Text>
          <Text style={{ marginBottom: 10, fontSize: 20 }}>ĐT: {this.state.Test_score}</Text>
          <Text style={{ marginBottom: 10, fontSize: 20 }}>KĐT: {this.state.Key_testscore}</Text>
          <Text style={{ marginBottom: 10, fontSize: 20 }}>TenN: {this.state.Faculty}</Text>
          <Text style={{ marginBottom: 10, fontSize: 20 }}>LoTrinh: {this.state.Education_program}</Text>
          <Text style={{ marginBottom: 10, fontSize: 20 }}>KetQua: {this.state.Result}</Text>
        </ScrollView>
        <Button style={{ top: -500 }} title="Bắt đầu" onPress={this.GenerateRandomNumber} />
      </View>

    );
  }
}

const styles = StyleSheet.create(
  {
    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }

  });