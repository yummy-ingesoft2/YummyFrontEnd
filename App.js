import { createStackNavigator, createAppContainer } from 'react-navigation';
import { AsyncStorage } from 'react-native';
import LandingPage from './src/screens/LandingPage/LandingPage';
import LoginPage from './src/screens/LoginPage/LoginPage';
import RegisterPage from './src/screens/RegisterPage/RegisterPage';
import TabNavigator from './src/TabNavigator';

const AppNavigator = createStackNavigator({
  Landing: { screen: LandingPage },
  Login: { screen: LoginPage },
  Register: { screen: RegisterPage },
  TabNavigator: { screen: TabNavigator }
},
{
    initialRouteName: 'Landing'
  }
)

const saveUserId = async userId => {
  try {
    await AsyncStorage.setItem('userId', userId);
  } catch (error) {
    // Error retrieving data
    console.log(error.message);
  }
};

const getUserId = async () => {
  let userId = '';
  try {
    userId = await AsyncStorage.getItem('userId') || 'none';
  } catch (error) {
    // Error retrieving data
    console.log(error.message);
  }
  return userId;
}

export default createAppContainer(AppNavigator)
