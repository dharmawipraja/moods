import React from 'react';
import { View, Platform, ViewStyle } from 'react-native';
import { styles } from './Card.styles';

type Props = {
  children: React.JSX.Element;
};

const Card = ({ children }: Props) => {
  const isAndroid = Platform.OS === 'android';
  const androidStyles: ViewStyle = isAndroid ? { overflow: 'hidden' } : {};

  return <View style={[styles.card, androidStyles]}>{children}</View>;
};

export default Card;
