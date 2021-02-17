import React, { Component } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native';
import { Header } from 'react-native-elements';
import db from '../config'
import firebase from 'firebase'

export default class SettingScreen extends Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      firstName: '',
      lastName: '',
      address: '',
      contact: '',
      password: '',
      confirmPassword: '',
      docId: ''
    }
  }
  aboutScreen = () => {
    this.props.navigation.navigate('Menu');
}
  getUserDetails = () => {
    var email = firebase.auth().currentUser.email;
    db.collection('users').where('email_id', '==', email).get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          var data = doc.data()
          this.setState({
            emailId: data.email_id,
            firstName: data.first_name,
            lastName: data.last_name,
            address: data.address,
            password: data.password,
            confirmPassword: data.confirmPassword,
            contact: data.contact,
            docId: doc.id
          })
        });
      })
  }

  updateUserDetails = () => {
    db.collection('users').doc(this.state.docId)
      .update({
        "first_name": this.state.firstName,
        "last_name": this.state.lastName,
        "address": this.state.address,
        "contact": this.state.contact,
      })

    Alert.alert("Profile Updated Successfully")

  }

  componentDidMount() {
    this.getUserDetails()
  }


  render() {
    return (
      <View style={styles.container} >
        <Image
          source={require('../assets/ReviveLogo.png')}
          style={{ height: 50, width: 50, marginTop: 20 }}
        />

        <Text style={styles.text}>Settings</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.formTextInput}
            placeholder={"Contact"}
            maxLength={10}
            keyboardType={'numeric'}
            placeholderTextColor="white"
            onChangeText={(text) => {
              this.setState({
                contact: text
              })
            }}
            value={this.state.contact}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder={"Address"}
            placeholderTextColor="white"
            multiline={true}
            onChangeText={(text) => {
              this.setState({
                address: text
              })
            }}
            value={this.state.address}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder={"Password"}
            secureTextEntry={true}
            placeholderTextColor="white"
            onChangeText={(text) => {
              this.setState({
                password: text
              })
            }}
            value={this.state.password}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder={"Confirm Password"}
            secureTextEntry={true}
            placeholderTextColor="white"
            onChangeText={(text) => {
              this.setState({
                confirmPassword: text
              })
            }}
            value={this.state.confirmPassword}
          />
          <TouchableOpacity style={styles.button}
            onPress={() => {
              this.updateUserDetails()
            }}>
            <Text style={styles.buttonText}>Save</Text>
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
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  formContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },
  formTextInput: {
    width: "75%",
    height: 35,
    alignSelf: 'center',
    borderColor: '#ffab91',
    borderRadius: 10,
    marginTop: 200,
    borderWidth: 1,
    color: "white",
    marginTop: 20,
    padding: 10,
  },
  text: {
    alignSelf: 'center',
    fontSize: 25,
    marginTop: 15,
    color: "white",
    justifyContent: 'center',
  },
  button: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    borderWidth: 5,
    borderColor: "#E1FF3E",
    backgroundColor: "black",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: 20
  },
  buttonText: {
    fontSize: 15,
    color: "#fff"
  }
})
