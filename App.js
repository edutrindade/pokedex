import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignIn from './src/screens/SignIn';
import Home from './src/screens/Home';

const navigator = createStackNavigator(
  {
    SignIn: SignIn,
    Home: Home,
  },
  {
    initialRouteName: 'SignIn',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  }
);

export default createAppContainer(navigator);
