import { createStackNavigator, createAppContainer, AsyncStorage } from 'react-navigation';
import LandingPage from './src/screens/LandingPage/LandingPage';
import LoginPage from './src/screens/LoginPage/LoginPage';
import RegisterPage from './src/screens/RegisterPage/RegisterPage';

const AppNavigator = createStackNavigator({
  Landing: { screen: LandingPage },
  Login: { screen: LoginPage },
  Register: { screen: RegisterPage }
},
{
    initialRouteName: 'Landing'
  }
)

export default createAppContainer(AppNavigator)
