import React , { Component } from 'react';
import { Button, Text, View ,Alert,TextInput,FlatList,TouchableOpacity,SafeAreaView,ScrollView} from 'react-native';
import styles from '../styles/Styles';
import Icon from 'react-native-vector-icons/Ionicons';

class Register extends Component
 {
    UserRegFunction= ()=>{
        console.log("Register Suceecs!!");
    }

    constructor(props) {
        super(props)
        this.state = {
            UserEmail:'',
            UserPassword:''
        }
      }
    
  render(){
    return(
      <View>
        <SafeAreaView>
          <ScrollView keyboardShouldPersistTaps={'handled'} style={{ backgroundColor: 'transparent'}}>
            <View style={styles.mainScreenBox}>
              <Text style={styles.title}>{"Register"}</Text>
              <View>
                <Text style={styles.textitem}>{"mob_nos"}</Text>
                <TextInput
                  ref={'email'}
                  returnKeyType='next'
                  keyboardType="numeric"
                  onSubmitEditing={() => this.focusNextField('pw')}
                  style={styles.txtinput}
                  onChangeText={UserEmail => this.setState({ UserEmail })}
                  placeholder="07XXXXXXXX"
                  blurOnSubmit={false}
                  placeholderTextColor="#6F6E6E"
                  maxLength={10}>
                </TextInput>
              </View>
              <View>
                <Text style={styles.textitem}>{"pw"}</Text>
                <View style={{ flexDirection: 'row' }}>
                  <TextInput
                    ref={'pw'}
                    style={styles.txtinput}
                    secureTextEntry={this.state.pwShow}
                    onChangeText={UserPassword => this.setState({ UserPassword })}
                    placeholder={"pw"}
                    placeholderTextColor="#6F6E6E"
                    blurOnSubmit={false}
                    // onSubmitEditing={this.UserRegFunction}
                    maxLength={30}>
                  </TextInput>
                  {/* {this.state.pwShow == false ? <TouchableOpacity onPress={() => this.changePwShow()}><Image style={{ width: 25, height: 25, marginLeft: 5 , marginTop:12}} source={require('../assets/eye.png')} /></TouchableOpacity> : <TouchableOpacity onPress={() => this.changePwShow()}><Image style={{ width: 25, height: 25, marginLeft: 5 , marginTop:12}} source={require('../assets/eye-off.jpg')} /></TouchableOpacity> } */}
                  <Icon style={styles.icon} name={this.state.iconStyle} onPress={() => this.changePwShow()}></Icon>
                </View>
              </View>
              <TouchableOpacity style={[styles.AllBtn, { marginBottom: 5 }]} onPress={this.UserRegFunction}>
                <Text style={styles.btn_txt}>{"login"}</Text>
              </TouchableOpacity>
              {/* <View style={styles.GoToRegPge}>
                <Text style={styles.textitem}>{"if_no_acc"}</Text>
                <Text style={[styles.textitem, { marginLeft: -18, color: 'orange' }]} onPress={() => this.props.navigation.navigate('first')}> {"register"}</Text>
              </View> */}
              {/* <Text>{this.props.navigation.state.params ? this.props.navigation.state.params.new_lang : this.state.Lang}</Text> */}
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

export default Register;