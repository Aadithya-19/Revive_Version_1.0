import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import { ScrollView } from 'react-native-gesture-handler';
import { WebView } from 'react-native-webview'

export default class videoPlaying extends Component {

  render() {
    return (
      <View style={{ backgroundColor: "black", flex: 1 }}>

        <Image
          source={require('../assets/ReviveLogo.png')}
          style={{ height: 50, width: 50, marginTop: 20 }}
        />
        <Text style={styles.text}>
          Say No To Bullying
        </Text>
        <View>
          <ScrollView>

            <WebView
              allowFullScreenVideo
              allowInlineMediaPlayback
              mediaPlaybackRequiresUserAction
              source={{ uri: 'https://www.youtube.com/embed/ynTuA_tlZDE' }}
              style={{ marginTop: 20, width: 400, height: 300, alignSelf: 'center', borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
            />
            <Text style={styles.vtext}>
              Ways to Stop Bullying
            </Text>

            <WebView
              allowFullScreenVideo
              allowInlineMediaPlayback
              mediaPlaybackRequiresUserAction
              source={{ uri: 'https://www.youtube.com/embed/yGQWawZ-JAI' }}
              style={{ marginTop: 20, width: 400, height: 300, alignSelf: 'center', borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
            />
            <Text style={styles.vtext}>
              Don't Worry If People Don't Take Your Goals Seriously
            </Text>

            <WebView
              allowFullScreenVideo
              allowInlineMediaPlayback
              mediaPlaybackRequiresUserAction
              source={{ uri: 'https://www.youtube.com/embed/aHtuB6UaWsM' }}
              style={{ marginTop: 20, width: 400, height: 300, alignSelf: 'center', borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
            />
            <Text style={styles.vtext}>
              Life Story Of Dalai Lama
            </Text>
            <WebView
              allowFullScreenVideo
              allowInlineMediaPlayback
              mediaPlaybackRequiresUserAction
              source={{ uri: 'https://www.youtube.com/embed/pl2YkA84_ys' }}
              style={{ marginTop: 20, width: 400, height: 300, alignSelf: 'center', borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
            />
            <Text style={styles.vtext}>
              Proof That You Are Never To Old To Achieve Your Dreams
            </Text>
            <WebView
              allowFullScreenVideo
              allowInlineMediaPlayback
              mediaPlaybackRequiresUserAction
              source={{ uri: 'https://www.youtube.com/embed/t1Y1vyZ9nsI' }}
              style={{ marginTop: 20, width: 400, height: 300, alignSelf: 'center', borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
            />
            <Text style={styles.vtext}>
              Why It's Never Too Late To Achieve Your Dreams
            </Text>



            <WebView
              allowFullScreenVideo
              allowInlineMediaPlayback
              mediaPlaybackRequiresUserAction
              source={{ uri: 'https://www.youtube.com/embed/iGwp8gtDnGM' }}
              style={{ marginTop: 20, width: 400, height: 300, alignSelf: 'center', borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
            />

            <Text style={styles.vtext}>
              Be The Person You Want Your Kids To Be
            </Text>



            <WebView
              allowFullScreenVideo
              allowInlineMediaPlayback
              mediaPlaybackRequiresUserAction
              source={{ uri: 'https://www.youtube.com/embed/BLzCpAfzSu4' }}
              style={{ marginTop: 20, width: 400, height: 300, alignSelf: 'center', borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
            />
            <Text style={styles.vtext}>
              How to Talk to Kids About Bullying | Parents
            </Text>
            <WebView
              allowFullScreenVideo
              allowInlineMediaPlayback
              mediaPlaybackRequiresUserAction
              source={{ uri: 'https://www.youtube.com/embed/RnzDfBZEQok' }}
              style={{ marginTop: 20, width: 400, height: 300, alignSelf: 'center', borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
            />
            <Text style={styles.vtext}>
              10 Things To Do If You Are Getting Bullied
            </Text>
            <WebView
              allowFullScreenVideo
              allowInlineMediaPlayback
              mediaPlaybackRequiresUserAction
              source={{ uri: 'https://www.youtube.com/embed/PuVjWuedJ9w' }}
              style={{ marginTop: 20, width: 400, height: 300, alignSelf: 'center', borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
            />
            <Text style={styles.vtext}>
              Tips and ways to stop bullying at schools
            </Text>
            <WebView
              allowFullScreenVideo
              allowInlineMediaPlayback
              mediaPlaybackRequiresUserAction
              source={{ uri: 'https://www.youtube.com/embed/4mrE5zgEvt4' }}
              style={{ marginTop: 20, width: 400, height: 300, alignSelf: 'center', borderWidth: 4, borderWidth: 5, borderColor: "#E1FF3E", }}
            />
            <Text style={{
              fontSize: 15,
              marginTop: 20,
              marginBottom: 130,
              justifyContent: 'center',
              color: "white",
              alignSelf: 'center',
            }}>
              Protect Yourself Rules - Bullying
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({

  text: {
    fontSize: 25,
    marginTop: 20,
    justifyContent: 'center',
    color: "white",
    alignSelf: 'center',
  },
  vtext: {
    fontSize: 15,
    marginTop: 20,
    marginBottom: 30,
    justifyContent: 'center',
    color: "white",
    alignSelf: 'center',
  },
});