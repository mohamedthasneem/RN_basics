import React from 'react';
import { Text,View ,TextInput, TextPropTypes, TouchableOpacity} from 'react-native';


const First = ({navigation}) => {
  return (
    // <view>
      // <Text>Hello, I am your {num} funtion Component!</Text>
    // <Text>Total amount is {calculate("07","21","96")}</Text>
    /* </view> */

    <View style={{flex:1 , justifyContent:'center',alignItems:'center'}}>
    {/* <Text>Hello, {props.greed}</Text> */}
    <Text>Hello, </Text>
    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
      <Text>test</Text>
    </TouchableOpacity>
    {/* <TextInput
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
      }}
      defaultValue="Name me!"
    /> */}
    {/* <Text>Total amount is {calculate("07","21","96")}</Text> */}
  </View>
    
  );
}

export default First;