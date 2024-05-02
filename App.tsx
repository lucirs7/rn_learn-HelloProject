import React from "react";
import { Text, View, StyleSheet} from "react-native";
import { NativeBaseProvider, Button } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Text>🫰</Text>
        <Button style={styles.button}>
          <Text>Ok!</Text>
        </Button>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 8,
    marginVertical: 12,
    backgroundColor: 'pink',
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

/**
 * Third app. Videos 17-19 (inclusive).
 * About states and textInput.
 */
/*
export default function App() {
  const [myText, setMyText] = useState('This is your text');

  return (
    <View style={styles.container}>
      <Text>🫰</Text>
      <TextInput
        style={styles.inputText}
        placeholderTextColor={'#700020'}
        placeholder="Enter some text here..."
        onChangeText={(text) => {setMyText(text)}}
      />
      <Text style={styles.text}>{myText}</Text>
    </View>
  );
}
*/

/**
 * Fourth app. Video 20.
 * About 'button'.
 */
/*
export default function App() {
  const [myText, setMyText] = useState('This is your text');

  return (
    <View style={styles.container}>
      <Text>🫰</Text>
      <TextInput
        style={styles.inputText}
        placeholderTextColor={'#700020'}
        placeholder="Enter some text here..."
        onChangeText={(text) => {setMyText(text)}}
      />
      <Button
        title='OK'
        color={'#700020'}
        onPress={myButtonPressed}
      />
      <Text style={styles.text}>{myText}</Text>
    </View>
  );
}
*/

/**
 * Background colour changer app.
 */
/*
export default function App() {
  //const [myText, setMyText] = useState('Generate random colour');

  const generateRandomColour = (): string => {
    const randomRed: Number = Math.floor((Math.random() * 256));
    const randomGreen: Number = Math.floor((Math.random() * 256));
    const randomBlue: Number = Math.floor((Math.random() * 256));

    return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
  };

  const [randomColour, setRandomColour] = useState(generateRandomColour());

  const myButtonPressed = () => {
    Alert.alert('Text entered!');
  };

  return (
    <View style={{...styles.container, backgroundColor: randomColour}}>
      <Text>🫰</Text>
      <TouchableOpacity
        onPress={() => setRandomColour(generateRandomColour)}
        >
          <Text style={styles.text}>Generate random background color</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    width: 250,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#7d4a58',
    marginTop: 30,
    marginBottom: 10,
    padding: 10,
  },
  text: {
    marginTop: 30,
    fontSize: 16,
    color: '#11111f',
    backgroundColor: '#ff94b2',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fffffe',
  },
});
*/