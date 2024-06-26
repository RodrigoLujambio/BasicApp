import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>My Profile</Text>
      <View style={styles.infoContainer}>
        <Text>Name: </Text>
        <Text>Rodrigo Lujambio</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text>Age: </Text>
        <Text>32</Text>
      </View>
      <View style={styles.infoContainer}>
        <Button
          title="Go to Settings"
          onPress={() => {
            navigation.navigate('Settings');
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

export default ProfileScreen;
