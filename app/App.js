/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React , { Component } from 'react';
import { Button, Text, View ,Alert, StyleSheet, Platform,TouchableOpacity} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import First from './screens/first';
import Second from './screens/secend';
import { NavigationActions } from 'react-navigation';


// const App = () => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center"
//       }}>
//       <Text>Hello, world!</Text>
//       <Text>hihaifh</Text>
//       <Button
//         title="Press me"
//         onPress={() => Alert.alert('Simple Button pressed')}
//       />
//     </View>
//   )
// }
// export default App;

class App extends Component
 {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text_style}>Hello, Mediio !!</Text>
        <Button
          title="lets Go !!"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
         {/* <TouchableOpacity style={[styles.AllBtn, { marginBottom: 5 }]} onPress={this.UserLoginFunction}>
                <Text style={styles.btn_txt}>TouchableOpacity</Text>
          </TouchableOpacity> */}
        {/* <First greed="dudes"></First>
        <First greed="Thasneem"></First> */}
        {/* <First greed="thasneem"></First> */}
        {/* <Second name="thasneem"></Second> */}
        {/* <Second name="jone"></Second> */}
      </View>
    );
  }
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        backgroundColor: 'red'
      },
      android: {
        backgroundColor: '#f54b5e'
      },
      default: {
        // other platforms, web for example
        backgroundColor: 'blue'
      }  
  })
},
  text_style:{
    color: '#1791D0',
    // fontSize:40,
    fontSize: Platform.OS === 'ios' ? 40 : 20
  },
  btn_txt: {
    fontSize: 10,
    color: '#fff',
    alignSelf: "center",
    fontWeight: "bold"
  },
  AllBtn: {
    backgroundColor: '#662eff',
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 8,
    height: 50,
    width:200
  },
});