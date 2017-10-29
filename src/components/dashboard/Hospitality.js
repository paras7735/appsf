import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity, TextInput, ScrollView, Button,
} from 'react-native';

import DatePicker from 'react-native-datepicker'

export default class Hospitality extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            selectedItem: 'Home',
            loginData:'njnjnj',login:0
        };}
        sendData(){
            fetch('http://mainapi.springfest.in/api/user/submit_hospitality', {
                method: 'POST',
                body: JSON.stringify({sf_id:this.props.loginData.message.sf_id,
                    train_name:this.state.trainName,
                    train_number:this.state.trainNumber,
                    boarding_place:this.state.brdPlace,
                    number_people:this.state.noOfPpl,
                    arrival_date:this.state.date,
                    arrival_time:this.state.time,
                leaving_date:this.state.date2,
                leaving_time:this.state.time2
                })

            })
                .then((response) => {
                    responseData = response.json();
                    if (response.status == 200) {
                    alert(JSON.stringify(response));
                        return responseData.then((data) => this.setState({ EventsRegisData: data }));
                    } else {
                        throw new Error('Server Error!');
                    }
                })



        }
    render() {
        return(
            <ScrollView contentContainerStyle={styles.wrapper}
                        keyboardDismissMode='on-drag'><Text style={styles.title}>Hospitality</Text><Text>Name of Train</Text>
                <TextInput style={styles.input} onChangeText={(text) => this.setState({trainName:text})}></TextInput>
                <Text>Boarding Place</Text>
                <TextInput style={styles.input} onChangeText={(text) => this.setState({brdPlace:text})}></TextInput>
                <Text>Train Number</Text>
                <TextInput   style={styles.input} onChangeText={(text) => this.setState({trainNumber:text})}></TextInput>
                <Text>Number of People</Text>
                <TextInput keyboardType = 'numeric' style={styles.input} onChangeText={(text) => this.setState({noOfPpl:parseInt(text)})}></TextInput>
                <Text>Arrival date at Kharagpur</Text>
                <DatePicker

                    date={this.state.date}
                    mode="date"
                    placeholder="select date"
                    format="DD-MM-YYYY"
                    minDate="2016-05-01"
                    maxDate="2016-06-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                        // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {this.setState({date: date})}}
                />
                <Text>Arival time at Kharagpur</Text>
                <DatePicker

                    date={this.state.time}
                    mode="time"
                    placeholder="select Time"

                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                        // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {this.setState({time: date})}}
                />

                <Text>Leaving date from Kharagpur</Text>
                <DatePicker

                    date={this.state.date2}
                    mode="date"
                    placeholder="select date"
                    format="DD-MM-YYYY"
                    minDate="2016-05-01"
                    maxDate="2016-06-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                        // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {this.setState({date2: date})}}
                />

                <Text>Leaving time from Kharagpur</Text>
                <DatePicker

                    date={this.state.time2}
                    mode="time"
                    placeholder="select Time"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                        // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {this.setState({time2: date})}}
                />

                <Button title="Submit" onPress={this.sendData.bind(this)}/>
            </ScrollView>);



    }
};

const styles=StyleSheet.create({
    wrapper:{padding: 20,
        backgroundColor:'#27ae60',

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