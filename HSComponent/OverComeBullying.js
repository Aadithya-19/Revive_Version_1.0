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
                <Image
                    source={require('../assets/stopbullying.jpg')}
                    style={{ height: 200, width: 400, marginTop: 20 }}
                />
                    <Text style={styles.text}>Stop Bullying</Text>

                    <Text style = {styles.desptext}>Everyone  should  develop skills that will keep them from being targeted by bullies. Understand that you are not the only one who is facing this.

                Here are the top eight skills to avoid school bullies,</Text>
                
                <Text style = {styles.desptext}>
                - Speak up about what happened, talk to friends,teachers or Parents.</Text>
                <Text style = {styles.desptext}>- Appear Confident, Standup for yourself</Text>
                <Text style = {styles.desptext}>- Don’t Play the Victim, think how to come out of it</Text>
                <Text style = {styles.desptext}>- Hold your anger, divert in better way</Text>
                <Text style = {styles.desptext}>- Recognize the triggers and try to address it</Text>
                <Text style = {styles.desptext}>- Take your time, calm and relax by watching some funny comics, videos</Text>
                <Text style = {styles.desptext}>- Practise regular exercise, Yoga and medidation</Text>
                <Text style = {styles.desptext}>- Nurture Friendship, avoid the bullies</Text>

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
