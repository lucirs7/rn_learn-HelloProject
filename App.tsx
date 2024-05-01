import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function App() {
  

  return (
    <View style={styles.container}>
      <Text>Hola mundo</Text>
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
 * Getting to know react native.
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

/**
 * Second app. Videos 15-16 (inclusive).
 * Getting to know flexbox in react native.
 */
/*
export default function App() {
  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
      marginTop: 10,
      justifyContent: 'space-between',
      alignItems: 'stretch'
      }}>
      <View style={{ width: 100, height: 100, backgroundColor: '#fcad03' }}></View>
      <View style={{ height: 50, backgroundColor: '#fc4299' }}></View>
      <View style={{ height: 100, backgroundColor: '#11870f' }}></View>
    </View>
  );
}
*/