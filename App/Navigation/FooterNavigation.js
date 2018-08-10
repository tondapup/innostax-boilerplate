import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import HomeScreen from '../Screens/Home'
import DetailsScreen from '../Screens/Details'
import ProfileScreen from '../Screens/Profile'
import SettingsScreen from '../Screens/Settings'


export default TabNavigator(
  {
    Home: { screen: HomeScreen },
    Details : {screen: DetailsScreen},
    Profile : {screen: ProfileScreen},
    Settings: { screen: SettingsScreen }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
            iconName = `ios-options${focused ? '' : '-outline'}`;
        } else if (routeName === 'Details'){
            iconName = `ios-document${focused ? '' : '-outline'}`;
        } else if (routeName === 'Profile'){
            iconName = `ios-person${focused ? '' : '-outline'}`;
        }

        return <Icon name={iconName} size={25} color={tintColor} />
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);
