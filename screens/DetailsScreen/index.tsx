import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const DetailsScreen = ({route, navigation}) => {
  const info = route.params.item;
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Details Screen</Text>
      <Text>{info.setup}</Text>
      <Text>{info.punchline}</Text>
      <View style={styles.infoContainer}>
        <Button
          title="Go Back"
          onPress={() => {
            navigation.navigate('Main');
          }}
        />
        <Button title="Log Out" />
      </View>
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
  infoContainer: {
    flexDirection: 'row',
  },
});

export default DetailsScreen;
