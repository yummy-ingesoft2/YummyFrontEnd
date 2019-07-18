import { createStackNavigator, createAppContainer } from 'react-navigation';
import { AsyncStorage } from 'react-native';
import LandingPage from './src/screens/LandingPage/LandingPage';
import LoginPage from './src/screens/LoginPage/LoginPage';
import RegisterPage from './src/screens/RegisterPage/RegisterPage';
import RegisterPage2 from './src/screens/RegisterPage/RegisterPage2';
import ProductPage from './src/screens/ProductPage/ProductPage';
import createBottomTabNavigator from './src/TabNavigator';
import { connect } from 'react-redux';
import * as actions from './src/redux/actions'

const AppNavigator = createStackNavigator({
    Landing: { screen: LandingPage },
    Login: { screen: LoginPage },
    Register: { screen: RegisterPage },
    Register2: { screen: RegisterPage2 },
    Product: { screen: ProductPage },
    TabNavigator: { screen: createBottomTabNavigator,
                    navigationOptions: {
                        header: null,
                    } 
                  }
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
