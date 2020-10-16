import React, { Component } from 'react';
import {StyleSheet, 
    Text, 
    View, 
    StatusBar, 
    TextInput, 
    TouchableOpacity } 
    from 'react-native';

    export default class Logo extends Component<{}>{
  
  render(){
    return (
      <View style={styles.container}>
         <TextInput style={styles.inputBox}underlineColorAndroid='rgba(0,0,0,0)'placeholder="Email" placeholderTextColor="#ffffffff" 
         selectionColor="#fff" keyboardType="email-address" onSubmitEditing={() => this.password.focus()}/>
        
        <TextInput style={styles.inputBox}underlineColorAndroid='rgba(0,0,0,0)'placeholder="Password" 
         secureTextEntry={true} placeholderTextColor="#ffffffff" ref={(input) => this.password = input}/>
         
         <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{this.props.type}</Text>
         </TouchableOpacity>
        
         <StatusBar
      backgroundColor= "#003f5c"
      barStyle= "light-content"/>
      </View>
    )
  }
}

/*TeatInput*/

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox:{
      width:300,
      backgroundColor:'rgba(255,255,255,0.3)',
      borderRadius:25,
      paddingHorizontal:16,
      fontSize:16,
      color:'#ffffffff',
      marginVertical: 10
  },

  button:{
    width:300,
    backgroundColor:'#fb5b5a',
    borderRadius:25,
    marginVertical: 10,
    paddingVertical:10
  },

  buttonText:{
      fontSize:16,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center'
  }
  }
);

