import React, { Component } from 'react';

import {View,Text,StyleSheet,Image} from 'react-native';
import LoginForm from "./loginform";

export default class Login extends Component {
    constructor(props) {
        super(props);
    }
    isLogin(response){
        this.props.isLogin(response);
    }
    render() {
        return (<View style={styles.wrapper}>
                <View >
                    <Image source={require('../../Images/lol.jpeg')} resizeMode="contain" style={styles.logo}/>
                      <Image style={styles.logo}
                             source={{uri:'http://facebook.github.io/react-native/img/header_logo.png'}}/>
                    <Text  style={styles.title}>Login</Text>
                </View>
                <View >
                <LoginForm isLogin={this.isLogin.bind(this)}/>
                </View>
            </View>

        );
    }
}
const styles=StyleSheet.create({
    wrapper:{
        backgroundColor:'#27ae60',
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    },
    logo:{
        width:110,
        height:110
    },
    title:{
        color:'white',
        fontSize:35,
        fontWeight:'bold'
    },

});
