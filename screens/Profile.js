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
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'react-native-elements'
import Record from '../HSComponent/RecordNotes'
import Notifications from '../HSComponent/Notifications'
import Menu from '../screens/Menu'
import OVB from '../HSComponent/OverComeBullying'
import UPC from '../HSComponent/UPC'
import Settings from '../HSComponent/SettingsScreen'
import Splash from '../screens/SplashScreen'
import History from '../HSComponent/HistoryNotes'
import TOB from '../HSComponent/TypesOfBullying'


export default class HomeScreen extends React.Component {

    render() {
        return (
           <AppContainer/>
        );
    }
}
const stackNavigatorOptions = {
    headerShown: false,
}


const Screens = createStackNavigator({
    Menu: {
        screen: Menu,
    },
    Record: {
        screen: Record,
    },
    Notifications: {
        screen: Notifications,
    },
    Settings: {
        screen: Settings,
    },
    Splash: {
        screen: Splash,
    },
    History: {
        screen: History,
    },
    TOB: {
        screen: TOB,
    },
    OVB: {
        screen: OVB,
    },
    UPC: {
        screen: UPC,
    },
},
    {
        defaultNavigationOptions: stackNavigatorOptions,
    }
);

const AppContainer = createAppContainer(Screens);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        alignSelf: 'center',
        fontSize: 25,
        marginTop: 15,
        color: "white",
        justifyContent: 'center',
    },
    dtext: {
        alignSelf: 'center',
        fontSize: 15,
        marginTop: 14,
        color: "white",
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
});
