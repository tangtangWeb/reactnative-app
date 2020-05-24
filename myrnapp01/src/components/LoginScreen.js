
import React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,

} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
//创建跟
export default class LoginScreen extends React.Component{
  // 配置页头内容
  static navigationOptions={
    title:"管理员登陆"
  }
constructor(){
  super()
  // 状态属性
  this.state={
    uname:'',
    upwd:''
  }
}
// 数据双向绑定
onUname=(uname)=>{
this.setState({
  uname
})
}
onUpwd=(upwd)=>{
  this.setState({
    upwd
  })
  }
  // 登录按钮
  login=()=>{
    let uname=this.state.uname;
    let upwd=this.state.upwd;
    // 异步请求
    let uri="http://www.codeboy.com:9999/data/user/login.php";
    let body=`uname=${uname}&upwd=${upwd}`;
    let headers={'Content-Type':'application/x-www-form-urlencoded'}
    fetch(uri,{
      method:'POST',
      headers,
      body
    })
    .then((res)=>{
     return res.json()}) //等待主体完成  返回请求请求头
    .then((body)=>{
      console.log(body)
      if(body.code===200){
        // alert("登录成功");
        // 如果登录成功跳转到  主页
        this.props.navigation.navigate('main');
      }else{
        alert(body.msg);
      }
    
    }
   
      
      
      
      
      )
    .catch((err)=>{console.log(err)})
  }



  // 跳转函数
  jumpMain=()=>{
    // console.log(this.props.navigation)
    // 根据创建的路由字典  实现页面跳转
    this.props.navigation.navigate("main");
  }
  
  render(){
    return(
      <View style={ss.box}>
      <TextInput style={ss.input} placeholderTextColor="#85939d"
      value={this.state.uname} onChangeText={this.onUname}
      placeholder="请输入用户名"></TextInput>
      <TextInput style={ss.input} placeholderTextColor="#85939d" 
      value={this.state.upwd} onChangeText={this.onUpwd}
      secureTextEntry={true} placeholder="请输入密码"></TextInput>
      <View  style={ss.btnBox}>
      <Button onPress={this.login}  title="登录" />
      </View>
      <View style={ss.logoBox}>
        <Image source={require('../assets/logo.png')} />
        <Text style={ss.logoTitle}>后台管理</Text>
      </View>
    <Text style={ss.copy}> &copy;2017,版权所有 www.baidu.com</Text>
      </View>
    )
  }
}
let ss=StyleSheet.create({
  box:{
    paddingTop:80,
    paddingHorizontal:40
  },
  input:{
    borderBottomWidth:1,
    borderBottomColor:'#85939d',
    padding:8,
    color:'#85939d'
  },
  btnBox:{
    paddingTop:25,
    paddingBottom:30
  },
  logoBox:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
    paddingBottom:20
  },

logoTitle:{
  color:'#85939d',
  fontSize:30
},
copy:{color:'#85939d',
fontSize:16,
textAlign:'center'
}
}
 
)