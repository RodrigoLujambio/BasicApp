import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const SettingsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>My Setttings</Text>
      <View style={styles.infoContainer}>
        <Text>2FA: </Text>
        <Text style={styles.statusText}>ON</Text>
      </View>
      <View style={styles.infoContainer}>
        <Button
          title="Go Back"
          onPress={() => {
            navigation.navigate('Profile');
          }}
        />
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
  statusText: {
    fontWeight: 'bold',
    color: 'green',
  },
});

export default SettingsScreen;
