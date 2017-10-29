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

export default class Contact extends Component{
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
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    }



    render() {alert(this.state.error);
        alert(this.state.latitude);
        return(<View style={styles.body}>
                <View style={styles.container}>
                    <MapView
                        style={styles.map}
                        provider={PROVIDER_GOOGLE}
                        initialRegion={{
                            latitude: 22.31873116115996,
                            longitude: 87.30253088901532,
                            latitudeDelta: 0.021,
                            longitudeDelta: 0.021
                        }}>
                        {this.state.maps["Halls Of Residence"].map(marker => (
                            <MapView.Marker
                                coordinate={{latitude: marker.lat,
                                    longitude: marker.long}}
                                title={marker.name}

                            />
                        ))}
                    </MapView>
                </View></View>
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