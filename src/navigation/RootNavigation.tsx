import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/HomeScreen';
import Settings from '../Screens/SettingsScreen';
import Statistics from '../Screens/StatisticsScreen';
import Header from '../Components/Header/Header';
import { Icons } from '../Assets';
import { Colors } from '../Assets/Colors';
import { StyleSheet } from 'react-native';

const { HomeIcon, PieChartIcon, GearIcon } = Icons;
const { BLACK, BLUE, WHITE } = Colors;

const Tab = createBottomTabNavigator();

const renderTabBarIcon = (icon: string, color: string) => {
  const iconProps = {
    color,
    width: 24,
    height: 24,
  };

  switch (icon) {
    case 'Home':
      return <HomeIcon {...iconProps} />;
    case 'Statistics':
      return <PieChartIcon {...iconProps} />;
    case 'Settings':
      return <GearIcon {...iconProps} />;
    default:
      return null;
  }
};

const renderHeader = (title: string) => <Header title={title} />;

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
      }}
      sceneContainerStyle={styles.sceneContainer}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarActiveTintColor: BLUE,
          tabBarInactiveTintColor: BLACK,
          tabBarIcon: ({ color }) => renderTabBarIcon('Home', color),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={Statistics}
        options={{
          tabBarActiveTintColor: BLUE,
          tabBarInactiveTintColor: BLACK,
          tabBarIcon: ({ color }) => renderTabBarIcon('Statistics', color),
          header: () => renderHeader('Statistics'),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarActiveTintColor: BLUE,
          tabBarInactiveTintColor: BLACK,
          tabBarIcon: ({ color }) => renderTabBarIcon('Settings', color),
          header: () => renderHeader('Settings'),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  tabBar: { paddingTop: 15 },
  sceneContainer: { backgroundColor: WHITE },
});
