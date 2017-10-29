import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity, ScrollView, Modal,
} from 'react-native';
import EventInfo from "./EventInfo";
import {BlurView, VibrancyView} from 'react-native-blur';

export default class EventsSec extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "Dance",
            isModalOpen: false,
            selectedItem: 'Home',
            EventsData: {"message":[{"category":"Dance","events":[{"id":6,"event":"Centrifuge"}]}]}, login: 0,
            EventsNumb: 0,
            infoBox: 'null'
        };
    }

    showModal(i) {
        this.setState({isModalOpen: true, infoBox: i})
    };

    closeModal() {
        this.setState({isModalOpen: false})
    };

    eventsNameDivider() {
        if (this.props.EventsNumb == 0) {
            this.setState({Name: "Dance"});
        }
        if (this.props.EventsNumb == 1) {
            this.setState({Name: "Music"});
        }
        if (this.props.EventsNumb == 2) {
            this.setState({Name: "Dramatics"});
        }
        if (this.props.EventsNumb == 3) {
            this.setState({Name: "Literary"});
        }
        if (this.props.EventsNumb == 4) {
            this.setState({Name: "Film Fest"});
        }
        if (this.props.EventsNumb == 5) {
            this.setState({Name: "Quiz"});
        }
        if (this.props.EventsNumb == 6) {
            this.setState({Name: "Fine Arts"});
        }
        if (this.props.EventsNumb == 7) {
            this.setState({Name: "Humor Fest"});
        }
        if (this.props.EventsNumb == 8) {
            this.setState({Name: "Food Fest"});
        }
        if (this.props.EventsNumb == 9) {
            this.setState({Name: "Social"});
        }
    }

    componentDidMount() {
        this.eventsNameDivider();
    };

    render() {alert(this.props.EventsData.message[this.props.EventsNumb].events.length);
        return (<View style={styles.titleV}>
            <View style={styles.titleView}><Text style={styles.title}>{this.state.Name}</Text>
                <Text style={styles.subtitle}>Details</Text>
            </View>
            <View style={styles.scView}><Text>Events</Text>
                <ScrollView horizontal={true}
                            contentContainerStyle={styles.contentContainer}>{Array.apply(null, Array(2)).map(function (item, i) {
                    return (
                        <TouchableOpacity onPress={this.showModal.bind(this, i)} key={i}
                                          style={styles.list}><Text>{this.props.EventsData.message[this.props.EventsNumb].events[i].event}</Text>

                        </TouchableOpacity>
                    );
                }, this)}</ScrollView>
            </View>
            <Modal visible={this.state.isModalOpen}
                   onRequestClose={() => {
                       this.closeModal.bind(this)
                   }}
                   animationType={"slide"}>
                <EventInfo closeModal={this.closeModal.bind(this)} infoBox={this.state.infoBox}
                           EventsData={this.props.EventsData} EventsName={this.props.EventsName}/>

            </Modal>
        </View>);


    }
};

const styles = StyleSheet.create({
    list: {
        margin: 20,
        height: 200,
        backgroundColor: 'white',
        width: 200,
        borderWidth: 2,
        borderColor: 'black'
    },
    contentContainer: {
        backgroundColor: 'yellow',
    },
    wrapper: {
        paddingTop: 20,
        backgroundColor: '#27ae60',

    },
    body: {
        backgroundColor: '#27ae60',
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    load: {
        flex: 1,
        color: 'black',
        fontSize: 35,
        fontWeight: 'bold'
    },
    title: {
        color: 'black',
        fontSize: 90,
        fontWeight: 'bold'
    },
    titleV: {
        flex: 1,
    },
    titleView: {
        flex: 2,
    },
    scView: {
        flex: 2,
        backgroundColor: '#27ae60',
    },
    logo: {
        flex: 1,
        alignSelf: "stretch",
        height: 100
    },
});