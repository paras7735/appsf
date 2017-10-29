import React, { Component } from 'react';

import {View,Text,StyleSheet} from 'react-native';

export default class Splash extends Component {

    render() {
        return (<View style={styles.wrapper}>
                <Text style={styles.title}>
                    App Name
                </Text>
                <Text>
                    Powered by Springfest
                </Text>
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
    title:{
        color:'white',
        fontSize:35,

        fontWeight:'bold'
    }
});
