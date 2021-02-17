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
import { Icon } from 'react-native-elements'

import Meditation from '../HSComponent/MeditationScreen'
import Exercise from '../HSComponent/Exercise'
import Video from '../HSComponent/videoPlaying'
import Profile from '../screens/Profile.js'
import SplashScreen from '../screens/SplashScreen';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <AppContainer />
        );
    }
}

const TabNavigator = createBottomTabNavigator({
    Menu: Profile,
    RCM: Meditation,
    Exercise: Exercise,
    Stop_Bullying: Video,
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: () => {
                const routeName = navigation.state.routeName;
                console.log(routeName)
                if (routeName === "Menu") {
                    return (
                        
                        <Image
                            source={require('../assets/Home.png')}
                            style={{ height: 30, width: 30}}
                        />

                    )
                }
                else if (routeName === "Exercise") {
                    return (
                        <Image
                            source={require('../assets/Workout.png')}
                            style={{ height: 35, width: 35}}
                        />
                    )
                }
                else if (routeName === "Stop_Bullying") {
                    return (
                        <Image
                        source={require('../assets/Video.png')}
                        style={{ height: 37, width: 37}}
                        />
                    )
                }
                else if (routeName === "RCM") {
                    return (
                        <Image
                        source={require('../assets/RCM.png')}
                        style={{ height: 30, width: 30}}
                        />
                    )
                }
                
            }
        })
    }
)



const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
