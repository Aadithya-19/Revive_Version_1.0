import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView
} from 'react-native';

export default class About extends React.Component {

    backScreen = () => {
        this.props.navigation.navigate('Splash');
    };

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
                        source={require('../assets/abtpic1.png')}
                        style={{ alignSelf: 'center', height: 300, width: 300, marginTop: 10 }}
                    />
                    <Text style={styles.text}>
                        Bullying game can not be played without the victim. For bullies to gain power, they must find a victim to take it away from. If we help the victims not to be easy targets, it will make it a bit harder for the bullies to take anything away from them.
                    </Text>

                    <Text style={styles.text3}>
                        Face the Fear...You are not alone...
                    </Text>

                    <Text style={styles.text2}>
                        We at REVIVE would like to help the victims to become confident , bold. Many of the tips described in list series are useful both for sttudents and for adults. Much like any other list, some are easier to implement and others are less so, but I promise you that if you go over each of them and dedicate time each week to implementing at least one, the bullying will decrease and may eventually stop.
                    </Text>

                    <Text style={styles.text2}>
                        If you are a parent concerned about your child being a victim of bullying, suggest them to use the REVIVE App. Do not expect your kids to figure the solution all by themselves. It is hard to be bullied and harder to think clearly and come up with mature solutions, so take charge!
                    </Text>

                    <Text style={styles.text2}>
                        Follow the suggestions from this App, practice regular exercises ,relax and smile. You will be more successful and more confident to face any situations.
                    </Text>
                </ScrollView>
                <TouchableOpacity
                    onPress={this.aboutScreen}
                    style={{
                        width: 150,
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        borderRadius: 25,
                        marginTop: 50,
                        borderWidth: 5,
                        borderColor: "#E1FF3E",
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
                    }}
                    onPress={this.backScreen}
                >
                    <Text style={{ color: "white" }}>
                        Back
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    text: {
        alignSelf: 'center',
        marginTop: 50,
        justifyContent: 'center',
        color: "white",
        marginLeft: 10,
        fontSize: 16,
        marginRight: 10,
    },

    text2: {
        alignSelf: 'center',
        marginTop: 20,
        justifyContent: 'center',
        color: "white",
        marginLeft: 10,
        marginRight: 10,
        fontSize: 16,

    },
    text3: {
        alignSelf: 'center',
        marginTop: 30,
        justifyContent: 'center',
        fontSize: 25,
        color: "white",
        fontWeight:'bold',
        marginLeft: 10,
        marginRight: 10,
    },

})