import Loginscreen from './Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Welcomescreen from './Welcome';
import Signup from './Signup';
import Profile from './profile';

const Stack=createNativeStackNavigator();
function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{}}>
        <Stack.Screen name='WELCOME' component={Welcomescreen}/>
        <Stack.Screen name='LOGIN' component={Loginscreen}/>
        <Stack.Screen name='SIGNUP' component={Signup}/>
        <Stack.Screen name='PROFILE' component={Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}
export default App
