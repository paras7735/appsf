import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';
import Events from "./Events";
import Hospitality from "./Hospitality";
import Notifications from "./Notifications";
import * as firebase from 'firebase';
import Map from "./Map";
import Schedule from "./Schedule";
import Contact from "./Contact";
import FAQ from "./FAQ";

firebase.initializeApp({
    apiKey: "AIzaSyDWbn0xSo7KzZOOKYeJ8KZV1Di4lmF229A",
    authDomain: "spring-fest-2017.firebaseapp.com",
    databaseURL: "https://spring-fest-2017.firebaseio.com",
    projectId: "spring-fest-2017",
    storageBucket: "spring-fest-2017.appspot.com",
    messagingSenderId: "112431622894"
});

export default class Dash extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);

        this.state = {
            EventsRegisData:'avasv',
            isOpen: false,
            selectedItem: 'Home',
            loginData:'njnjnj',login:1
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    updateMenuState(isOpen) {
        this.setState({ isOpen });
    }

    onMenuItemSelected = item => {
        if(item=='Logout'){
            this.props.isLogout(0);
        }
        else{
        return this.setState({
            isOpen: false,
            selectedItem: item,
        });}
    };

    getEventRegisData(){  fetch('http://mainapi.springfest.in/api/user/get_registered_events', {
        method: 'POST',
        body: JSON.stringify({sf_id:this.props.loginData.message.sf_id})

    })
        .then((response) => {
            responseData = response.json();
            if (response.status == 200) {

                return responseData.then((data) => this.setState({ EventsRegisData: data }));
            } else {
                throw new Error('Server Error!');
            }
        })}
    componentDidMount() {
        this.getEventRegisData();
        this.itemsRef = firebase.database().ref();
       this.itemsRef.set({title:'sgsgsdg',aeegvsgz:'agszz'});
    };
    changeMenu(){if(this.state.selectedItem=='Events'){
        return <Events loginData={this.props.loginData}/>
    }
if(this.state.selectedItem=='Hospitality'){
        return <Hospitality loginData={this.props.loginData}/>
}
        if(this.state.selectedItem=='Map'){
            return <Map loginData={this.props.loginData}/>
        }
        if(this.state.selectedItem=='Notifications'){
            return <Notifications loginData={this.props.loginData}/>
        }
        if(this.state.selectedItem=='Schedule'){
            return <Schedule loginData={this.props.loginData}/>
        }
        if(this.state.selectedItem=='Contact Us'){
            return <Contact loginData={this.props.loginData}/>
        }
        if(this.state.selectedItem=='FAQ'){
            return <FAQ loginData={this.props.loginData}/>
        }
    };


    render() {
        const menu = <Menu onItemSelected={this.onMenuItemSelected} loginData={this.props.loginData}/>;
        var obje=this.state.EventsRegisData.message;
        return (
            <SideMenu
                menu={menu}
                loginData={this.props.loginData}
                isOpen={this.state.isOpen}
                onChange={isOpen => this.updateMenuState(isOpen)}
            >
                {this.state.selectedItem=='Home'?<View style={styles.wrapper}>
                    <View style={styles.wrapper}>
                        <Image style={styles.logo}
                               source={{uri:'http://dubeat.com/wp-content/uploads/SF_IMG-0205-Pro1-735x400.jpg'}}/>
                    </View>
                    <View  style={styles.body}>
                    <Text style={styles.title}>
                       Hi  your SF ID is .
                        You are registered in.
                    </Text></View>
                </View>:this.changeMenu()}

            </SideMenu>
        );
    }
}
const styles=StyleSheet.create({
    container:{
        flex: 1
    },
    wrapper:{
        backgroundColor:'#27ae60',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        alignSelf: "stretch",
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
        height:110
    },
});