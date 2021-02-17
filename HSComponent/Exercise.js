import * as React from 'react';
import { View, Button, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ReactPlayer from "react-player";
import {
    createStackNavigator,
    TransitionPresets,
} from '@react-navigation/stack';

import { WebView } from 'react-native-webview'

import { ScrollView } from 'react-native-gesture-handler';

function Home({ navigation }) {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "black"
        }}>
            <Image
                source={require('../assets/ReviveLogo.png')}
                style={{ height: 50, width: 50, marginTop: 20 }}
            />

            <Text style={styles.text}>Exercise</Text>

            <ScrollView>

                <Text style={styles.dtext}>You might wonder how exercising helps bullying... It found that physical activity made a significant difference in the mental health and attitudes of bullying victims.
                Physical activities promotes healthy growth and development.

                Developing a good physical foundation from a young age helps the mental state of mind healthy.

                Stretching exercises help to relax the muscles and relax the mind as well.

                It helps to improve the positivity by giving the sense of protection.
                Eating right food at the right time helps to keep you fit. </Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate('ArmFat')}
                    style={{
                        width: 175,
                        height: 50,
                        alignSelf: 'center',
                        marginTop: 20,
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
                        padding: 10,
                    }}>

                    <Image

                    />
                    <Text style={{ color: "white" }}>
                        Arm Fat Exerise
                </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('BellyFat')} style={{
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
                        Belly Fat Exerise
                </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('ChestFat')} style={{
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
                        Chest Fat Exerise
                </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('HealthyDiet')} style={{
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
                        Healthy Diet
                </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('ThighFat')}
                    style={{
                        width: 175,
                        height: 50,
                        alignSelf: 'center',
                        marginTop: 20,
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
                        padding: 10,
                    }}>

                    <Image

                    />
                    <Text style={{ color: "white" }}>
                        Zumba
                </Text>

                </TouchableOpacity>

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
                        Daily Fitness
                </Text>

                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

function ArmFat({ navigation }) {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "black"
        }}>
            <Image
                source={require('../assets/ReviveLogo.png')}
                style={{ height: 50, width: 50, marginTop: 20 }}
            />

            <Text style={styles.text}>Arm Fat Exercise</Text>
            <ScrollView>
                <Text style={styles.dtext}>When testosterone level drops, your body may be more inclined to store fat while resisting the need to build muscles and this excess fat will show in areas like the arms.
                Stress, lack of sleep and unhealthy lifestyle habits are just some contributing factors to plummeting testosterone levels.
                Arm Fat exercises help in tightening and smoothing tissue, and removing extra fat.
                Teenagers can lose arm fat by making simple changes in their daily lives.
            </Text>

                <WebView
                    allowFullScreenVideo
                    allowInlineMediaPlayback
                    mediaPlaybackRequiresUserAction
                    source={{ uri: 'https://www.youtube.com/embed/5S0dM-WSzj0' }}
                    style={{ marginTop: 20, width: 400, height: 300, alignSelf: 'center', borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
                />

                <Text style={styles.vtext}>Lose Arm Fat in 1 Week</Text>
                <WebView
                    allowFullScreenVideo
                    allowInlineMediaPlayback
                    mediaPlaybackRequiresUserAction
                    source={{ uri: 'https://www.youtube.com/embed/ZHH0wNzIzag' }}
                    style={{ marginTop: 20, width: 400, height: 300, borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
                />
                <Text style={styles.vtext}>How to Lose Arm Fat - 5 min exercise</Text>


                <WebView
                    allowFullScreenVideo
                    allowInlineMediaPlayback
                    mediaPlaybackRequiresUserAction
                    source={{ uri: 'https://www.youtube.com/embed/Gnvf7H3E-fA' }}
                    style={{ marginTop: 20, width: 400, height: 300, borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
                />
                <Text style={styles.vtext}>How to Lose Arm Fat - Home Workout</Text>

                <WebView
                    allowFullScreenVideo
                    allowInlineMediaPlayback
                    mediaPlaybackRequiresUserAction
                    source={{ uri: 'https://www.youtube.com/embed/03eoSGpUPgM' }}
                    style={{ marginTop: 20, width: 400, height: 300, borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
                />

                <Text style={styles.vtext}>How to Lose Arm Fat - in 7 days</Text>
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

function BellyFat({ navigation }) {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "black"
        }}>
            <Image
                source={require('../assets/ReviveLogo.png')}
                style={{ height: 50, width: 50, marginTop: 20 }}
            />

            <Text style={styles.text}>Belly Fat Exercise</Text>

            <ScrollView>
                <Text style={styles.dtext}>Belly fat refers to fat around the abdomen.
                There are many reasons why people gain belly fat, including poor diet, lack of exercise, and stress. Improving nutrition, increasing activity, reducing stress, and making other lifestyle changes can all help people lose unwanted belly fat.
                Teenagers are prone to drinking more sugary drinks than water. Sugary drinks are full of empty calories that contain no nutrition. To lose weight, teenagers should substitute those drinks for water instead.
            </Text>

                <WebView
                    allowFullScreenVideo
                    allowInlineMediaPlayback
                    mediaPlaybackRequiresUserAction
                    source={{ uri: 'https://www.youtube.com/embed/PMwh4_hqBY4' }}
                    style={{ marginTop: 20, width: 400, height: 300, alignSelf: 'center', borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
                />
                <Text style={styles.vtext}>How to Lose Belly Fat - 8 min exercise</Text>

                <WebView
                    allowFullScreenVideo
                    allowInlineMediaPlayback
                    mediaPlaybackRequiresUserAction
                    source={{ uri: 'https://www.youtube.com/embed/3Zx3Q3ZvaaI' }}
                    style={{ marginTop: 20, width: 400, height: 300, borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
                />
                <Text style={styles.vtext}>10 safe exercises to reduce belly fat</Text>


                <WebView
                    allowFullScreenVideo
                    allowInlineMediaPlayback
                    mediaPlaybackRequiresUserAction
                    source={{ uri: 'https://www.youtube.com/embed/6u9dtrZ_cxs' }}
                    style={{ marginTop: 20, width: 400, height: 300, borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
                />
                <Text style={styles.vtext}>Kids exercise - lose Belly Fat</Text>


                <WebView
                    allowFullScreenVideo
                    allowInlineMediaPlayback
                    mediaPlaybackRequiresUserAction
                    source={{ uri: 'https://www.youtube.com/embed/ISrATjuJFt0' }}
                    style={{ marginTop: 20, width: 400, height: 300, borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
                />

                <Text style={styles.vtext}>8 abs exercised for beginners</Text>

                <WebView
                    allowFullScreenVideo
                    allowInlineMediaPlayback
                    mediaPlaybackRequiresUserAction
                    source={{ uri: 'https://www.youtube.com/embed/Ugjt3kj7E2M' }}
                    style={{ marginTop: 20, width: 400, height: 300, borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
                />
                <Text style={styles.vtext}>4 min exercise home workout to lose belly fat</Text>
                <WebView
                    allowFullScreenVideo
                    allowInlineMediaPlayback
                    mediaPlaybackRequiresUserAction
                    source={{ uri: 'https://www.youtube.com/embed/EvKdgyjxfCo' }}
                    style={{ marginTop: 20, width: 400, height: 300, borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
                />
                <Text style={styles.vtext}>8 kids exercises to lose belly fat</Text>
                <WebView
                    allowFullScreenVideo
                    allowInlineMediaPlayback
                    mediaPlaybackRequiresUserAction
                    source={{ uri: 'https://www.youtube.com/embed/-YAQVDPLRvM' }}
                    style={{ marginTop: 20, width: 400, height: 300, borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
                />
                <Text style={styles.vtext}>Exercises for kids to lose belly fat</Text>
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

function ChestFat({ navigation }) {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "black"
        }}>
            <Image
                source={require('../assets/ReviveLogo.png')}
                style={{ height: 50, width: 50, marginTop: 20 }}
            />

            <Text style={styles.text}>Chest Fat Exercise</Text>

            <ScrollView>

                <Text style={styles.dtext}>Losing chest fat is no different from losing fat anywhere else on your body, and there’s no way to lose fat from your chest only, it comes as part of total-body fat loss.
                Exercise and healthy diet will help to reduce the chest fat.
                </Text>

                <WebView
                    allowFullScreenVideo
                    allowInlineMediaPlayback
                    mediaPlaybackRequiresUserAction
                    source={{ uri: 'https://www.youtube.com/embed/UJaZdmJgGuM' }}
                    style={{ marginTop: 20, width: 400, height: 300, alignSelf: 'center', borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
                />
                <Text style={styles.vtext}>How to lose man boobs</Text>

                <WebView
                    allowFullScreenVideo
                    allowInlineMediaPlayback
                    mediaPlaybackRequiresUserAction
                    source={{ uri: 'https://www.youtube.com/embed/LokHaHiPlIk' }}
                    style={{ marginTop: 20, width: 400, height: 300, borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
                />
                <Text style={styles.vtext}>7 min home workout to lose chest fat</Text>

                <WebView
                    allowFullScreenVideo
                    allowInlineMediaPlayback
                    mediaPlaybackRequiresUserAction
                    source={{ uri: 'https://www.youtube.com/embed/XQzbvR_ZinM' }}
                    style={{ marginTop: 20, width: 400, height: 300, borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
                />
                <Text style={styles.vtext}>Home workout to lose chest fat</Text>

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

            <Text style={styles.text}>Daily Fitness</Text>

            <ScrollView>

                <Text style={styles.dtext}>Aerobic activities like biking, dancing,playing or running are the best fitness exercise for teenagers. Also, take few minutes for some strength training.
                Daily exercise may help prevent conditions such as obesity and keeps you healthy lifestyle.
                Regular exercise helps to improve the self-image and confidence.
            </Text>

                <Image
                    source={require('../assets/exercise.jpg')}
                    style={{
                        height: 590, width: 395, alignSelf: 'center', marginTop: 20, borderWidth: 5, borderColor: "#E1FF3E",
                    }}
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

function ThighFat({ navigation }) {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "black"
        }}>
            <Image
                source={require('../assets/ReviveLogo.png')}
                style={{ height: 50, width: 50, marginTop: 20 }}
            />

            <Text style={styles.text}>Zumba</Text>

            <ScrollView>
                <Text style={styles.dtext}>Zumba is also the most enjoyable form of exercise.
                stretching the muscles and moving the body to the beats of Hip-Hop and Salsa always feels great and is worth all the fun.
                Besides losing weight, Zumba brings energy and smile with nice movements for the beats.</Text>

                <WebView
                    allowFullScreenVideo
                    allowInlineMediaPlayback
                    mediaPlaybackRequiresUserAction
                    source={{ uri: 'https://www.youtube.com/embed/hMA8IqioQgc' }}
                    style={{ marginTop: 20, width: 400, height: 300, alignSelf: 'center', borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
                />

                <Text style={styles.vtext}>Basic Aerobics "Full Body Workout / Dance workout"</Text>
                <WebView
                    allowFullScreenVideo
                    allowInlineMediaPlayback
                    mediaPlaybackRequiresUserAction
                    source={{ uri: 'https://www.youtube.com/embed/U5eylP3-9vQ' }}
                    style={{ marginTop: 20, width: 400, height: 300, borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
                />

                <Text style={styles.vtext}>Basic Zumba steps for quick weight loss</Text>

                <WebView
                    allowFullScreenVideo
                    allowInlineMediaPlayback
                    mediaPlaybackRequiresUserAction
                    source={{ uri: 'https://www.youtube.com/embed/o6cQTEdBVAA' }}
                    style={{ marginTop: 20, width: 400, height: 300, borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
                />

                <Text style={styles.vtext}>Aerobics for body toning and for fast weight loss</Text>

                <WebView
                    allowFullScreenVideo
                    allowInlineMediaPlayback
                    mediaPlaybackRequiresUserAction
                    source={{ uri: 'https://www.youtube.com/embed/o5soep1e8Ik' }}
                    style={{ marginTop: 20, width: 400, height: 300, borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
                />

                <Text style={styles.vtext}>Basic Zumba steps in 5 mins</Text>

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

function HealthyDiet({ navigation }) {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "black"
        }}>
            <Image
                source={require('../assets/ReviveLogo.png')}
                style={{ height: 50, width: 50, marginTop: 20 }}
            />

            <Text style={styles.text}>Healthy Diet</Text>

            <ScrollView>

                <Text style={styles.dtext}>It's not only the 100 pushups or situps that help you become fit ,a balanced diet is very important for the health of your body and mind. Healthy diet helps overcome the anxiety and depression. Nutritious diet isn't just good for the body; it's great for the brain too.</Text>

                <WebView
                    allowFullScreenVideo
                    allowInlineMediaPlayback
                    mediaPlaybackRequiresUserAction
                    source={{ uri: 'https://www.youtube.com/embed/iUnH8jhHAn4' }}
                    style={{ marginTop: 20, width: 400, height: 300, alignSelf: 'center', borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
                />
                <Text style={styles.vtext}>14 foods to reduce hunger and lose weight faster</Text>

                <WebView
                    allowFullScreenVideo
                    allowInlineMediaPlayback
                    mediaPlaybackRequiresUserAction
                    source={{ uri: 'https://www.youtube.com/embed/1A_PF3gux1g' }}
                    style={{ marginTop: 20, width: 400, height: 300, borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
                />

                <Text style={styles.vtext}>11 mistakes people make trying to lose weight</Text>

                <WebView
                    allowFullScreenVideo
                    allowInlineMediaPlayback
                    mediaPlaybackRequiresUserAction
                    source={{ uri: 'https://www.youtube.com/embed/JgCQ1bHGN04' }}
                    style={{ marginTop: 20, width: 400, height: 300, borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
                />
                <Text style={styles.vtext}>10 food habits to lose weight</Text>

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
            <Stack.Screen name="ArmFat" component={ArmFat} />
            <Stack.Screen name="BellyFat" component={BellyFat} />
            <Stack.Screen name="ChestFat" component={ChestFat} />
            <Stack.Screen name="ThighFat" component={ThighFat} />
            <Stack.Screen name="HealthyDiet" component={HealthyDiet} />
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
    vtext: {
        fontSize: 15,
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'center',
        color: "white",
        alignSelf: 'center',
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
