import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NameText from "./src/components/nameText";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NameText />
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
});