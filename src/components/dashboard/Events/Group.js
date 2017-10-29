import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity, ListView, Modal, Button, Picker, TextInput,
} from 'react-native';


export default class Group extends Component{
    constructor(props) {
        super(props);



        this.state = {
            inputNumber:0,
            chosenNo:0,
            isModalOpen:false,
            isOpen: false,
            selectedItem: 'Home',
            loginData:'njnjnj',login:0
        };}
    regSingleEvent(){
        fetch('http://mainapi.springfest.in/api/event/register',{
                method: "POST",
                body: JSON.stringify({leader_id:this.props.loginData.message.sf_id,event_id:this.props.EventsData.message.Dance[this.state.infoBox].id})
            }
        ).then(function(response){
            alert(JSON.stringify(response));
            return response.json();

        }).catch(function(error) {
            // ADD THIS THROW error
            throw error.message;
        });
        this.setState({isModalOpen:false})
    }

    render() {
        return( <View>
                { /*<Picker
                    style={{width: 200, height: 44}}
                    mode="dropdown"
                    selectedValue={this.props.EventsData.message.Dance[this.props.infoBox].min_participation}
                    onValueChange={(itemValue, itemIndex) => this.setState({chosenNo: itemValue})}>
                    {Array.apply(null, Array(diff)).map(function(item, i){
                        return (
                            <Picker.Item label={diff+i} value={diff+i} />
                        );
                    }, this)}


                </Picker>*/}

                <TextInput  keyboardType = 'numeric' style={styles.input} placeholder="grp number" onChangeText={(text) => this.setState({inputNumber:parseInt(text)})}/>
                {this.state.inputNumber<=0&&this.state.inputNumber!=null?<Text></Text>:<View style={styles.textInputWrapper}><TextInput style={styles.textInput}  placeholder="SFID" value={this.props.loginData.message.sf_id}/><TextInput style={styles.input} placeholder="EMAIL" value={this.props.loginData.message.email}/></View>
            }{this.state.inputNumber<=0&&this.state.inputNumber!=null?<Text></Text>:Array.apply(null, Array(this.state.inputNumber-1)).map(function(item, i){
                    return (
                        <View style={styles.textInputWrapper}><TextInput style={styles.textInput} key={i} placeholder="SFID" /><TextInput style={styles.input} key={i+this.state.inputNumber} placeholder="EMAIL" /></View>
                    );
                }, this)}
                </View>


    )



    }
};



const styles=StyleSheet.create({
    wrapper:{paddingTop: 20,
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
    list:{padding: 20,
        backgroundColor:'white',


    },
    logo:{
        flex:1,
        alignSelf: "stretch",
        height:100
    },

});
