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
                    <Text style={styles.text}>Types of Bullying</Text>


                    <Image
                        source={require('../assets/bullying.png')}
                        style={{ height: 275, width: 400, marginTop: 20 }}
                    />

                    <Text style={styles.sbtext}>Physical bullying :</Text>
                    <Image
                        source={require('../assets/physical.jpeg')}
                        style={{ height: 125, width: 100, marginTop: 20, marginLeft: 10 }}
                    />
                    <Text style={styles.desptext}>
                        It is with physical actions to gain power and control over their targets. Physical bullies tend to be bigger, stronger, and more aggressive than their peers. Examples of physical bullying include kicking, hitting, punching, slapping, shoving, and other physical attack
                    </Text>

                    <Text style={styles.sbtext}>Group bullying : </Text>
                    <Image
                        source={require('../assets/groupBullying.png')}
                        style={{ height: 125, width: 150, marginTop: 20, marginLeft: 250 }}
                    />
                    <Text style={styles.desptext}>Bullies in this category are part of a group and have a pack mentality when they are together. They tend to bully as a group but behave much differently when they are alone—even if they are alone with the victim. They wont understand their mistakes as they feel “everyone is doing this”.
                    </Text>

                    <Text style={styles.sbtext}>Verbal bullying : </Text>
                    <Image
                        source={require('../assets/verbalBullying.png')}
                        style={{ height: 125, width: 200, marginTop: 20 }}
                    />
                    <Text style={styles.desptext}>Perpetrators of verbal bullying use words, statements, and name-calling to gain power and control over a target. Typically, verbal bullies will use relentless insults to belittle, demean, and hurt another person. They choose their targets based on the way they look, act, or behave. It’s also common for verbal bullies to target kids with special needs.
                    </Text>

                    <Text style={styles.sbtext}>Relational bullying : </Text>
                    <Image
                        source={require('../assets/relationalBullying.jpg')}
                        style={{ height: 125, width: 175, marginTop: 20, marginLeft: 225, marginRight: 10 }}
                    />
                    <Text style={styles.desptext}>Relational bullies often ostracize others from a group, spread rumours, manipulate situations, and break confidences. The goal of a relationally aggressive bully is to increase their own social standing by controlling or bullying another person.
                    </Text>

                    <Text style={styles.sbtext}>Cyber bullying : </Text>
                    <Image
                        source={require('../assets/cyberbullying.jpg')}
                        style={{ height: 125, width: 200, marginTop: 20, marginLeft: 10 }}
                    />
                    <Text style={styles.desptext}>When a tween or a teen uses the Internet, a smartphone, or other technology to harass, threaten, embarrass, or target another person, it is cyberbullying.
                    Examples of cyberbullying include posting hurtful images, making online threats, and sending hurtful emails or texts. echnology makes them feel anonymous, insulated, and detached from the situation.</Text>

                    <Text style={styles.sbtext}>Sexual bullying : </Text>
                    <Image
                        source={require('../assets/sexualbullying.jpg')}
                        style={{ height: 125, width: 200, marginTop: 20, marginLeft: 225, marginRight: 30 }}
                    />
                    <Text style={styles.desptext}>Sexual Bullying consists of repeated, harmful, and humiliating actions that target a person sexually. Examples include sexual name-calling, crude comments, vulgar gestures, uninvited touching, sexual propositioning, and pornographic materials. A bully might make a crude comment about a peer's appearance, attractiveness, sexual development, or sexual activity. Sexting also can lead to sexual bullying.</Text>

                    <Text style={styles.sbtext}>Prejudicial bullying : </Text>
                    <Image
                        source={require('../assets/prejudicialbullying.jpg')}
                        style={{ height: 125, width: 200, marginTop: 20, marginLeft: 10 }}
                    />
                    <Text style={styles.desptext}>Prejudicial bullying is based on prejudices tweens and teens have toward people of different races, religions, or sexual orientation. This type of bullying can encompass all the other types of bullying. When prejudicial bullying occurs, kids are targeting others who are different from them and singling them out.</Text>

                    <Text style={styles.sbtext}>Bully Victims-Bullying: </Text>
                    <Image
                        source={require('../assets/bullyvictimsbulying.png')}
                        style={{ height: 175, width: 150, marginTop: 20, marginLeft: 250, marginRight: 30 }}
                    />
                    <Text style={styles.desptext}>Bully-Victims often rise up after being bullied. They bully others weaker than them because they, too, have been bullied. Their goal usually is to regain a sense of power and control in their lives.</Text>

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
