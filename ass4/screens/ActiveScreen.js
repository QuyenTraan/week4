import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function CompleteScreen() {
  return (
    <View style={styles.container}>
      <Text>Active Screen</Text>
    </View>
  );
}

CompleteScreen.navigationOptions = {
  title:" Active"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center'
  }
});