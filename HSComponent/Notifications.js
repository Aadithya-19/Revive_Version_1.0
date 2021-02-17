import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Image,
    ScrollView,
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation';

export default class Notifications extends React.Component {
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: "green"
            }}>
                <Image
                    source={require('../assets/ReviveLogo.png')}
                    style={{ alignSelf: 'center', height: 300, width: 300, marginTop: 20 }}
                />
                <Text style={styles.text}>
                    Notifications
                </Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({

    text: {
        alignSelf: 'center',
        fontSize: 45,
        marginTop: 15,
        justifyContent: 'center',
        marginLeft: 150,
        marginRight: 150,
    },
});
