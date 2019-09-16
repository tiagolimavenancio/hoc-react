// @flow
import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView
} from 'react-native';

import * as images from '../images';
import * as HOC from '../HOC';

const DismissKeyboardView = HOC.DismissKeyboardHOC(View);
const FullScreenSpinnerAndDismissKeyboardView = HOC.FullScreenSpinnerHOC(
  DismissKeyboardView
);

const KeyboardAwareImage = HOC.KeyboardAwareHOC(Image);
const KeyboardAwareView = HOC.KeyboardAwareHOC(View);

export default class Login extends Component {
    state = {
        logging: false
    }
    async callLoginAPI() {
        this.setState({ logging: true })
        await new Promise(resolve => {
            setTimeout(resolve, 2000)
        })
        alert('SIGN IN Success')
        this.setState({ logging: false })
    }

    render() {
        return (
            <FullScreenSpinnerAndDismissKeyboardView spinner={this.state.logging} style={styles.container}>
                <KeyboardAvoidingView behavior='padding' style={{ flex: 1 }}>
                    <KeyboardAwareView 
                        style={{ flex: 1, marginBottom: 40 }}
                        styleDuringKeyboardShow={{ marginBottom: 10 }}>
                        <KeyboardAwareImage 
                            resizeMode='contain'
                            style={[
                              {
                                height: '100%',
                                width: '100%'
                              }
                            ]}
                            styleDuringKeyboardShow={{ opacity: 0.5 }}
                            source={images.gembul}
                        />
                    </KeyboardAwareView>
                    <TextInput placeholder="Username" style={[styles.textInput]} />
                    <TextInput
                      placeholder="Password"
                      style={[styles.textInput, { marginVertical: 20 }]} />
                    <TouchableOpacity
                      onPress={() => {
                        this.callLoginAPI();
                      }}
                      style={[styles.button]}>
                      <Text style={{ color: 'white', fontSize: 20, fontWeight: '600' }}>
                        SIGN IN
                      </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
                <TouchableOpacity
                  style={{
                    alignSelf: 'flex-end',
                    height: 40,
                    justifyContent: 'center',
                    marginBottom: 20
                  }} >
                  <Text style={{ color: '#BDC3C6', fontSize: 15 }}>
                    Need Help?
                  </Text>
                </TouchableOpacity>
                <Text style={{ alignSelf: 'center', color: '#A6A8A9', fontSize: 15 }}>
                  Don’t have an account yet ?
                </Text>
                <TouchableOpacity
                  style={{
                    alignSelf: 'center',
                    height: 34,
                    justifyContent: 'center'
                  }} >
                  <Text style={{ color: '#0D92CA', fontSize: 15 }}>
                    Create an account
                  </Text>
                </TouchableOpacity>
            </FullScreenSpinnerAndDismissKeyboardView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 26,
    paddingTop: 26,
    paddingBottom: 18
  },
  logo: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'grey'
  },
  textInput: {
    height: 60,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#ECF0F3',
    paddingHorizontal: 19
  },
  button: {
    height: 60,
    borderRadius: 3,
    backgroundColor: '#11B8FF',
    justifyContent: 'center',
    alignItems: 'center'
  }
});