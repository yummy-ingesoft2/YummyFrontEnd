import { createStackNavigator, createAppContainer } from 'react-navigation';
import { AsyncStorage } from 'react-native';
import LandingPage from './screens/LandingPage/LandingPage';
import LoginPage from './screens/LoginPage/LoginPage';
import RegisterPage from './screens/RegisterPage/RegisterPage';
import ProductPage from './screens/ProductPage/ProductPage';
import createBottomTabNavigator from './TabNavigator';
import { connect } from 'react-redux';
import * as actions from './redux/actions'

const AppNavigator = createStackNavigator({
    Landing: { screen: LandingPage },
    Login: { screen: LoginPage },
    Register: { screen: RegisterPage },
    Product: { screen: ProductPage },
    TabNavigator: { screen: createBottomTabNavigator }
  },
  {
    initialRouteName: 'Login'
  }
)

function mapStateToProps(state){
  return {
    user : state.session && state.session.user ? state.session.user : false
  }
}

export default connect(mapStateToProps)(createAppContainer(AppNavigator));
