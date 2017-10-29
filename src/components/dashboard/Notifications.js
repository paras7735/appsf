import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity, ScrollView, TouchableHighlight,
} from 'react-native';

export default class Notifications extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name:'Dance',
            selectedItem: 'Home',
            EventsData:{message:{Dance:[{event:'Centrifuge'}]}},login:0,
            EventsName:'Dance'
        };}
    getEventData(){  fetch('http://nwp.springfest.in/api/event/get_all_event_details', {
        method: 'GET',
    })
        .then((response) => {
            responseData = response.json();
            if (response.status == 200) {
                return responseData.then((data) => this.setState({ EventsData: data }));
            } else {
                throw new Error('Server Error!');
            }
        })}
    componentDidMount() {
        this.getEventData();
    };

    nameChange(nam){
        this.setState({name:nam});
    };
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row'}}>

                <View style={styles.main}>
                    <Text style={styles.title}>Notifications</Text>
                </View>
            </View>
        );

    }
};

const styles=StyleSheet.create({
    list:{flex: 8,
        flexDirection: 'column'
    },
    back:{flex:1,
    },

    cirContainer: {
        height:100,
        width: 100,
        backgroundColor:'white',
        borderRadius:50
    },
    cirText: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    sideMenu:{
        flex: 1,
        backgroundColor:'purple',
        flexDirection: 'column'
    },
    main:{
        flex: 7,
        backgroundColor:'white',
        flexDirection: 'column'
    },
});