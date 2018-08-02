import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import FooterNavigation from './FooterNavigation'
import HomeScreen from '../Screens/Home'
import DetailsScreen from '../Screens/Details'
import ProfileScreen from '../Screens/Profile'
import SettingsScreen from '../Screens/Settings'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  FooterNavigation : { screen : FooterNavigation },
  HomeScreen : { screen : HomeScreen},
  DetailsScreen : { screen : DetailsScreen },
  ProfileScreen : { screen : ProfileScreen },
  SettingsScreen : { screen: SettingsScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  // initialRouteName: 'LaunchScreen',
  initialRouteName: 'FooterNavigation',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
