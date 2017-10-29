import React from 'react';
import PropTypes from 'prop-types';
import {
    Dimensions,
    StyleSheet,
    ScrollView,
    View,
    Image,
    Text,
} from 'react-native';

const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        width: window.width,
        height: window.height,
        backgroundColor: 'white',
        padding: 20,
    },
    avatarContainer: {
        marginBottom: 20,
        marginTop: 20,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        flex: 1,
    },
    name: {
        position: 'absolute',
        left: 70,
        top: 20,
    },
    item: {
        fontSize:30,
        fontWeight: '300',
        paddingTop: 5,
    },
});

export default function Menu({ onItemSelected,loginData }) {

    return (
        <ScrollView scrollsToTop={false} style={styles.menu}>
            <View style={styles.avatarContainer}>
                <Image
                    style={styles.avatar}
                    source={{ uri }}
                />
                <Text style={styles.name}>dsfdsffds</Text>
            </View>
            <Text
                onPress={() => onItemSelected('Home')}
                style={styles.item}
            >
                Home
            </Text>
            <Text
                onPress={() => onItemSelected('Notifications')}
                style={styles.item}
            >
                Notifications
            </Text>
            <Text
                onPress={() => onItemSelected('Events')}
                style={styles.item}
            >
                Events
            </Text>
            <Text
                onPress={() => onItemSelected('Schedule')}
                style={styles.item}
            >
                Schedule
            </Text>
            <Text
                onPress={() => onItemSelected('Hospitality')}
                style={styles.item}
            >
                Hospitality
            </Text>
            <Text
                onPress={() => onItemSelected('Map')}
                style={styles.item}
            >
                Map
            </Text>
            <Text
                onPress={() => onItemSelected('FAQ')}
                style={styles.item}
            >
                FAQ
            </Text>
            <Text
                onPress={() => onItemSelected('Contact Us')}
                style={styles.item}
            >
                Contact Us
            </Text>
            <Text
                onPress={() => onItemSelected('Logout')}
                style={styles.item}
            >
                Logout
            </Text>
        </ScrollView>
    );
}

Menu.propTypes = {
    onItemSelected: PropTypes.func.isRequired,
};