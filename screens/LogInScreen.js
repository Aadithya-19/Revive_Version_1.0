import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image,
  disableYellowBox
} from 'react-native';

import db from '../config';
import firebase from 'firebase';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs( )

export default class LogInScreen extends Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      password: '',
      firstName: '',
      lastName: '',
      address: '',
      contact: '',
      confirmPassword: '',
      isModalVisible: 'false'
    }
  }

  userSignUp = (emailId, password, confirmPassword) => {
    if (password !== confirmPassword) {
      return Alert.alert("Password doesn't match\ncheck your password.")
    } else {
      firebase.auth().createUserWithEmailAndPassword(emailId, password)
        .then(() => {
          db.collection('users').add({
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            contact: this.state.contact,
            email_id: this.state.emailId,
            address: this.state.address

          })
          return Alert.alert(
            'User Added Successfully',
            '',
            [
              { text: 'OK', onPress: () => this.setState({ "isModalVisible": false }) },
            ]
          );
        })
        .catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage)
        });
    }
  }

  userLogin = (emailId, password) => {
    firebase.auth().signInWithEmailAndPassword(emailId, password)
      .then(() => {
        this.props.navigation.navigate('Home')
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage)
      })

  }

  showModal = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.isModalVisible}
      >
        <View style={styles.modalContainer}>
          <ScrollView style={{ width: '100%' }}>
            <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
              <Text
                style={styles.modalTitle}>
                  Registration
              </Text>
              <TextInput
                style={styles.formTextInput}
                placeholder={"First Name"}
                maxLength={8}
                onChangeText={(text) => {
                  this.setState({
                    firstName: text
                  })
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={"Last Name"}
                maxLength={8}
                onChangeText={(text) => {
                  this.setState({
                    lastName: text
                  })
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={"Contact"}
                maxLength={10}
                keyboardType={'numeric'}
                onChangeText={(text) => {
                  this.setState({
                    contact: text
                  })
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={"Address"}
                multiline={true}
                onChangeText={(text) => {
                  this.setState({
                    address: text
                  })
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={"Email"}
                keyboardType={'email-address'}
                onChangeText={(text) => {
                  this.setState({
                    emailId: text
                  })
                }}
              /><TextInput
                style={styles.formTextInput}
                placeholder={"Password"}
                secureTextEntry={true}
                onChangeText={(text) => {
                  this.setState({
                    password: text
                  })
                }}
              /><TextInput
                style={styles.formTextInput}
                placeholder={"Confrim Password"}
                secureTextEntry={true}
                onChangeText={(text) => {
                  this.setState({
                    confirmPassword: text
                  })
                }}
              />
              <View style={styles.modalBackButton}>
                <TouchableOpacity
                  style={styles.registerButton}
                  onPress={() =>
                    this.userSignUp(this.state.emailId, this.state.password, this.state.confirmPassword)
                  }
                >
                  <Text style={styles.registerButtonText}>Register</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.modalBackButton}>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => this.setState({ "isModalVisible": false })}
                >
                  <Text style={{ color: '#ff5722' }}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </Modal>
    )
  }
  render() {
    return (
      <View
        style={{ flex: 1, backgroundColor: "black" }}>
        <Image
          source={require('../assets/ReviveLogo.png')}
          style={{ alignSelf: 'center', height: 300, width: 300, marginTop: 20 }}
        />
        <View style={styles.container}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>

          </View>
          {
            this.showModal()
          }

          <View style={{ justifyContent: 'center', alignItems: 'center', backgroundolor: "green", marginTop: 40, }}>
          </View>
          <View>
            <TextInput
              style={styles.loginBox}
              placeholder="abc@example.com"
              placeholderTextColor="white"
              keyboardType='email-address'
              onChangeText={(text) => {
                this.setState({
                  emailId: text
                })
              }}
            />
            <TextInput
              style={styles.loginBox}
              secureTextEntry={true}
              placeholder="Enter Password"
              placeholderTextColor="white"
              onChangeText={(text) => {
                this.setState({
                  password: text
                })
              }}
            />
            <TouchableOpacity
              style={[styles.button, { marginBottom: 20, marginTop: 40 }]}
              onPress={() => {
                this.userLogin(this.state.emailId, this.state.password)
              }}
            >
              <Text style={styles.buttonText}>Registered User</Text>
            
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: 300,
                height: 50,
                marginTop: 30,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 25,
                backgroundColor: "black",
                borderWidth: 5,
                borderColor: "#E1FF3E",
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
              onPress={() => this.setState({ isModalVisible: true })}

            >
              <Text style={styles.buttonText}>New User</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "black"
  },
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 65,
    fontWeight: '300',
    paddingBottom: 30,
    color: '#ff3d00'
  },
  loginBox: {
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor: "#E1FF3E",
    color: "white",
    fontSize: 20,
    margin: 10,
    paddingLeft: 10
  },
  KeyboardAvoidingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalTitle: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 30,
    color: '#000000',
    margin: 50
  },
  modalContainer: {
    flex: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#ffff",
    marginRight: 30,
    marginLeft: 30,
    marginTop: 80,
    marginBottom: 80,
  },
  formTextInput: {
    width: "75%",
    height: 35,
    alignSelf: 'center',
    borderColor: '#ffab91',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    padding: 10
  },
  registerButton: {
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 30
  },
  registerButtonText: {
    color: '#ff5722',
    fontSize: 15,
    fontWeight: 'bold'
  },
  cancelButton: {
    width: 200,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },

  button: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 25,
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
  },
  buttonText: {
    color: "white",
    fontWeight: '200',
    fontSize: 20
  }
})