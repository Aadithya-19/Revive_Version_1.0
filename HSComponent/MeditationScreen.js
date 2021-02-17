import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
    createStackNavigator,
    TransitionPresets,
} from '@react-navigation/stack';
import { Video } from 'expo-av';


import { WebView } from 'react-native-webview'




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

            <Text style={styles.text}>Relax..Calm..Meditate..</Text>
            <Text style={styles.dtext}>RCM helps to improve mental health and overall well-being. It also strengthen the brain function and helps to improve the focus and attention. Relaxing is not only meditation or yoga it also includes being calm, focus on mind and laugh out loud. This helps to come out of the stress and improves positivity.</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Meditation')}
                style={{
                    width: 175,
                    height: 50,
                    alignSelf: 'center',
                    marginTop: 60,
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
                    Meditation
                </Text>

            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('Yoga')} style={{
                    width: 175,
                    height: 50,
                    alignSelf: 'center',
                    marginTop: 60,
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
                    Yoga
                </Text>

            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('Relaxtion')} style={{
                    width: 175,
                    height: 50,
                    alignSelf: 'center',
                    marginTop: 60,
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
                    Relaxation
                </Text>

            </TouchableOpacity>

        </View>
    );
}

function Meditation({ navigation }) {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "black"
        }}>
            <Image
                source={require('../assets/ReviveLogo.png')}
                style={{ height: 50, width: 50, marginTop: 20 }}
            />

            <Text style={styles.text}>Meditation</Text>

            <ScrollView>

                <Text style={styles.dtext}>Meditation is a practice where a person uses a technique such as focusing the mind on a particular object or thought to train attention and achieve a emotionally calm and stable state. Meditation helps bullying by cleaning the mind out of negativity caused by bullying. It is a pretty slow process but it bring back the self worth and self esteem.</Text>

                <WebView
                    allowFullScreenVideo
                    allowInlineMediaPlayback
                    mediaPlaybackRequiresUserAction
                    source={{ uri: 'https://www.youtube.com/embed/inpok4MKVLM' }}
                    style={{ marginTop: 20, width: 400, height: 300, alignSelf: 'center', borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
                />
                <Text style={styles.vtext}>
                    5 Minute Meditation
                </Text>

                <WebView
                    allowFullScreenVideo
                    allowInlineMediaPlayback
                    mediaPlaybackRequiresUserAction
                    source={{ uri: 'https://www.youtube.com/embed/U9YKY7fdwyg' }}
                    style={{ marginTop: 20, width: 400, height: 300, alignSelf: 'center', borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
                />
                <Text style={styles.vtext}>
                    10 Minutes of Mindfulness Meditation
                </Text>


                <WebView
                    allowFullScreenVideo
                    allowInlineMediaPlayback
                    mediaPlaybackRequiresUserAction
                    source={{ uri: 'https://www.youtube.com/embed/O-6f5wQXSu8' }}
                    style={{ marginTop: 20, width: 400, height: 300, alignSelf: 'center', borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
                />
                <Text style={styles.vtext}>
                    10-Minute Meditation For Anxiety
                </Text>

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

function Yoga({ navigation }) {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "black"
        }}>
            <Image
                source={require('../assets/ReviveLogo.png')}
                style={{ height: 50, width: 50, marginTop: 20 }}
            />

            <Text style={styles.text}>Yoga</Text>
            <ScrollView>
                <Text style={styles.dtext}>
                    Regular yoga practice creates mental clarity and calmness, relaxes the mind and sharpens concentration.
                    The distinct yoga poses help children in improving coordination, balance, strength, and flexibility.
                    Practicing yoga poses daily also helps to build a strong connection to body awareness and movement.
            Many students find that yoga helps with controlling emotions and increases the ability to deal with situations that are frustrating</Text>

                <WebView
                    allowFullScreenVideo
                    allowInlineMediaPlayback
                    mediaPlaybackRequiresUserAction
                    source={{ uri: 'https://www.youtube.com/embed/JTJ3YNUcfv4' }}
                    style={{ marginTop: 20, width: 400, height: 300, alignSelf: 'center', borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
                />
                <Text style={styles.vtext}>
                    Super Brain Yoga Exercise Technique Benefits Increase Brain Power Memory Concentration
                </Text>

                <WebView
                    allowFullScreenVideo
                    allowInlineMediaPlayback
                    mediaPlaybackRequiresUserAction
                    source={{ uri: 'https://www.youtube.com/embed/t3joHNOOyYY' }}
                    style={{ marginTop: 20, width: 400, height: 300, alignSelf: 'center', borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
                />
                <Text style={styles.vtext}>
                    10 minute Simple Yoga Flow for All Levels Sarah Beth Yoga
                </Text>

                <WebView
                    allowFullScreenVideo
                    allowInlineMediaPlayback
                    mediaPlaybackRequiresUserAction
                    source={{ uri: 'https://www.youtube.com/embed/pOmtHNaGaE4' }}
                    style={{ marginTop: 20, width: 400, height: 300, alignSelf: 'center', borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
                />
                <Text style={styles.vtext}>
                    Top 5 yoga for Concentration and Memory - Beginners Yoga to Improve Memory Power and Fitness
                </Text>

                <WebView
                    allowFullScreenVideo
                    allowInlineMediaPlayback
                    mediaPlaybackRequiresUserAction
                    source={{ uri: 'https://www.youtube.com/embed/1xRX1MuoImw' }}
                    style={{ marginTop: 20, width: 400, height: 300, alignSelf: 'center', borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
                />
                <Text style={styles.vtext}>
                    STEP BY STEP SURYA NAMASKAR FOR BEGINNERS Learn Sun Salutation In 3 Minutes Simple Yoga Lesson
                </Text>
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

function StandUP({ navigation }) {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "black"
        }}>
            <Image
                source={require('../assets/ReviveLogo.png')}
                style={{ height: 50, width: 50, marginTop: 20 }}
            />

            <Text style={styles.text}>Funny Videos</Text>

            <Text style={{
                alignSelf: 'center',
                fontSize: 16,
                marginTop: 14,
                color: "white",
                justifyContent: 'center',
                marginLeft: 20,
                marginRight: 20,
            }}>Kids friendly stand-up that helps to reduce your stress.</Text>

            <ScrollView>


                <WebView
                    allowFullScreenVideo
                    allowInlineMediaPlayback
                    mediaPlaybackRequiresUserAction
                    source={{ uri: 'https://www.youtube.com/embed/BUaSOdV5GGQ' }}
                    style={{ marginTop: 20, width: 400, height: 300, alignSelf: 'center', borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
                />
                <Text style={styles.vtext}>
                    Always Make A Cop Laugh
            </Text>


                <WebView
                    allowFullScreenVideo
                    allowInlineMediaPlayback
                    mediaPlaybackRequiresUserAction
                    source={{ uri: 'https://www.youtube.com/embed/G3pdLtOoR5A' }}
                    style={{ marginTop: 20, width: 400, height: 300, alignSelf: 'center', borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
                />
                <Text style={styles.vtext}>
                    Meeting Mexican Elvis
            </Text>

                <WebView
                    allowFullScreenVideo
                    allowInlineMediaPlayback
                    mediaPlaybackRequiresUserAction
                    source={{ uri: 'https://www.youtube.com/embed/aDbzkJGu8ao' }}
                    style={{ marginTop: 20, width: 400, height: 300, alignSelf: 'center', borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
                />
                <Text style={styles.vtext}>
                    Chocolate Cake
            </Text>

                <WebView
                    allowFullScreenVideo
                    allowInlineMediaPlayback
                    mediaPlaybackRequiresUserAction
                    source={{ uri: 'https://www.youtube.com/embed/WI5f1vov3O8' }}
                    style={{ marginTop: 20, width: 400, height: 300, alignSelf: 'center', borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
                />
                <Text style={styles.vtext}>
                    Chocolate Cake Shake
            </Text>

                <WebView
                    allowFullScreenVideo
                    allowInlineMediaPlayback
                    mediaPlaybackRequiresUserAction
                    source={{ uri: 'https://www.youtube.com/embed/yiHZRU-nmPY' }}
                    style={{ marginTop: 20, width: 400, height: 300, alignSelf: 'center', borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
                />
                <Text style={styles.vtext}>
                    Epic Prank
            </Text>

            <WebView
                    allowFullScreenVideo
                    allowInlineMediaPlayback
                    mediaPlaybackRequiresUserAction
                    source={{ uri: 'https://www.youtube.com/embed/ux8GZAtCN-M' }}
                    style={{ marginTop: 20, width: 400, height: 300, alignSelf: 'center', borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
                />
                <Text style={styles.vtext}>
                    Fluffy goes to India
            </Text>

            <WebView
                    allowFullScreenVideo
                    allowInlineMediaPlayback
                    mediaPlaybackRequiresUserAction
                    source={{ uri: 'https://www.youtube.com/embed/ccnwzScp6bM' }}
                    style={{ marginTop: 20, width: 400, height: 300, alignSelf: 'center', borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
                />
                <Text style={styles.vtext}>
                    Fluffy goes to Saudi Arabia
            </Text>

                
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

function Relaxtion({ navigation }) {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "black"
        }}>
            <Image
                source={require('../assets/ReviveLogo.png')}
                style={{ height: 50, width: 50, marginTop: 20 }}
            />

            <Text style={styles.text}>Relaxation</Text>

            <Text style={styles.dtext}>Relaxation help to reduce your stress and helps to be calm and positive. A good balance is really important for student as it helps increase the ability to learn, think clearly, focus and recall the information. It also helps to balance and reduce anxiety. Watch all time favourite comic strips and funny videos and of course RELAX...</Text>

            <TouchableOpacity
                onPress={() => navigation.navigate('FunnyComicStrips')} style={{
                    width: 175,
                    height: 50,
                    alignSelf: 'center',
                    marginTop: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
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
                    Funny Comic Strips
                </Text>

            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('StandUP')} style={{
                    width: 175,
                    height: 50,
                    alignSelf: 'center',
                    marginTop: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
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
                    Funny Videos
                </Text>

            </TouchableOpacity>

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

function FunnyComicStrips({ navigation }) {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "black"
        }}>
            <Image
                source={require('../assets/ReviveLogo.png')}
                style={{ height: 50, width: 50, marginTop: 20 }}
            />

            <Text style={styles.text}>Funny Comic Strips</Text>

            <TouchableOpacity
                onPress={() => navigation.navigate('Garfield')} style={{
                    width: 175,
                    height: 50,
                    alignSelf: 'center',
                    marginTop: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
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
                    Garfield
                </Text>

            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('BigNate')} style={{
                    width: 175,
                    height: 50,
                    alignSelf: 'center',
                    marginTop: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
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
                    Big Nate
                </Text>

            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('Dilbert')} style={{
                    width: 175,
                    height: 50,
                    alignSelf: 'center',
                    marginTop: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
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
                    Dilbert
                </Text>

            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('PAS')} style={{
                    width: 175,
                    height: 50,
                    alignSelf: 'center',
                    marginTop: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
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
                    Pearls Before Swine
                </Text>

            </TouchableOpacity>

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

function Garfield({ navigation }) {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "black"
        }}>
            <Image
                source={require('../assets/ReviveLogo.png')}
                style={{ height: 50, width: 50, marginTop: 20 }}
            />

            <Text style={styles.text}>Garfield Comics</Text>


            <ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/Garfield/GarfieldComic.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/Garfield/GarfieldComic2.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/Garfield/GarfieldComic3.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/Garfield/GarfieldComic4.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/Garfield/GarfieldComic5.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/Garfield/GarfieldComic6.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/Garfield/GarfieldComic7.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/Garfield/GarfieldComic8.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/Garfield/GarfieldComic9.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/Garfield/GarfieldComic10.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/Garfield/GarfieldComic11.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/Garfield/GarfieldComic12.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/Garfield/GarfieldComic13.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/Garfield/GarfieldComic14.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/Garfield/GarfieldComic15.png')}
                        style={{ height: 100, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/Garfield/GarfieldComic16.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/Garfield/GarfieldComic17.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/Garfield/GarfieldComic18.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/Garfield/GarfieldComic19.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/Garfield/GarfieldComic20.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>
            </ScrollView>

            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                    width: 100,
                    height: 50,
                    alignSelf: 'center',
                    marginTop: 20,
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

function BigNate({ navigation }) {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "black"
        }}>
            <Image
                source={require('../assets/ReviveLogo.png')}
                style={{ height: 50, width: 50, marginTop: 20 }}
            />

            <Text style={styles.text}>Big Nate Comics</Text>


            <ScrollView>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/BigNate/BigNateComic.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/BigNate/BigNateComic2.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/BigNate/BigNateComic3.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/BigNate/BigNateComic4.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/BigNate/BigNateComic5.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/BigNate/BigNateComic6.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/BigNate/BigNateComic7.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/BigNate/BigNateComic8.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/BigNate/BigNateComic9.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/BigNate/BigNateComic10.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/BigNate/BigNateComic11.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/BigNate/BigNateComic12.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/BigNate/BigNateComic13.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/BigNate/BigNateComic14.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/BigNate/BigNateComic15.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/BigNate/BigNateComic16.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/BigNate/BigNateComic17.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/BigNate/BigNateComic18.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/BigNate/BigNateComic19.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/BigNate/BigNateComic20.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/BigNate/BigNateComic21.png')}
                        style={{ height: 105, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>
            </ScrollView>

            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                    width: 100,
                    height: 50,
                    alignSelf: 'center',
                    marginTop: 20,
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

function Dilbert({ navigation }) {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "black"
        }}>
            <Image
                source={require('../assets/ReviveLogo.png')}
                style={{ height: 50, width: 50, marginTop: 20 }}
            />

            <Text style={styles.text}>Dilbert Comics</Text>


            <ScrollView>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/Dilbert/DilbertComic.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/Dilbert/DilbertComic2.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/Dilbert/DilbertComic3.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/Dilbert/DilbertComic4.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/Dilbert/DilbertComic5.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/Dilbert/DilbertComic6.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/Dilbert/DilbertComic7.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/Dilbert/DilbertComic8.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/Dilbert/DilbertComic9.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/Dilbert/DilbertComic10.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/Dilbert/DilbertComic11.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/Dilbert/DilbertComic12.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/Dilbert/DilbertComic13.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/Dilbert/DilbertComic14.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/Dilbert/DilbertComic15.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/Dilbert/DilbertComic16.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/Dilbert/DilbertComic17.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/Dilbert/DilbertComic18.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/Dilbert/DilbertComic19.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/Dilbert/DilbertComic20.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>
            </ScrollView>

            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                    width: 100,
                    height: 50,
                    alignSelf: 'center',
                    marginTop: 20,
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

function PAS({ navigation }) {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "black"
        }}>
            <Image
                source={require('../assets/ReviveLogo.png')}
                style={{ height: 50, width: 50, marginTop: 20 }}
            />

            <Text style={styles.text}>Pearls Before Swine Comics</Text>


            <ScrollView>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/PAS/PASComic.png')}
                        style={{ height: 120, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>


                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/PAS/PASComic2.png')}
                        style={{ height: 120, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/PAS/PASComic3.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/PAS/PASComic4.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/PAS/PASComic5.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/PAS/PASComic6.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/PAS/PASComic7.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/PAS/PASComic8.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/PAS/PASComic9.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/PAS/PASComic10.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/PAS/PASComic11.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/PAS/PASComic12.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/PAS/PASComic13.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/PAS/PASComic14.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/PAS/PASComic15.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/PAS/PASComic16.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/PAS/PASComic17.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/PAS/PASComic18.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/PAS/PASComic19.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                    style={styles.container} stlye={{ flex: 1 }}>
                    <Image
                        source={require('../assets/PAS/PASComic20.png')}
                        style={{ height: 115, width: 400, alignSelf: 'center', marginTop: 20 }}
                    />
                </ScrollView>
            </ScrollView>

            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                    width: 100,
                    height: 50,
                    alignSelf: 'center',
                    marginTop: 20,
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
            <Stack.Screen name="Meditation" component={Meditation} />
            <Stack.Screen name="Yoga" component={Yoga} />
            <Stack.Screen name="Relaxtion" component={Relaxtion} />
            <Stack.Screen name="Garfield" component={Garfield} />
            <Stack.Screen name="BigNate" component={BigNate} />
            <Stack.Screen name="Dilbert" component={Dilbert} />
            <Stack.Screen name="PAS" component={PAS} />
            <Stack.Screen name="StandUP" component={StandUP} />
            <Stack.Screen name="FunnyComicStrips" component={FunnyComicStrips} />
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
        alignContent: 'center',
        alignItems: 'center',
        fontSize: 17,
        marginTop: 14,
        color: "white",
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
    vtext: {
        fontSize: 15,
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'center',
        color: "white",
        alignSelf: 'center',
    },
});
