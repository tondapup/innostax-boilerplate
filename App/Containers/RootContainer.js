import React, { Component } from 'react'
import { View, StatusBar, Text } from 'react-native'
import ReduxNavigation from '../Navigation/ReduxNavigation'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'
import firebase from 'react-native-firebase';
// Styles
import styles from './Styles/RootContainerStyles'
import { Notification } from 'react-native-firebase';
class RootContainer extends Component {
  componentDidMount () {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
  //   firebase.auth()
  // .signInAnonymouslyAndRetrieveData()
  // .then(credential => {
  //   if (credential) {
  //    alert(credential.user.toJSON());
  //   }
  // });

  firebase.messaging()
		.requestPermission()
		.catch(error => {
			// User has rejected permissions
			alert("rejected")
    });
    
firebase.messaging().getToken()
  .then(fcmToken => {
    if (fcmToken) {
     // alert("sahil")    
      console.log(fcmToken)
      this.setState({fcm: fcmToken})  
    } else {
      // user doesn't have a device token yet
      alert("no")
    } 
  });


  this.notificationDisplayedListener = firebase.notifications().onNotificationDisplayed((notification) => {
    alert("34")
    // Process your notification as required
    // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
});
this.notificationListener = firebase.notifications().onNotification((notification) => {
    // Process your notification as required
    alert(notification)
    alert("12")
});


const notification = new firebase.notifications.Notification()
  .setNotificationId('notificationId')
  .setTitle('My notification title')
  .setBody('My notification body')
  .setData({
    key1: 'value1',
    key2: 'value2',
  });

  alert("yess")
  //this works
  firebase.notifications().displayNotification(notification)
  
  }

  componentWillUnmount() {
    this.notificationDisplayedListener();
    this.notificationListener();
}

  render () {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' />
        <Text selectable>{this.state ? this.state.fcm : ''}</Text>
       
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(null, mapDispatchToProps)(RootContainer)
