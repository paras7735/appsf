import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity, ScrollView, TouchableHighlight,
} from 'react-native';
import EventsSec from "./Events/eventssec";
export default class Events extends Component{
    constructor(props) {
        super(props);
        this.state = {
            numb:'Dance',
            selectedItem: 'Home',
            EventsData:{message:{Dance:[{event:'Centrifuge'}]}},login:0,
            EventsName:'Dance'
        };}
        getEventData(){  fetch('https://mainapi.springfest.in/api/event/get_all_event_details', {
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
this.setState({numb:nam});
};
    render() {
        return (
        <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={styles.sideMenu}>
                    <View style={styles.back}>
                    <Text>Back</Text>
                    </View><View style={styles.list}>
                    <ScrollView >
                        <TouchableOpacity style={styles.cirContainer} onPress={this.nameChange.bind(this,0)}><Text style={styles.cirText}>Dance</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.cirContainer} onPress={this.nameChange.bind(this,1)}><Text style={styles.cirText}>Music</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.cirContainer} onPress={this.nameChange.bind(this,2)}><Text style={styles.cirText}>Dramatics</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.cirContainer} onPress={this.nameChange.bind(this,3)}><Text style={styles.cirText}>Literary</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.cirContainer} onPress={this.nameChange.bind(this,4)}><Text style={styles.cirText}>Film Fest</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.cirContainer} onPress={this.nameChange.bind(this,5)}><Text style={styles.cirText}>Quiz</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.cirContainer} onPress={this.nameChange.bind(this,6)}><Text style={styles.cirText}>Fine Arts</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.cirContainer} onPress={this.nameChange.bind(this,7)}><Text style={styles.cirText}>Humor Fest</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.cirContainer} onPress={this.nameChange.bind(this,8)}><Text style={styles.cirText}>Food Fest</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.cirContainer} onPress={this.nameChange.bind(this,9)}><Text style={styles.cirText}>Social</Text></TouchableOpacity>
                    </ScrollView></View>
                </View>
            <View style={styles.main}>
                <EventsSec EventsData={this.state.EventsData} EventsNumb={this.state.numb}/>
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