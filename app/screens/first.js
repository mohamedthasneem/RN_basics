import React from 'react';
import { Text,View ,TextInput, TextPropTypes} from 'react-native';

const calculate = (num1,num2,num3)=>{
  return num1 + ":" + num2 + ":" +num3;
}

const First = (props) => {
  return (
    // <view>
      // <Text>Hello, I am your {num} funtion Component!</Text>
    // <Text>Total amount is {calculate("07","21","96")}</Text>
    /* </view> */

    <View>
    <Text>Hello, {props.greed}</Text>
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