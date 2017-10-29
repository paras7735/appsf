import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity, ScrollView, Modal,
} from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';


export default class EventInfo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            infoBox:'null',
            index: 0,
            routes: [
                { key: '1', title: 'About' },
                { key: '2', title: 'Rules' },
            ],
        };}
    _handleIndexChange = index => this.setState({ index });
    FirstRoute = () => <View style={[ styles.container, { backgroundColor: '#ff4081' } ]}><Text>{this.props.EventsData.message[this.props.EventsName][this.props.infoBox].writeup}</Text></View>;
    SecondRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]}>{this.checkPrelim()}</View>;
    _renderHeader = props => <TabBar {...props} />;

    _renderScene = SceneMap({
        '1': this.FirstRoute,
        '2': this.SecondRoute,
    });
checkPrelim(){
                return <ScrollView>
                    <Text>Prelims
                    </Text><Text>
                    {this.props.EventsData.message[this.props.EventsName][this.props.infoBox].rules['Prelims']}</Text>
                    <Text>Pre Finals
                    </Text><Text>
                    {this.props.EventsData.message[this.props.EventsName][this.props.infoBox].rules['Pre-finals:']}</Text>
                    <Text>Finals
                    </Text><Text>
                    {this.props.EventsData.message[this.props.EventsName][this.props.infoBox].rules['Finals']}</Text>
                </ScrollView>}

    render() {
        return this.props.infoBox!="null"?
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={styles.sideMenu}>
                    <View style={styles.back}>
                        <Text onPress={this.props.closeModal.bind(this)}>Back</Text>
                    </View>
                </View>
                <View style={styles.main}>
                <View style={styles.titleView}><Text style={styles.title}>{this.props.EventsData.message[this.props.EventsName][this.props.infoBox].event}</Text>
                </View>
                    <TabViewAnimated
                        style={styles.scView}
                        navigationState={this.state}
                        renderScene={this._renderScene}
                        renderHeader={this._renderHeader}
                        onIndexChange={this._handleIndexChange}
                    />
                    </View>
            </View>
            :
            <Text style={styles.load}>Loading not loading</Text>;

    }
};

const styles=StyleSheet.create({
    list:{
        margin:40,
        height:400,
        backgroundColor:'white',
        width:400,
        borderWidth:2,
        borderColor:'black'
    },
    contentContainer:{
        backgroundColor:'yellow',
        flex:4,

    },
    wrapper:{
        paddingTop: 20,
        backgroundColor:'#27ae60',

    },

    back:{flex:0.5,
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
        backgroundColor:'purple'
    },
    main:{
        flex: 7,
        backgroundColor:'white'
    },
    body:{
        backgroundColor:'#27ae60',
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },
    load:{
        flex:1,
        color:'black',
        fontSize:35,
        fontWeight:'bold'
    },
    title:{
        color:'black',
        fontSize:50,

    },
    titleV:{
        flex:0.5,
    },
    titleView:{
        flex:1,
    },
    scView:{
        flex:6,
        backgroundColor:'#27ae60',
    },
    logo:{
        flex:1,
        alignSelf: "stretch",
        height:100
    },
});