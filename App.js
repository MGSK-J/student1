import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Details from './Components/Details';
import Home from './Components/Home';
import List from './Components/List';
import FullDetails from './Components/FullDetails';
import Numbers from './Components/Numbers';

const Stack=createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='List'>
      <Stack.Screen name="Details" component={Details}/>
      <Stack.Screen name="List" component={List}/>
      <Stack.Screen name="FullDetails" component={FullDetails}/>
      <Stack.Screen name="Numbers" component={Numbers}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
