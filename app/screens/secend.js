import React , { Component } from 'react';
import { Button, Text, View ,Alert,TextInput,FlatList,TouchableOpacity} from 'react-native';
import First from './first';



class Second extends Component
 {
    constructor(props) {
        super(props)
        this.state = {
            isHungry:true,
            name:'',
            User:"thasneem"
        }
      }

      toggle() {
          console.log(this.state.User)
        this.setState(isHungry=>({
            isHungry:!isHungry
        }),
        console.log(this.state.isHungry),
        console.log("hi dear")
        )
    }
    

  render(){

    

    return(
      <View>
        {/* <First greed="good morning"></First> */}
        <Text> i'm {this.state.User} : {this.state.isHungry ? " hungry" : " full"}</Text>
        {/* <Button
          title="Press me"
          onPress={() => Alert.alert('Simple Button pressed')}
        /> */}
        <TextInput
                  ref={'name'}
                  onChangeText={User => this.setState({ User })}
                  placeholder="name"
                  placeholderTextColor="#6F6E6E">
                </TextInput>
        {/* <Text>{this.state.User}</Text> */}
        {/* <TouchableOpacity
         accessible={true}
         accessibilityLabel="Tap me!"
         onPress={()=>this.toggle()}>
         <View>
           <Text>Press me!</Text>
         </View>
       </TouchableOpacity> */}
        <Button
            title={this.state.isHungry ? "take your food !" :"Thank you!!"}
            onPress={()=>this.setState({isHungry: false})}
            // onPress={()=>this.toggle()}
            // onPress={console.log(this.state.isHungry)}
            disabled={!this.state.isHungry}
        />
        {/* <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text >{item.key}</Text>}
      /> */}

      </View>
    );
  }
}

export default Second;