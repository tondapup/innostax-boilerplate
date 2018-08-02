import React, {Component} from 'react' 
import PushNotification from 'react-native-push-notification'
import {PushNotificationIOS} from 'react-native'

export default class PushNotificationController extends Component {

    componentDidMount(){
        PushNotification.configure({
            onRegister: function(token) {
                alert("device registered")
                alert(JSON.stringify(token))
            },
            senderID: "481031609446", // "YOUR GCM (OR FCM) SENDER ID"
            // (required) Called when a remote or local notification is opened or received
            onNotification: function(notification) {
                alert("notification received")
                //for iOS only
                notification.finish(PushNotificationIOS.FetchResult.NoData);
            },
            requestPermissions: true,
        })
    }

    render (){
        return null
    }
}