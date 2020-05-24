
import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';


//创建跟
export default class ProductListScreen extends React.Component{
  static navigationOptions={
    title:'商品列表'
  }
  render(){
    return(
      <View>
         <Button title="详情" onPress={()=>(this.props.navigation.navigate("productDetail",{pid:21}))} />
      </View>
    )
  }
}