import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './Header.styles';

type Props = {
  title: string;
};

const Header = ({ title }: Props) => (
  <View style={styles.container}>
    <Text>{title}</Text>
  </View>
);

export default Header;
