import React, { Component } from 'react';
import { StyleSheet, View, Image, ScrollView, Text, TouchableOpacity, ListView, FlatList } from 'react-native';
import { Header, Left, Icon, Right, Item, DeckSwiper } from 'native-base';
import Slideshow from 'react-native-image-slider-show';
import { Tintuc_sukien1, NCKH_kq, Tintuc_sukien, NCKH_Thongbao, NCKH_Thongbao1, NCKH_kq1, Sv_CVHT, Sv_CVHT1 } from './DataFake';

export default class Home extends React.Component {
    static navigationOptions = {
        drawerIcon: ({ tintcolor }) => (
            <Icon name="home" style={{ fontSize: 24, color: tintcolor }} />
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
                        <Right>
                            <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
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
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Chi tiết', { thamso: rowData })}>
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
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Chi tiết', { thamso: rowData })}>
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
                                <Image style={{ left: 5, width: 100, height: 80 }} source={{ uri: 'http://khoaluat.vinhuni.edu.vn/data/30/upload/477/images//2016/08/53924140514_formulario150x150.jpg' }} />
                                <ListView
                                    dataSource={(this.state.NCKH_TB1)}
                                    renderRow={(rowData) => {
                                        //console.log(rowData)
                                        return (
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Chi tiết', { thamso: rowData })}>
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
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Chi tiết', { thamso: rowData })}>
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
                                <Image style={{ width: 100, height: 80 }} source={{ uri: 'http://qttc.vimaru.edu.vn/sites/qttc.vimaru.edu.vn/files/styles/medium/public/images_2.jpg?itok=wUryvda4' }} />
                                <ListView
                                    dataSource={(this.state.NCKH_KQ1)}
                                    renderRow={(rowData) => {
                                        //console.log(rowData)
                                        return (
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Chi tiết', { thamso: rowData })}>
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
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Chi tiết', { thamso: rowData })}>
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
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Chi tiết', { thamso: rowData })}>
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
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Chi tiết', { thamso: rowData })}>
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