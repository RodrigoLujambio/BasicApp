import React, {ReactNode} from 'react';
import {StyleSheet, View, Pressable} from 'react-native';

interface Props {
  children?: ReactNode;
  id?: number;
  onPressHandler: (id: number) => void;
}

const Card = ({children, id, onPressHandler}: Props) => {
  return (
    <Pressable
      onPress={() => {
        onPressHandler(id as number);
      }}>
      <View style={styles.container}>{children}</View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'wheat',
    borderColor: 'black',
    borderRadius: 8,
    borderWidth: 1,
    width: 200,
    padding: 8,
    marginBottom: 8,
  },
});

export default Card;
