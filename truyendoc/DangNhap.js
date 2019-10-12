
import React, { Component } from 'react';
import {
    View, Image,
    Text, Button, TextInput, TouchableOpacity
} from 'react-native';

export default class DangNhap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dangky: false,
        }
    }
    static navigationOptions = {
        title: 'Dang nhap',
      };
    render() {
        if (this.state.dangky == false) {
            return (
                <View style={{ backgroundColor: '#4C0B5F', height: 700 }}>
                    <Image source={require('./image/anh.png')} style={{ height: 170, width: 160, marginLeft: 95, marginTop: 50 }}></Image>
                    <View style={{ margin: 20 }}>
                        <TextInput placeholder='usename' style={{ backgroundColor: '#ECE0F8', borderRadius: 5, }}
                            onChangeText={user => this.setState({ user })}
                        ></TextInput>
                        <TextInput placeholder="password" secureTextEntry={true} style={{ backgroundColor: '#ECE0F8', borderRadius: 5, marginTop: 5 }}
                            onChangeText={pass => this.setState({ pass })}
                        ></TextInput>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 95 }}>
                        <Button style={{ marginLeft: 20 }} title="đăng nhập" onPress={() => this.props.navigation.navigate('ViewItem')} ></Button>

                    </View>
                    <TouchableOpacity onPress={() => this.setState({ dangky: true })}>
                        <Text>Dang ky</Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return (
                <View style={{ backgroundColor: '#4C0B5F', height: 700 }}>
                    <Image source={require('./image/anh.png')} style={{ height: 170, width: 160, marginLeft: 95, marginTop: 50 }}></Image>
                    <View style={{ margin: 20 }}>
                        <TextInput placeholder='usename' style={{ backgroundColor: '#ECE0F8', borderRadius: 5, }}

                        ></TextInput>
                        <TextInput placeholder='Ho ten' style={{ backgroundColor: '#ECE0F8', borderRadius: 5, }}

                        ></TextInput>
                        <TextInput placeholder="password" secureTextEntry={true} style={{ backgroundColor: '#ECE0F8', borderRadius: 5, marginTop: 5 }}
                            onChangeText={pass => this.setState({ pass })}
                        ></TextInput>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 95 }}>
                        <Button style={{ marginLeft: 20 }} title="Dang ky" onPress={() => this.setState({ dangky: false })} ></Button>

                    </View>
                    <TouchableOpacity onPress={() => this.setState({ dangky: true })}>
                        <Text>Dang ky</Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }
}




