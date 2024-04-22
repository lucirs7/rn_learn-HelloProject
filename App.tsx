import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { NameText } from "./src/components/nameText";

export default function App() {
  return (
    <View style={styles.container}>
      <NameText nameValue="Lucy" />
      <Image source={require('./src/images/email.png')} />
      <Image source={{
        uri: "https://images.pexels.com/photos/20552024/pexels-photo-20552024/free-photo-of-mar-amanecer-paisaje-puesta-de-sol.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }}
        style={styles.image} />
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
  image: {
    width: '85%',
    height: '50%',
  },
});