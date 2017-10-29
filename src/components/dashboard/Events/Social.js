import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity, ListView, Modal, Button, TextInput, ScrollView,
} from 'react-native';
import Group from "./Group";

export default class Social extends Component{
    constructor(props) {
        super(props);
        this.state = {
            infoBox:0,
            isModalOpen:false,
            isOpen: false,
            selectedItem: 'Home',
            loginData:'njnjnj',login:0
        };}
    regSingleEvent(){
        fetch('http://mainapi.springfest.in/api/event/register',{
                method: "POST",
                body: JSON.stringify({leader_id:this.props.loginData.message.sf_id,event_id:this.props.EventsData.message.Social[this.state.infoBox].id})
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
    showModal(i){this.setState({isModalOpen:true,infoBox:i})};
    closeModal(){this.setState({isModalOpen:false})};

    render() {
        //alert(this.props.EventsData.message.Social.length);
        return(<View>
                {Array.apply(null, Array(this.props.EventsData.message.Social.length)).map(function(item, i){
                    return (
                        <TouchableOpacity onPress={this.showModal.bind(this,i)} style={styles.list}><Text >{this.props.EventsData.message.Social[i].event}</Text>

                        </TouchableOpacity>
                    );
                }, this)}

                <Modal visible={this.state.isModalOpen}
                       onRequestClose={() => {this.closeModal.bind(this)}}
                       animationType={"slide"}>
                    <ScrollView contentContainerStyle={styles.wrapper2}
                                keyboardDismissMode='on-drag'><Text>{this.props.EventsData.message.Social[this.state.infoBox].event}</Text>
                        <Text>{this.props.EventsData.message.Social[this.state.infoBox].tagline}</Text>
                        <Text>{this.props.EventsData.message.Social[this.state.infoBox].writeup}</Text>
                        {this.props.EventsData.message.Social[this.state.infoBox].is_group==0?<Button title="single" onPress={this.regSingleEvent.bind(this)}/>:
                            <Group loginData={this.props.loginData} infoBox={this.state.infoBox} EventsData={this.props.EventsData}/>}
                        <Button title="close" onPress={this.closeModal.bind(this)}/></ScrollView>
                </Modal>

            </View>
        )

    }
};



const styles=StyleSheet.create({
    wrapper:{paddingTop: 20,
        backgroundColor:'#27ae60',

    },
    wrapper:{paddingTop: 20,
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
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    textInputWrapper: {
        flex:1,
        height: 50,
        borderColor:'red',
        borderWidth: 2,
    },
    textInput:{
        flex:1,
    }
});
