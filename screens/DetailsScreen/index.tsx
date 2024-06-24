import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const DetailsScreen = ({route}) => {
  const info = route.params.item;
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Details Screen</Text>
      <Text>{info.setup}</Text>
      <Text>{info.punchline}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'wheat',
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  h1: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    fontSize: 24,
  },
});

export default DetailsScreen;
