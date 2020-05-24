
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  StyleSheet
} from 'react-native';
//创建跟
export default class mainScreen extends React.Component{
  // 标题
  static navigationOptions={
    title:"主菜单",
    headerRight:(
    <TouchableOpacity>
      <Image style={{width:40,height:40,borderRadius:20}} source={require('../assets/menu_user.jpg')}/>
    </TouchableOpacity>)
    }
  
  jumpList=()=>{
    this.props.navigation.navigate("productList")
   
  }
  render(){
    return(
      <View>
        {/* 统计信息 */}
        <View>
          {/* 第一行 */}
          <View style={ss.boxR}>
            <View>
              <Text>上月卖出</Text>
              <Text>100000999.99</Text>
              <Text>+120%</Text>
            </View>
            <View>
              <Text>上月卖出</Text>
              <Text>100000999.99</Text>
              <Text>+120%</Text>
            </View>
          </View>
          {/* 第二行 */}
          <View style={ss.boxR}>
            <View >
              <Text>上月卖出</Text>
              <Text>100000999.99</Text>
              <Text>+120%</Text>
            </View>
            <View >
              <Text>上月卖出</Text>
              <Text>100000999.99</Text>
              <Text>+120%</Text>
            </View>
          </View>
          {/* 第三行 */}
          <View style={ss.boxR}>
            <View >
              <Text>上月卖出</Text>
              <Text>100000999.99</Text>
              <Text>+120%</Text>
            </View>
            <View>
              <Text>上月卖出</Text>
              <Text>100000999.99</Text>
              <Text>+120%</Text>
            </View>
          </View>
        </View>
        {/* 跳转页面 */}
        <View style={ss.boxR}>
          {/* 第一行 */}
          <View>
            <View>
            <TouchableOpacity onPress={this.jumpList}>
              <Image source={require('../assets/menu_product.jpg')} />
              <Text>商品列表</Text>
            </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity onPress={this.jumpList}>
              <Image source={require('../assets/menu_product.jpg')} />
              <Text>商品列表</Text>
            </TouchableOpacity>
            </View>
          </View>
          {/* 第二行 */}
          <View>
          <View>
            <TouchableOpacity onPress={this.jumpList}>
              <Image source={require('../assets/menu_product.jpg')} />
              <Text>商品列表</Text>
            </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity onPress={this.jumpList}>
              <Image source={require('../assets/menu_product.jpg')} />
              <Text>商品列表</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
       

      </View>
    )
  }
}
let ss=StyleSheet.create({
  boxR:{
    flexDirection:'row'
  }
})