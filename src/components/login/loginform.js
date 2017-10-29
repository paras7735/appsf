import React, { Component } from 'react';

import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert} from 'react-native';


export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {data:'kbkbhubjhbjhbhjbhjbhjbjhbj'};

    }
    login(){
        return fetch('https://mainapi.springfest.in/api/user/login_user',{
            method: "POST",
            body: JSON.stringify({email:'apptest@gmail.com',password:'lol'})
            }
        ).then(function(response){
            return response.json();

            }).catch(function(error) {
               // ADD THIS THROW error
                throw error.message;
            });};
    render() {
        return (<View >
                <TextInput style={styles.input}/>
                <TextInput style={styles.input}/>
                <TouchableOpacity style={styles.button} onPress={() => {this.login().then((dat) => {

                    this.props.isLogin(dat);

                }).catch((error)=>{
                    console.log("Api call error");
                    alert(JSON.stringify(error),'error');
                });}}>
                    <Text style={styles.buttontxt}>
                     Login
                    </Text>
                </TouchableOpacity>

            </View>

        );
    }
}
const styles=StyleSheet.create({

    input:{
        backgroundColor:'white',
        margin:20,
        width:300,
height:50
    },
    button:{
        margin:20,
        margin:20,
        backgroundColor:'#2980b9',
        width:300,
        height:50
    },
    buttontxt:{
        textAlign:'center',
        fontSize:30

    }
});
