import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  useColorScheme,
  TextInput,
  Button,
  View,
  Platform,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {getJokes} from './api';
import Card from './components/Card';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [jokes, setJokes] = useState([] as any);
  const [jokeFirstLine, setJokeFirstLine] = useState('');
  const [jokeSecondLine, setJokeSecondLine] = useState('');

  useEffect(() => {
    const getJokesPayload = async () => {
      const newJokes = await getJokes();
      setJokes(newJokes.slice(0, 5));
    };
    getJokesPayload();
  }, []);

  const onFirstLineInputChange = (value: string) => {
    setJokeFirstLine(value);
  };

  const onAddNewJokeHandler = () => {
    let newJokes = [...jokes];
    let newJoke = {
      id: newJokes.length + 1,
      setup: jokeFirstLine,
      punchline: jokeSecondLine,
    };
    newJokes.push(newJoke);
    setJokes(newJokes);
    setJokeFirstLine('');
    setJokeSecondLine('');
  };

  const onDeleteJokeHandler = (id: number) => {
    const deleteIndex = jokes.map((j: any) => j.id).indexOf(id);
    let newJokes = [...jokes];
    newJokes.splice(deleteIndex, 1);
    setJokes(newJokes);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Text style={styles.h1}>My Unfunny Jokes List</Text>
      {Platform.OS === 'android' && (
        <Text style={styles.h1}>Now on Android!</Text>
      )}
      <View style={styles.newJokeContainer}>
        <TextInput
          style={styles.input}
          placeholder="Put the first line of the joke"
          value={jokeFirstLine}
          onChangeText={onFirstLineInputChange}
        />
        <TextInput
          style={styles.input}
          placeholder="Put the second line of the joke"
          value={jokeSecondLine}
          onChangeText={(value: string) => {
            setJokeSecondLine(value);
          }}
        />
        <Button title="Add new Joke" onPress={onAddNewJokeHandler} />
      </View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
        contentContainerStyle={{alignItems: 'center'}}>
        {jokes.map((j: any) => {
          return (
            <Card key={j.id} id={j.id} onPressHandler={onDeleteJokeHandler}>
              <Text>{j.setup}</Text>
              <Text style={{marginTop: 8}}>{j.punchline}</Text>
            </Card>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    fontSize: 24,
  },
  newJokeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginTop: 8,
    marginBottom: 8,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    width: 250,
  },
});

export default App;
