import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../../Assets/Colors';

type Props = {
  children: React.JSX.Element;
};

const Card = ({ children }: Props) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.WHITE,
    borderRadius: 4,
    shadowColor: Colors.BLACK,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});

export default Card;
