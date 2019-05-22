import React, { Component } from 'react';
import { StyleSheet, View, Image, ScrollView, Text, TouchableOpacity, ListView, FlatList } from 'react-native';
import { Header, Left, Icon, Right, Item, DeckSwiper, Button } from 'native-base';
import Slideshow from 'react-native-image-slider-show';
import moment from 'moment';
import { Tintuc_sukien1, NCKH_kq, Tintuc_sukien, NCKH_Thongbao, NCKH_Thongbao1, NCKH_kq1, Sv_CVHT, Sv_CVHT1 } from './DataFake';

export default class Home extends React.Component {
    static navigationOptions = {
        drawerIcon: () => (
            <Icon style={{ color: 'salmon'}} name="home" />
        )
    };
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            TT_SK1: ds.cloneWithRows(Tintuc_sukien1),
            TT_SK: ds.cloneWithRows(Tintuc_sukien),
            NCKH_TB: ds.cloneWithRows(NCKH_Thongbao),
            NCKH_TB1: ds.cloneWithRows(NCKH_Thongbao1),
            NCKH_KQ: ds.cloneWithRows(NCKH_kq),
            NCKH_KQ1: ds.cloneWithRows(NCKH_kq1),
            SV_CVHT: ds.cloneWithRows(Sv_CVHT),
            SV_CVHT1: ds.cloneWithRows(Sv_CVHT1),
            // 1111111111111
            position: 1,
            interval: null,
            dataImg: [
                {
                    url: 'http://hdu.edu.vn/SlideShow/201742823222TK2.jpg',
                },
                {
                    url: 'http://hdu.edu.vn/SlideShow/2017428231746KHMT.jpg',
                },
                {
                    url: 'http://hdu.edu.vn/SlideShow/2017428231711httt.jpg',
                },
                {
                    url: 'http://hdu.edu.vn/SlideShow/2017428231434TK1.jpg',
                },
                {
                    url: 'http://hdu.edu.vn/SlideShow/2014510224655dua%20web.JPG',
                },
            ],
        };
    }
    componentWillMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({
                    position: this.state.position === this.state.dataImg.length ? 0 : this.state.position + 1
                });
            }, 2000)
        });
    }
    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        return (
            <View>
                <View>
                    <View style={{ height: 24, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
                    </View>
                    <Header style={{ backgroundColor: '#bdc3c7', height: 50 }}>
                        <Left style={{ left: -5 }}>
                            <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
                        </Left>
                        <Right>
                            <Text style={{ fontSize: 20, textAlign: 'center', top: 3, color: 'seagreen' }}>Trang chủ</Text>
                        </Right>
                    </Header>
                    <Image style={{ width: 355, height: 55 }} source={require('./img/logokhoa.png')} />
                </View>
                <ScrollView>
                    <Slideshow
                        dataSource={this.state.dataImg}
                        position={this.state.position}
                        onPositionChanged={position => this.setState({ position })} />
                    <View>
                        <View style={styles.viewhome}>
                            <Text style={{ borderBottomWidth: 1, backgroundColor: 'dodgerblue', color: 'white', width: 120, borderRadius: 3, left: 1, top: 1 }}>Tin Tức - Sự Kiện</Text>
                            <Text style={{ borderBottomWidth: 1, top: -5 }}></Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={{ width: 100, height: 80 }} source={{ uri: 'http://hdu.edu.vn/NewsImages/201861212133ketqua.png' }} />
                                <ListView
                                    dataSource={(this.state.TT_SK1)}
                                    renderRow={(rowData) => {
                                        //console.log(rowData)
                                        return (
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate(' ', { thamso: rowData })}>
                                                <View style={{ left: 1, flexDirection: 'row' }}>
                                                    <Icon
                                                        style={{ color: 'red', fontSize: -1 }}
                                                        name='star' />
                                                    <Text style={{ left: 4, color: 'midnightblue' }}>{rowData.title.toString()}
                                                        <Text>                                       </Text>
                                                        <Text style={{ left: 1, color: 'black', fontStyle: 'italic', fontSize: 11 }}>{rowData.tieude}</Text>
                                                    </Text>
                                                    {/* <Text>{rowData.category},{moment("20190502", "YYYYMMDD").fromNow()}</Text> */}
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    }
                                    }
                                />
                            </View>
                            <View>
                                <ListView
                                    dataSource={(this.state.TT_SK)}
                                    renderRow={(rowData) => {
                                        //console.log(rowData)
                                        return (
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate(' ', { thamso: rowData })}>
                                                <View style={{ left: 3, flexDirection: 'row' }}>
                                                    <Icon
                                                        style={{ color: 'orangered', fontSize: -1 }}
                                                        name='arrow-dropright' />
                                                    <Text style={{ left: 3, color: 'blue', fontSize: 13 }}>{rowData.title.toString()}</Text>
                                                    {/* <Text>{rowData.category},{moment("20190502", "YYYYMMDD").fromNow()}</Text> */}
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    }
                                    }
                                />
                            </View>
                        </View >
                        <View style={styles.viewhome}>
                            <Text style={{ borderBottomWidth: 1, backgroundColor: 'dodgerblue', color: 'white', width: 120, borderRadius: 3, left: 1, top: 1 }}>NCKH - Thông Báo</Text>
                            <Text style={{ borderBottomWidth: 1, top: -5 }}></Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={{ left: 5, width: 100, height: 80 }} source={{ uri: 'https://vietthueluanvan.com.vn/wp-content/uploads/2018/10/education-industry-email-list.png' }} />
                                <ListView
                                    dataSource={(this.state.NCKH_TB1)}
                                    renderRow={(rowData) => {
                                        //console.log(rowData)
                                        return (
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate(' ', { thamso: rowData })}>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Icon
                                                        style={{ color: 'red', fontSize: -1 }}
                                                        name='star' />
                                                    <Text style={{ left: 4, color: 'midnightblue' }}>{rowData.title.toString()}
                                                        <Text>                                                                         </Text>
                                                        <Text style={{ left: 1, color: 'black', fontStyle: 'italic', fontSize: 11 }}>{rowData.tieude}</Text>
                                                    </Text>
                                                    {/* <Text>{rowData.category},{moment("20190502", "YYYYMMDD").fromNow()}</Text> */}
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    }
                                    }
                                />
                            </View>
                            <View>
                                <ListView
                                    dataSource={(this.state.NCKH_TB)}
                                    renderRow={(rowData) => {
                                        //console.log(rowData)
                                        return (
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate(' ', { thamso: rowData })}>
                                                <View style={{ left: 3, flexDirection: 'row' }}>
                                                    <Icon
                                                        style={{ color: 'orangered', fontSize: -1 }}
                                                        name='arrow-dropright' />
                                                    <Text style={{ left: 3, color: 'blue', fontSize: 13 }}>{rowData.title.toString()}</Text>
                                                    {/* <Text>{rowData.category},{moment("20190502", "YYYYMMDD").fromNow()}</Text> */}
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    }
                                    }
                                />
                            </View>
                        </View>
                        <View style={styles.viewhome}>
                            <Text style={{ borderBottomWidth: 1, backgroundColor: 'dodgerblue', color: 'white', width: 120, borderRadius: 3, left: 1, top: 1 }}>NCKH - Kết Qủa</Text>
                            <Text style={{ borderBottomWidth: 1, top: -5 }}></Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={{ width: 100, height: 80 }} source={{ uri: 'data:image/jpeg;base64,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' }} />
                                <ListView
                                    dataSource={(this.state.NCKH_KQ1)}
                                    renderRow={(rowData) => {
                                        //console.log(rowData)
                                        return (
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate(' ', { thamso: rowData })}>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Icon
                                                        style={{ color: 'red', fontSize: -1 }}
                                                        name='star' />
                                                    <Text style={{ left: 4, color: 'midnightblue' }}>{rowData.title.toString()}
                                                        <Text>                                                                         </Text>
                                                        <Text style={{ left: 1, color: 'black', fontStyle: 'italic', fontSize: 11 }}>{rowData.tieude}</Text>
                                                    </Text>
                                                    {/* <Text>{rowData.category},{moment("20190502", "YYYYMMDD").fromNow()}</Text> */}
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    }
                                    }
                                />
                            </View>
                            <View>
                                <ListView
                                    dataSource={(this.state.NCKH_KQ)}
                                    renderRow={(rowData) => {
                                        //console.log(rowData)
                                        return (
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate(' ', { thamso: rowData })}>
                                                <View style={{ left: 3, flexDirection: 'row' }}>
                                                    <Icon
                                                        style={{ color: 'orangered', fontSize: -1 }}
                                                        name='arrow-dropright' />
                                                    <Text style={{ left: 3, color: 'blue', fontSize: 13 }}>{rowData.title.toString()}</Text>
                                                    {/* <Text>{rowData.category},{moment("20190502", "YYYYMMDD").fromNow()}</Text> */}
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    }
                                    }
                                />
                            </View>
                        </View>
                        <View style={styles.viewhome}>

                            <Text style={{ borderBottomWidth: 1, backgroundColor: 'dodgerblue', color: 'white', width: 120, borderRadius: 3, left: 1, top: 1 }}>Sv - Cố vấn học tập</Text>
                            <Text style={{ borderBottomWidth: 1, top: -5 }}></Text>
                            {/* <Image style={{ width: 100, height: 80 }} source={{ uri: 'https://moon.vn/Upload/Users1/lamoon/SG/780goc.jpg','http://nute.edu.vn/Uploads/News/PIC.gif'}} /> */}
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={{ width: 100, height: 80 }} source={{ uri: 'http://nute.edu.vn/Uploads/News/PIC.gif' }} />
                                <ListView
                                    dataSource={(this.state.SV_CVHT1)}
                                    renderRow={(rowData) => {
                                        //console.log(rowData)
                                        return (
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate(' ', { thamso: rowData })}>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Icon
                                                        style={{ color: 'red', fontSize: -1 }}
                                                        name='star' />
                                                    <Text style={{ left: 4, color: 'midnightblue' }}>{rowData.title.toString()}
                                                    </Text>
                                                    {/* <Text>{rowData.category},{moment("20190502", "YYYYMMDD").fromNow()}</Text> */}
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    }
                                    }
                                />
                            </View>
                            <View>
                                <ListView
                                    dataSource={(this.state.SV_CVHT)}
                                    renderRow={(rowData) => {
                                        //console.log(rowData)
                                        return (
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate(' ', { thamso: rowData })}>
                                                <View style={{ left: 3, flexDirection: 'row' }}>
                                                    <Icon
                                                        style={{ color: 'orangered', fontSize: -1 }}
                                                        name='arrow-dropright' />
                                                    <Text style={{ left: 3, color: 'blue', fontSize: 13 }}>{rowData.title.toString()}</Text>
                                                    {/* <Text>{rowData.category},{moment("20190502", "YYYYMMDD").fromNow()}</Text> */}
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    }
                                    }
                                />
                            </View>
                        </View>
                        <View style={styles.viewhome}>
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
    viewhome: {
        height: 200
    }
});