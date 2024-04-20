import React from "react";
import { View, StyleSheet } from "react-native";
import { NameText } from "./src/components/nameText";

export default function App() {
  return (
    <View style={styles.container}>
      <NameText nameValue="Lucy" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EA7773',
    alignItems: 'center',
    justifyContent: 'center',
  },
});