import * as React from 'react';
import { View, Button, Text, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from 'react-native';

export default class App extends React.Component {

    aboutScreen = () => {
        this.props.navigation.navigate('Record');
    }

    splashScreen = () => {
        Alert.alert("Successfully signed out please refresh the page...")
    }

    stScreen = () => {
        this.props.navigation.navigate('Settings');
    }

    tobScreen = () => {
        this.props.navigation.navigate('TOB');
    }

    obScreen = () => {
        this.props.navigation.navigate('OVB');
    }

    upcScreen = () => {
        this.props.navigation.navigate('UPC')
    }

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: "black"
            }}>

                <Image
                    source={require('../assets/ReviveLogo.png')}
                    style={{ height: 50, width: 50, marginTop: 20 }}
                />

                <Text style={styles.text}>Home</Text>
                <TouchableOpacity
                    onPress={this.aboutScreen}
                    style={{
                        width: 175,
                        height: 50,
                        alignSelf: 'center',
                        marginTop: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 25,
                        borderWidth: 5,
                        borderColor: "#E1FF3E",
                        marignTop: 30,
                        backgroundColor: "#000000",
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 8,
                        },
                        shadowOpacity: 0.30,
                        shadowRadius: 10.32,
                        elevation: 16,
                        padding: 10
                    }}>
                    <Text style={{ color: "white" }}>
                        Record Notes
                </Text>


                </TouchableOpacity>

              
                <TouchableOpacity
                    onPress={
                        this.tobScreen
                    }
                    style={{
                        width: 175,
                        height: 50,
                        alignSelf: 'center',
                        marginTop: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 25,
                        borderWidth: 5,
                        borderColor: "#E1FF3E",
                        marignTop: 30,
                        backgroundColor: "#000000",
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 8,
                        },
                        shadowOpacity: 0.30,
                        shadowRadius: 10.32,
                        elevation: 16,
                        padding: 10
                    }}>
                    <Text style={{ color: "white" }}>
                        Types of Bullying
                </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={
                        this.obScreen
                    }
                    style={{
                        width: 175,
                        height: 50,
                        alignSelf: 'center',
                        marginTop: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 25,
                        borderWidth: 5,
                        borderColor: "#E1FF3E",
                        marignTop: 30,
                        backgroundColor: "#000000",
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 8,
                        },
                        shadowOpacity: 0.30,
                        shadowRadius: 10.32,
                        elevation: 16,
                        padding: 10
                    }}>
                    <Text style={{ color: "white", alignItems:'center' }}>
                        Overcome Bullying
                </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={
                        this.stScreen
                    }
                    style={{
                        width: 175,
                        height: 50,
                        alignSelf: 'center',
                        marginTop: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 25,
                        borderWidth: 5,
                        borderColor: "#E1FF3E",
                        marignTop: 30,
                        backgroundColor: "#000000",
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 8,
                        },
                        shadowOpacity: 0.30,
                        shadowRadius: 10.32,
                        elevation: 16,
                        padding: 10
                    }}>
                    <Text style={{ color: "white" }}>
                        Settings
                </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={
                        this.upcScreen
                    }
                    style={{
                        width: 175,
                        height: 50,
                        alignSelf: 'center',
                        marginTop: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 25,
                        borderWidth: 5,
                        borderColor: "#E1FF3E",
                        marignTop: 30,
                        backgroundColor: "#000000",
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 8,
                        },
                        shadowOpacity: 0.30,
                        shadowRadius: 10.32,
                        elevation: 16,
                        padding: 10
                    }}>
                    <Text style={{ color: "white" }}>
                        Upcoming features
                </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={
                        this.splashScreen
                    }
                    style={{
                        width: 150,
                        height: 50,
                        alignSelf: 'center',
                        marginTop: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 25,
                        borderWidth: 5,
                        borderColor: "#E1FF3E",
                        marignTop: 30,
                        backgroundColor: "#000000",
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 8,
                        },
                        shadowOpacity: 0.30,
                        shadowRadius: 10.32,
                        elevation: 16,
                        padding: 10
                    }}>
                    <Text style={{ color: "white" }}>
                        Logout
                </Text>
                </TouchableOpacity>

            </View >
        );
    }
}


const styles = StyleSheet.create({

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
