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
       
        <Text style={styles.logo}>MySchool</Text>
      </View>
    )
  }
}

/*TeatInput*/

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  
  }
);



