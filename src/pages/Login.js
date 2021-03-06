import React, { Component } from 'react';
import {StyleSheet, Text, View, StatusBar,TouchableOpacity} from 'react-native';
import Form from '../components/Form';
import Logo from '../components/Logo';
import { Actions} from 'react-native-router-flux';
export default class Login extends Component<{}>{

signup(){
    Actions.signup()
}
    render() {
                return(
                <View style={styles.container}> 
        <Logo/>
        <Form type="login"/>
        <View style={styles.signupTextCont}>
        <Text style={styles.signupText}>Don't have an account yet?</Text>
        <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton} onPress={() => Actions.signup()} > Signup </Text></TouchableOpacity>
        </View>
                </View>  
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
      },

signupTextCont:{
    flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection:'row'
},

signupText:{
    color:'rgba(255,255,255,0.6)',
    fontSize:16
},
signupButton:{
    color:'#ffffffff',
    fontSize:16,
    fontWeight:'500'
}



    });
  