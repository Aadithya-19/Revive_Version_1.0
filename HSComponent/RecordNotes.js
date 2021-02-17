import * as React from 'react';
import { View, Button, Text, StyleSheet, Image, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView, FlatList } from 'react-native';

import { createAppContainer } from 'react-navigation';

import db from '../config'
import { ScrollView } from 'react-native-gesture-handler';

var today = new Date()
var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear()

console.log(date)

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: date,
            storyText: '',
        }
    }
    aboutScreen = () => {
        this.props.navigation.navigate('Menu');
    }
    HS = () => {
        this.props.navigation.navigate('History');
    }

    submitStory = async () => {
        db.collection('stories').add({
            "current_date": this.state.currentDate,
            "storyText": this.state.storyText,
        })
        this.setState({
            storyText: ''
        })
        return Alert.alert("Congratulations, your story has successfully been submitted.")
    }

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: "black"
            }}>
                <KeyboardAvoidingView>
                    <Image
                        source={require('../assets/ReviveLogo.png')}
                        style={{ height: 50, width: 50, marginTop: 20 }}
                    />

                    <Text style={styles.text}>Record Notes</Text>

                    <ScrollView>
                        <Text style={styles.dtext}>Calm and settle your nervous system with gentle easy - to - implement guidance and writing tips so you can stop feeling overwhelemd by the more difficult parts of you life story. Writting helps to get past your trauma</Text>
                        <TextInput
                            style={{
                                width: "75%",
                                height: 350,
                                alignSelf: 'center',
                                borderColor: '#E1FF3E',
                                borderRadius: 10,
                                borderWidth: 5,
                                backgroundColor: "white",
                                color: "black",
                                marginTop: 20,
                                padding: 10
                            }}
                            onChangeText={(text) => {
                                this.setState({
                                    storyText: text
                                })
                            }}
                            value={this.state.storyText}
                            placeholder={"Enter Notes"}
                            multiline={true}
                            textAlignVertical={'top'}
                            placeholderTextColor={"black"}
                        />
                        <TouchableOpacity
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
                            }}
                            onPress={() => {this.submitStory()}}
                        >
                            <Text style={{ color: "white" }}>Submit</Text>
                        </TouchableOpacity>

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
                </KeyboardAvoidingView>
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
    itemContainer: {
        height: 80,
        width: '100%',
        borderWidth: 2,
        borderColor: 'green',
        justifyContent: 'center',
        alignSelf: 'center',
    }
});