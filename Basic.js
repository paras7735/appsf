import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import Menu from './src/components/dashboard/Menu';
import Splash from './Splash';
import Login from './src/components/login/login'
import Dash  from './src/components/dashboard/dashboard'



export default class Basic extends Component {
    constructor(props) {
        super(props);


        this.state = {
            isOpen: false,
            selectedItem: 'About',
            loginData:'njnjnj',login:0
        };
    }

    isLogin(response){
        this.setState({
            loginData:response,
            login:1
        })
    }
    isLogout(no){
        this.setState({
            login:0
        })
    }
    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
        });
    }
    render() {

        return (
            this.state.login === 0 ? <Login isLogin={this.isLogin.bind(this)}/> :
                    <Dash loginData={this.state.loginData} isLogout={this.isLogout.bind(this)}/>


        );
    }
}

