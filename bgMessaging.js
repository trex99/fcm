// @flow
import firebase from 'react-native-firebase';

// Optional flow type
import { RemoteMessage } from 'react-native-firebase';

export default async (message) => {
    // handle your message

    console.log("bgMessage----------------------");
    console.log(message);
    console.log("bgMessage----------------------");

    return Promise.resolve();
}