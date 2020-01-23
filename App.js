import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import COMPO001 from './component/COMPO001';

export default class App extends React.Component {
  constructor(props){
    super(props);
    
  }

  componentDidMount() {
    
  }
  
  componentWillUnmount() {

  }


  render() {
    return (
      <View style={styles.container}>
        <COMPO001></COMPO001>
        <Text>OK !!!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
});
