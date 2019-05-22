import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Header, Left, Right, Icon, Button } from 'native-base';
import moment from 'moment';
export default class ChiTiet extends React.Component {
    static navigationOptions = {
        drawerIcon: ({ tintcolor }) => (
            <Icon style={{ fontSize: 24, color: tintcolor }} />
        )
    };
    render() {
        //console.log(this.props.navigation.state.params.thamso);
        return (

            <View>
                <View style={{ height: 24, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
                </View>
                <Header style={{ backgroundColor: '#bdc3c7', height: 50 }}>
                    <Left style={{ left: -5 }}>
                        <Button transparent onPress={() => this.props.navigation.navigate('Trang chủ')}>
                            <Icon
                                name='arrow-back' />
                        </Button>
                    </Left>
                    <Right>
                        <Text  style={{ fontSize: 20, textAlign: 'center', top: 3, color: 'seagreen' }}>Chi tiết</Text>
                    </Right>
                </Header>
                <ScrollView>
                    <View style={{ left: 5, width: 350, flex: 1 }}>
                        <Text style={{ fontWeight: 'bold', color: 'blue', textAlign:'center' }}>{this.props.navigation.state.params.thamso.title}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 10 }}>{this.props.navigation.state.params.thamso.category}</Text>
                        <Text style={{ fontWeight: 'bold' }}>{this.props.navigation.state.params.thamso.nd}</Text>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>{this.props.navigation.state.params.thamso.Tieude}</Text>
                        <Text>{this.props.navigation.state.params.thamso.ndc1}</Text>
                        <Image style={{ height: 180 }} source={{ uri: this.props.navigation.state.params.thamso.imgnd1 }} />
                        <Text>{this.props.navigation.state.params.thamso.ndc2}</Text>
                        <Image style={{ height: 180 }} source={{ uri: this.props.navigation.state.params.thamso.imgnd2 }} />
                        <Text>{this.props.navigation.state.params.thamso.ndc3}</Text>
                        <Image style={{ height: 180 }} source={{ uri: this.props.navigation.state.params.thamso.imgnd3 }} />
                        <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>{this.props.navigation.state.params.thamso.ndanh}</Text>
                        <Image style={{ height: 180 }} source={{ uri: this.props.navigation.state.params.thamso.img1 }} />
                        <Image style={{ height: 180, }} source={{ uri: this.props.navigation.state.params.thamso.img2 }} />
                        <Image style={{ height: 180 }} source={{ uri: this.props.navigation.state.params.thamso.img3 }} />
                        <Image style={{ height: 180 }} source={{ uri: this.props.navigation.state.params.thamso.img4 }} />
                        <Image style={{ height: 180 }} source={{ uri: this.props.navigation.state.params.thamso.img5 }} />
                        <Text>{this.props.navigation.state.params.thamso.content}</Text>
                    </View>
                    <View style={{ height: 100 }}>

                    </View>
                </ScrollView>
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
    },
});