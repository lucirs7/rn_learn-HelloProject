import React from "react";
import { View, StyleSheet, Image } from "react-native";

export default function App() {
  return (
    <View >
      <View style={{ width: 50, height: 50, backgroundColor: '#fcad03' }}></View>
      <View style={{ width: 100, height: 100, backgroundColor: '#fc4299' }}></View>
      <View style={{ width: 150, height: 150, backgroundColor: '#11870f' }}></View>
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

/**
 * First app. Videos 1-14 (inclusive).
 */
/*
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
*/