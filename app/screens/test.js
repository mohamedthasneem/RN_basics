import React from 'react';
import { Text,View ,TextInput, TextPropTypes} from 'react-native';


const Test = (props) => {
  return (
    // <view>
      // <Text>Hello, I am your {num} funtion Component!</Text>
    // <Text>Total amount is {calculate("07","21","96")}</Text>
    /* </view> */

    <View>
    {/* <Text>Hello, {props.greed}</Text> */}
    <Text>Hello, test </Text>
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

export default Test;