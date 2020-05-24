

// 引包
import {createAppContainer,createStackNavigator} from 'react-navigation'
import mainScreen from './src/components/mainScreen';
import LoginScreen from './src/components/LoginScreen';
import ProductDetailScreen from './src/components/ProductDetailScreen';
import ProductListScreen from './src/components/ProductListScreen';

// 创建导航器
let routes=createStackNavigator({
  // 登录页
  // 'login':LoginScreen,
  login:LoginScreen,
  // 主屏幕
  main:mainScreen,
  // 商品详情屏幕
  productDetail:ProductDetailScreen,
  // // 商品列表屏幕?
  productList:ProductListScreen


})


//创建跟
export default createAppContainer(routes);