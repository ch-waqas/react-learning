import React, { Component } from 'react';
import {StyleSheet, Text, View, StatusBar,TouchableOpacity} from 'react-native';
import { Field, reduxForm } from 'redux-form';
import Form from '../components/Form';
import Logo from '../components/Logo';
import InputText from '../components/InputText';
import { Actions} from 'react-native-router-flux';



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
  },

  errorText:{
      color: '#ffffff',
      fontSize: 12,
      paddingHorizontal: 16,
      paddingBottom:8
  }



    });

class Signup extends Component<{}>{
goBack(){
Actions.pop();
}



createNewUser = () => {
    alert("boom")
}

onSubmit = (values) => {
    console.log(values);

}


renderTextInput = (field) => {
    const {meta: {touched, error}, label, secureTextEntry, maxLength, keyboardType, placeholder, input: {onChange, ...restInput}} = field;
    return (
        <View>
          <InputText
              onChangeText={onChange}
              maxLength={maxLength}
              placeholder={placeholder}
              keyboardType={keyboardType}
              secureTextEntry={secureTextEntry}
              label={label}
              {...restInput} />
        {(touched && error) && <Text style={styles.errorText}>{error}</Text>}
        
        </View>
    );
}

render() {
        const { handleSubmit } = this.props;
                return(
                <View style={styles.container}> 
        <Logo/>
        
                    <Field 
                    name="name" 
                    placeholder="Name" 
                    component={this.renderTextInput}/>

                    <Field 
                    name="email" 
                    placeholder="Email" 
                    component={this.renderTextInput}/>

                    <Field 
                    name="password" 
                    placeholder="Password" 
                    secureTextEntry= {true} component={this.renderTextInput}/>

        <TouchableOpacity style={styles.button} onPress={handleSubmit(this.onSubmit)}>
        <Text style={styles.buttonText}>Signup</Text>
         </TouchableOpacity>
        
         <StatusBar
      backgroundColor= "#003f5c"
      barStyle= "light-content"/>

        <View style={styles.signupTextCont}>
        <Text style={styles.signupText}>Already have an account?</Text>
        <TouchableOpacity 
            onPress={this.goBack}
            ><Text 
                style={styles.signupButton} 
                onPress={() => Actions.login()}
                >Sign in
            </Text>
        </TouchableOpacity>
        
        </View>
                </View>
                
            
        )
    }
}

//form validation applied here.

const validate = (values) => {
//errors object
    const errors ={};
    if(!values.name){
        errors.name = "Name is required"
    }

    if(!values.email){
        errors.email = "Email is required"
    }

    if(!values.password){
        errors.password = "Password is required"
    }
    
    return errors;


}
    export default reduxForm({
        // a unique name for the form
        form: "register",
     validate
      })(Signup)
  