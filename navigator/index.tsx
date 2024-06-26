import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {useColorScheme} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import MainScreen from '../screens/MainScreen';
import DetailsScreen from '../screens/DetailsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AboutScreen from '../screens/AboutScreen';

const AppNavigator = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const HomeStack = createStackNavigator();
  const ProfileStack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();

  const HomeStackRoutes = () => {
    return (
      <HomeStack.Navigator screenOptions={{headerShown: false}}>
        <HomeStack.Screen name="Main" component={MainScreen} />
        <HomeStack.Screen name="Details" component={DetailsScreen} />
      </HomeStack.Navigator>
    );
  };

  const ProfileStackRoutes = () => {
    return (
      <ProfileStack.Navigator screenOptions={{headerShown: false}}>
        <ProfileStack.Screen name="Profile" component={ProfileScreen} />
        <ProfileStack.Screen name="Settings" component={SettingsScreen} />
      </ProfileStack.Navigator>
    );
  };

  const TabRoutes = () => {
    return (
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={HomeStackRoutes} />
        <Tab.Screen name="Profile" component={ProfileStackRoutes} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    );
  };

  const DrawerRoutes = (
    <Drawer.Navigator>
      <Drawer.Screen name="Jokes" component={TabRoutes} />
      <Drawer.Screen name="About Us" component={AboutScreen} />
    </Drawer.Navigator>
  );

  return (
    <SafeAreaView style={backgroundStyle}>
      <NavigationContainer>{DrawerRoutes}</NavigationContainer>
    </SafeAreaView>
  );
};

export default AppNavigator;
