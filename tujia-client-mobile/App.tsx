import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Home from './screens/Home';
import AddMeds from './screens/AddMeds';
import ReminderType from './screens/ReminderType';
import Schedule from './screens/Schedule';
import SplashScreen from './screens/SplashScreen';
import Register from './screens/Register';
import SignIn from './screens/SignIn';


const RootStack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
}

const App = () =>{
  const [fontsLoaded] = useFonts({
    InterBold: require('./assets/fonts/Inter-Bold.ttf'),
    InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
    InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
    InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
    InterLight: require('./assets/fonts/Inter-Light.ttf'),
  });

  if(!fontsLoaded) return null;

  return (
    <NavigationContainer theme={theme}>
      {/* @ts-ignore */}
      <RootStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="SplashScreen"
      >
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="Register" component={Register} />
        <RootStack.Screen name="SignIn" component={SignIn} />
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="AddMeds" component={AddMeds} />
        <RootStack.Screen name="ReminderType" component={ReminderType} />
        <RootStack.Screen name="Schedule" component={Schedule} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}


export default App;