import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Lucy</Text>
        <Text style={styles.textStyle}>Lucy</Text>
        <Text style={styles.textStyle}>Lucy</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EA7773',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 22,
    color: '#AE1438',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 5,
  },
});