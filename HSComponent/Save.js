import * as React from 'react';
import { View, Button, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
    createStackNavigator,
    TransitionPresets,
} from '@react-navigation/stack';

import { Video } from 'expo-av';

import { ScrollView } from 'react-native-gesture-handler';

function Home({ navigation }) {
    aboutScreen = () => {
       this.props.navigation.navigate('Menu');
    }
    return (
        <View style={{
            flex: 1,
            backgroundColor: "black"
        }}>
            <Image
                source={require('../assets/ReviveLogo.png')}
                style={{ height: 50, width: 50, marginTop: 20 }}
            />

            <Text style={styles.text}>Profile</Text>

            <ScrollView>



                <TouchableOpacity
                    onPress={() => navigation.navigate('DailyFitness')} style={{
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
                        backgroundColor: "black",
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
                        Record
                    </Text>

                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

function DailyFitness({ navigation }) {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "black"
        }}>
            <Image
                source={require('../assets/ReviveLogo.png')}
                style={{ height: 50, width: 50, marginTop: 20 }}
            />

            <Text style={styles.text}>Record</Text>

            <ScrollView>

                <Text style={styles.dtext}>In this screen you can add both audio and notes recording as the two buttons below represent.
            </Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate('RN')}
                    style={{
                        width: 275,
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
                    onPress={() => navigation.goBack()}
                    style={{
                        width: 275,
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
                        Audio Recording
                </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{
                        width: 275,
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
                        Record Calories and Weight loss
                </Text>

                </TouchableOpacity>


            </ScrollView>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                    width: 100,
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
                    Back
                </Text>

            </TouchableOpacity>

        </View>
    );
}

function RN({ navigation }) {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "black"
        }}>
            <Image
                source={require('../assets/ReviveLogo.png')}
                style={{ height: 50, width: 50, marginTop: 20 }}
            />

            <Text style={styles.text}>Record Notes</Text>

            <ScrollView>

                <TextInput
                    style={{
                        width: "75%",
                        height: 35,
                        alignSelf: 'center',
                        borderColor: '#E1FF3E',
                        borderRadius: 10,
                        borderWidth: 1,
                        color: "white",
                        marginTop: 20,
                        padding: 10
                    }}
                    placeholder={"Enter Notes"}
                    placeholderTextColor = {"white"}
                    maxLength={8}
                />
            </ScrollView>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                    width: 100,
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
                    Back
                </Text>

            </TouchableOpacity>

        </View>
    );
}


const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                cardOverlayEnabled: true,
                ...TransitionPresets.ModalPresentationIOS,
            }}
            mode="modal"
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="RN" component={RN} />
            <Stack.Screen name="DailyFitness" component={DailyFitness} />
        </Stack.Navigator>
    );
}

export default function App() {

    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
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
