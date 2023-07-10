import { createStackNavigator } from '@react-navigation/stack';
import { Splash, Weather, WeatherDetails } from 'screens';

export type RootStackParamList = {
  Splash: undefined;
  Weather: undefined;
  WeatherDetails: WeatherDetailsParams;
};

export type WeatherDetailsParams = { city: string };

const Stack = createStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Splash'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Splash'} component={Splash} />
      <Stack.Screen name={'Weather'} component={Weather} />
      <Stack.Screen name={'WeatherDetails'} component={WeatherDetails} />
    </Stack.Navigator>
  );
};
