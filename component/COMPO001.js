import React from 'react';
import firebase from 'react-native-firebase';

export default class COMPO001 extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {

        firebase.messaging().hasPermission().then(enabled => {
          if (enabled) {
            console.log('user has permissions');
          } else {
            firebase.messaging().requestPermission().then(() => {
                console.log('User has authorised');  
            })
            .catch(error => {
                console.log('User has rejected permissions');  
            });              
            console.log("user doesn't have permission");
          } 
        });

        firebase.notifications().getInitialNotification().then((notificationOpen) => {
          if (notificationOpen) {
            // App was opened by a notification
            // Get the action triggered by the notification being opened
            console.log("App was opened by a notification");

            const action = notificationOpen.action;
            // Get information about the notification that was opened
            const notification = notificationOpen.notification;

            console.log("action-------------------------------------");
            console.log(action);
            console.log("action-------------------------------------");
            console.log("notification-------------------------------------");
            console.log(notification);
            console.log("notification-------------------------------------");
          }
        });

        this.notificationDisplayedListener = firebase.notifications().onNotificationDisplayed((notification) => {
            console.log("onNotificationDisplayed-------------------");
            console.log(notification);
            console.log("onNotificationDisplayed-------------------");
            // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
        });
        this.notificationListener = firebase.notifications().onNotification((notification) => {
            console.log("onNotification----------------------");
            console.log(notification);
            console.log("onNotification----------------------");

            firebase.notifications().displayNotification(notification);
        });

        this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
            // Get the action triggered by the notification being opened
            console.log("onNotificationOpened");

            const action = notificationOpen.action;
            // Get information about the notification that was opened
            const notification = notificationOpen.notification;
        });

        this.messageListener = firebase.messaging().onMessage((message) => {
            console.log("onMessage----------------------");
            console.log(message);
            console.log("onMessage----------------------");
            // Process your message as required
        });        
    }

    componentWillUnmount() {
        console.log("unmount----------------------");
        this.notificationDisplayedListener();
        this.notificationListener();
        this.notificationOpenedListener();
        this.messageListener();
    }
    
    render() {
        return null
    }
}

