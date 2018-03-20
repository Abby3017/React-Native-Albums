import React from 'react';
import { AppRegistery, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';

// const App = () => (
//   <Header />
// );

export default class App extends React.Component { 
  render() {
    return (
      <View>
      <View>
      <Header />
      </View>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>This is so coool. </Text>
      </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
