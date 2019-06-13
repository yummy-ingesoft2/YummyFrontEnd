import { createStackNavigator, createAppContainer } from 'react-navigation';
import LandingPage from './screens/LandingPage/LandingPage';
import LoginPage from './screens/LoginPage/LoginPage';
import RegisterPage from './screens/RegisterPage/RegisterPage';

const AppNavigator = createStackNavigator({
  LandingPage: { screen: LandingPage },
  LoginPage: { screen: LoginPage},
  RegisterPage: { screen: RegisterPage},
});

const App = createAppContainer(AppNavigator);

export default App;
