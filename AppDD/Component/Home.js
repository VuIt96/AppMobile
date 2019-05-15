import React, { Component } from 'react';
import { StyleSheet, View, Image, ScrollView, Text, TouchableOpacity, ListView } from 'react-native';
import { Header, Left, Icon, Right } from 'native-base';
import { Img } from './DataFake';
import Slideshow from 'react-native-image-slider-show';
import { Tintuc_sukien } from './DataFake';

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
            dataSource: ds.cloneWithRows(Tintuc_sukien),
        };
        this.state = {
            position: 1,
            interval: null,
            dataSource: [
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
        // const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        // this.state = {
        //     dataSource: ds.cloneWithRows(Tintuc_sukien),
        // };
    }

    componentWillMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({
                    position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
                });
            }, 2000)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {

        return (
            <View style={{ flexDirection: 'column' }} >
                <View style={{ height: 24, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
                </View>
                <Header style={{ backgroundColor: '#bdc3c7', height: 50 }}>
                    <Right>
                        <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
                    </Right>
                </Header>
                <Image style={{ width: 355, height: 55 }} source={require('./img/logokhoa.png')} />
                
                <Slideshow
                    dataSource={this.state.dataSource}
                    position={this.state.position}
                    onPositionChanged={position => this.setState({ position })} />
                <View>
                    <ScrollView>
                        <View>
                            <Text style={{ borderBottomWidth: 1, backgroundColor: 'dodgerblue', color: 'white', width: 120, borderRadius: 3, left: 1, top: 1 }}>Tin Tức - Sự Kiện</Text>
                            <Text style={{ borderBottomWidth: 1, top: 0 }}></Text>
                            <Image style={{ width: 100, height: 80 }} source={{ uri: 'http://hdu.edu.vn/NewsImages/201861212133ketqua.png' }} />
                            {/* <ListView
                                dataSource={(this.state.dataSource)}
                                renderRow={(rowData) => {
                                    <TouchableOpacity>
                                        <Text>{rowData.title}</Text>
                                        <Text>{moment("20190502", "YYYYMMDD").fromNow()}</Text>
                                    </TouchableOpacity>
                                }
                                }
                            /> */}
                        </View>
                    </ScrollView>
                </View>
            </View>
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
    }
});