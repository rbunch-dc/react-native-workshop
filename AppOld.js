import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button 
          title="Press me" 
          onPress={()=>{
            console.log("Pressed!")
          }}
        />
        <Image 
          source = {{ uri: 'http://www.digitalcrafts.com/sites/all/themes/digitalcrafts/images/digitalcrafts-site-logo.png' }}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
