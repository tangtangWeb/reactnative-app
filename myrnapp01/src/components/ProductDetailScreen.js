
import React from 'react';
import {
  View,
  Text,
} from 'react-native';


//创建跟
export default class ProductDetailScreen extends React.Component{
  static navigationOptions=(obj)=>{
    return {
      title:'商品'+obj.navigation.getParam('pid',999)+'详情'
    }
      
    }
  
 
  componentDidMount(){
    // 组件挂载完成  获取串过来的参数
   let pid=this.props.navigation.state.params;
   console.log(pid);
   console.log(this.props.navigation);

  }
  render(){
    return(
      <View><Text>fire</Text></View>
    )
  }
}