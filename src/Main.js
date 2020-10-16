import React, { Component } from 'react';
import {StyleSheet, Text, View, StatusBar,TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Routes from './components/Routes';
import {connect} from "react-redux";

class Main extends Component<{}>{
    render() {
                return(
                    <Routes/>
                    )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
      }



    });
  

export default connect(null, null)(Main)