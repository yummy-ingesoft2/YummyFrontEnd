import { createStackNavigator, createAppContainer } from 'react-navigation';
import { AsyncStorage } from 'react-native';
import LandingPage from './screens/LandingPage/LandingPage';
import LoginPage from './screens/LoginPage/LoginPage';
import RegisterPage from './screens/RegisterPage/RegisterPage';
import RegisterPage2 from './screens/RegisterPage/RegisterPage2';
import ProductPage from './screens/ProductPage/ProductPage';
import Reviews from './screens/ProductPage/Reviews';
import AddProduct from './screens/ProductPage/AddProduct';
import createBottomTabNavigator from './TabNavigator';
import { connect } from 'react-redux';
import * as actions from './redux/actions'

const AppNavigator = createStackNavigator({
    Landing: { screen: LandingPage },
    Login: { screen: LoginPage },
    Register: { screen: RegisterPage },
    Register2: { screen: RegisterPage2 },
    Product: { screen: ProductPage },
    Reviews: { screen: Reviews },
    AddProduct: { screen: AddProduct },
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
