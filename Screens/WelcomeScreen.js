import React,{Component} from 'react';
import {View,Text, TextInput,StyleSheet, TouchableOpacity,alert} from 'react-native';
import db from '../config';
import firebase from 'firebase'

export default class WelcomeScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            EmailId: '',
            Password: ''
        }
    }
    userLogin = (emailId, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(()=>{
          return alert("Successfully Login")
        })
        .catch((error)=> {
          var errorCode = error.code;
          var errorMessage = error.message;
          return alert('User Not Found')
        })
      }
    
      userSignUp = (emailId, password) =>{
        firebase.auth().createUserWithEmailAndPassword(emailId, password)
        .then((response)=>{
          return alert("User Added Successfully")
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          return alert(errorMessage)
        });
      }

    render(){
        return(
            <View style = {styles.container}> 
     <View style={styles.profileContainer}>
          <Text style={styles.title}> Barter App</Text>
        </View>
    
    <View>

    <TextInput
          style={styles.loginBox}
          placeholder="USERNAME"
          placeholderTextColor = "#ffff"
          keyboardType ='email-address'
          onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
          }}
        />

        <TextInput
          style={styles.loginBox}
          secureTextEntry = {true}
          placeholder="PASSWORD"
          placeholderTextColor = "#ffff"
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />

    
                 <TouchableOpacity
            style={[styles.button,{marginBottom:20, marginTop:20}]}
            onPress = {()=>{this.userLogin(this.state.emailId,this.state.password)}}
            >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>{this.userSignUp(this.state.emailId, this.state.password)}}
            >
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>


  <Text style= {styles.footer}></Text>


            </View> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F8BE85', 
    justifyContent:'center',
     alignItems:'center',  
},
  profileContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#F8BE85'
  },
  title :{
    fontSize:65,
    fontWeight:'300',
    paddingBottom:30,
    color : '#ff3d00'
  },
  loginBox:{
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor : '#ff8a65',
    fontSize: 20,
    margin:10,
    paddingLeft:10
  },
  button:{
    width:300,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#ff9800",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.30,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonText:{
    color:'#ffff',
    fontWeight:'200',
    fontSize:20
  },
  buttonContainer:{
    flex:1,
    alignItems:'center'
  },
  footer:{
    paddingBottom: 260
  }
})