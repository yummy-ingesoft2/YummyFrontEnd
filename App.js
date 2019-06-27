import { createStackNavigator, createAppContainer } from 'react-navigation';
import { AsyncStorage } from 'react-native';
import LandingPage from './src/screens/LandingPage/LandingPage';
import LoginPage from './src/screens/LoginPage/LoginPage';
import RegisterPage from './src/screens/RegisterPage/RegisterPage';
import createBottomTabNavigator from './src/TabNavigator';

const AppNavigator = createStackNavigator({
  Landing: { screen: LandingPage },
  Login: { screen: LoginPage },
  Register: { screen: RegisterPage },
  TabNavigator: { screen: createBottomTabNavigator }
},
{
    initialRouteName: 'Landing'
  }
)

export default createAppContainer(AppNavigator)
