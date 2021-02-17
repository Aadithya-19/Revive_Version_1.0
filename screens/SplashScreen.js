import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';

export default class SplashScreen extends React.Component {

    nextScreen = () => {
        this.props.navigation.navigate('LogIn');
    };
    aboutScreen = () => {
        this.props.navigation.navigate('About');
    }

    render() {
        return (
                
            <View style={{
                flex: 1,
                alignItems:'center',
                backgroundColor: "black",
            }}>
               
                <Image
                    source={require('../assets/ReviveLogo.png')}
                    style={{ alignSelf: 'center', height: 400, width: 400, marginTop:75}}
                />

                <Text>
                        
                </Text>
                <TouchableOpacity
                    onPress={this.nextScreen}
                    style={{
                        width: 150,
                        height: 50,
                        marginTop: 10,
                        justifyContent: 'center', 
                        borderWidth:5,
                        borderColor: "#E1FF3E",
                        alignItems: 'center',
                        borderRadius: 25,
                        marignTop:30,
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

                    <Text style ={{color:"white"}}>
                        User Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.aboutScreen}
                    style={{
                        width: 150,
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 25,
                        marginTop:50,
                        borderWidth:5,
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
                    }}>

                    <Text style ={{color:"white"}}>
                        About Revive
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

} 