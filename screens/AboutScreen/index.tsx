import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const AboutScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>About Us</Text>
      <View>
        <Text>
          This Basic Application tries to showcase several common use cases
          regarding mobile development, such as fetching data, adding data, and
          navigating between screens, among other.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
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

export default AboutScreen;
