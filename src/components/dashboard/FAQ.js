import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity, TextInput, ScrollView, Button,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import maps from './maps.json';

export default class FAQ extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            selectedItem: 'Home',
            loginData:'njnjnj',login:0,
            maps:maps,
            latitude: null,
            longitude: null,
            error: null,
        };}
    componentDidMount() {
    }



    render() {alert(this.state.error);
        alert(this.state.latitude);
        return(<View style={styles.body}>
                <ScrollView><Text>
                   "xfghzdg"  </Text></ScrollView></View>
        );



    }
};

const styles=StyleSheet.create({
    wrapper:{padding: 20,
        backgroundColor:'#27ae60',

    },
    container: {
        ...StyleSheet.absoluteFillObject,
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    body:{
        backgroundColor:'#27ae60',
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        color:'white',
        fontSize:35,
        fontWeight:'bold'
    },
    logo:{
        flex:1,
        alignSelf: "stretch",
        height:100
    },
    input:{
        margin:20,
        padding:20,
        backgroundColor:"white",
    }
});