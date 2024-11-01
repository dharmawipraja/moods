import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/HomeScreen';
import Settings from '../Screens/SettingsScreen';
import Statistics from '../Screens/StatisticsScreen';
import Header from '../Components/Header/Header';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Statistics" component={Statistics} options={{ header: () => <Header title='Statistics' /> }} />
      <Tab.Screen name="Settings" component={Settings} options={{ header: () => <Header title='Settings' /> }} />
    </Tab.Navigator>
  );
}

export default BottomTab