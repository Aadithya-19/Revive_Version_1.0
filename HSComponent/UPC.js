import * as React from 'react';
import { View, Button, Text, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class App extends React.Component {

    aboutScreen = () => {
        this.props.navigation.navigate('Menu');
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

                <ScrollView>

                    <Text style={styles.text}>Upcoming Features</Text>

                    <Image
                        source={require('../assets/UPCpic.png')}
                        style={{ height: 250, width: 400, marginTop: 20 }}
                    />

                    <Text style={styles.desptext}>Some of our upcoming features to fulfill the requirements are: </Text>

                    <Text style={styles.desptext}>- Calling designated adults through App</Text>
                    <Text style={styles.desptext}>- Sharing the recorded notes and message via email</Text>
                    <Text style={styles.desptext}>- Sharing real-time location to parents or given elders</Text>
                    <Text style={styles.desptext}>- A group of people forming a support group(Expert Group) to share their stories of being bullied and how they overcame it.</Text>
                    <Text style={styles.desptext}>- ChatBot to chat with the expert group</Text>
                    <Text style={styles.desptext}>- Notifications for the video updates and messages</Text>
                    <Text style={styles.desptext}>- Using the Expert group create awareness around public school students.</Text>
                    <Text style={styles.desptext}>- Contacts and websites of counsilors to get personal counselling by sharing the stored recorded history in Revive app.</Text>
                    <Text style={styles.desptext}>- Adding Curated content to share the latest articles and videos </Text>
                    <TouchableOpacity
                        onPress={this.aboutScreen}
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

                </ScrollView>
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
    sbtext: {
        fontSize: 20,
        marginTop: 30,
        marginLeft: 10,
        color: "white",
        justifyContent: 'center',
    },
    desptext: {
        fontSize: 17,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
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
